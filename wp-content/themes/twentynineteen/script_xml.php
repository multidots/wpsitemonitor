<?php

	/* Template Name: SITE SCRIPT Template */

	global  $wpdb;
	$type = $_GET['type'];
	if( isset( $_GET['no'] ) ){
		$no_of_records = $_GET['no'];
	}
	$cron_days = 1;

	$url_list_result = array();

	$domain_tbl_name = "{$wpdb->prefix}sm_domain_list";
	$sm_cron_status_tbl_name = "{$wpdb->prefix}sm_cron_status";
	$sm_domain_scan_status = "{$wpdb->prefix}sm_domain_scan_status";
	$sm_sitemap_data_history_tbl_name = "{$wpdb->prefix}sm_sitemap_data_history";
	$sm_admin_data_history_tbl_name = "{$wpdb->prefix}sm_admin_data_history";
	$sm_seo_data_history = "{$wpdb->prefix}sm_seo_data_history";
	$sm_site_critical_history = "{$wpdb->prefix}sm_site_critical_history";
	$sm_site_https_history = "{$wpdb->prefix}sm_site_https_history";
	$sm_site_captcha_check_history = "{$wpdb->prefix}sm_site_captcha_check_history";

	$status_value = '0';

	$cache_key = 'prefix_post_count_publish';

	$_posts = wp_cache_get( $cache_key );



	switch ($type) {
		case 'sitemap':
            if( isset( $no_of_records ) ){

                if( $no_of_records > 0 ) {

                    $domian_lists = $wpdb->get_results(
                        "
                            SELECT dl.*, dh.cron_id, dh.sitemap_xml_data, dh.sitemap_diff_data,dc.*
                            FROM   $domain_tbl_name dl
                            LEFT JOIN 
                                    (
                                        SELECT * 
                                        FROM   $sm_sitemap_data_history_tbl_name dh
                                        WHERE  id 
                                        IN (
                                            SELECT Max(id) 
                                            FROM   $sm_sitemap_data_history_tbl_name dh
                                            GROUP  BY domain_id
                                            )
                                    )dh 
                            ON dl.id = dh.domain_id
                            LEFT JOIN $sm_domain_scan_status dc ON dl.id = dc.domain_id
                            WHERE dc.sitemap_scan_date <= DATE(NOW()) - INTERVAL $cron_days DAY     
                            AND dc.sitemap_status = 1
                            ORDER BY dc.sitemap_scan_date ASC
                            LIMIT 0,$no_of_records
                        "
                    );

                    if ( ! empty ( $domian_lists ) ) {

                        foreach ( $domian_lists as $domian_list ) {

                            unset( $url_list_result );
                            unset( $crawler_url_list );
                            $url_list_result = array();
                            $crawler_url_list = array();

                            //Update data array
                            $domain_id = $domian_list->domain_id;

                            //Insert Query
                            $last_insert_cron_id = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_name`, `status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_cron_status_tbl_name, $domain_id, 'sitemap_xml', '0', current_time( 'mysql', 1 ) ) );       //db call ok; no-cache ok
                            $last_insert_cron_id = $wpdb->insert_id;



                            //Check first time came or not
                            if ( empty( $domian_list->sitemap_xml_data ) ) {

                                if ( isset( $domian_list->sitemap_url ) ) {

                                    $sitemap_url           = $domian_list->sitemap_url;

                                    $response = wp_remote_get( $sitemap_url );
                                    $response_code = wp_remote_retrieve_response_code( $response );

                                    if( $response_code == 200 ) {

                                        $sitemap_url_list_data = new SimpleXMLElement ( $sitemap_url, null, true );

                                        if ( is_object( $sitemap_url_list_data ) ) {

                                            foreach ( $sitemap_url_list_data as $url ) {

                                                if ( is_object( $url->loc ) ) {
                                                    $url_list_result[] .= $url->loc;
                                                } else {
                                                    $url_list_result = '';
                                                }
                                            }
                                            foreach ( $url_list_result as $url ) {

                                                $sitemap_url_list_data = new SimpleXMLElement ( $url, null, true );

                                                foreach ( $sitemap_url_list_data as $url ) {
                                                    if ( is_object( $url->loc ) ) {
                                                        $crawler_url_list[] .= $url->loc;
                                                    } else {
                                                        $crawler_url_list = '';
                                                    }
                                                }
                                            }

                                            $url_list_result = $crawler_url_list;
                                            //Update data array
                                            $url_list_result_json = wp_json_encode( $url_list_result );  //wp_json


                                            if ( $last_insert_cron_id ) {

                                                //Insert Query
                                                $insert_data      = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_id`, `sitemap_xml_data`, `updated_date`) VALUES (%d, %d, %s, %s)", $sm_sitemap_data_history_tbl_name, absint( $domain_id ), absint( $last_insert_cron_id ), $url_list_result_json, current_time( 'mysql', 1 ) ) );     //db call ok; no-cache ok
                                                $last_insert_data = $wpdb->insert_id;
                                                if ( isset( $last_insert_data ) ) {
                                                    $cron_tbl_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, '1', current_time( 'mysql', 1 ), $last_insert_cron_id ) );       //db call ok; no-cache ok
                                                    $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `sitemap_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                              //db call ok; no-cache ok
                                                }

                                            } else {
                                                echo " last_insert_id missing";
                                            }

                                        }
                                    }


                                }

                            } else {

                                $sitemap_url = $domian_list->sitemap_url;

                                $sitemap_url_list_data = new SimpleXMLElement ( $sitemap_url, null, true );

                                if ( is_object( $sitemap_url_list_data ) ) {

                                        foreach ( $sitemap_url_list_data as $url ) {

                                            if ( is_object( $url->loc ) ) {
                                                $url_list_result[] .= $url->loc;
                                            } else {
                                                $url_list_result = '';
                                            }
                                        }
                                        foreach ( $url_list_result as $url ) {

                                            $sitemap_url_list_data = new SimpleXMLElement ( $url, null, true );

                                            foreach ( $sitemap_url_list_data as $url ) {
                                                if ( is_object( $url->loc ) ) {
                                                    $crawler_url_list[] .= $url->loc;
                                                } else {
                                                    $crawler_url_list = '';
                                                }
                                            }
                                        }
                                    $url_list_result = $crawler_url_list;

                                    $old_sitemap_json = $domian_list->sitemap_xml_data;
                                    $old_sitemap      = json_decode( $old_sitemap_json );

                                    //Compare old and new sitemap URL
                                    $result_diff = array_merge( array_diff( $url_list_result, $old_sitemap ), array_diff( $old_sitemap, $url_list_result ) );

                                    //Update data array
                                    $url_list_result_json = wp_json_encode( $url_list_result );

                                    //check changes for compared sitemap
                                    if ( ! empty( $result_diff ) ) {

                                        if ( $last_insert_cron_id ) {

                                            //Update Query
                                            $result_diff = wp_json_encode( $result_diff );

                                            //Insert Query
                                            $insert_data      = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_id`, `sitemap_xml_data`, `sitemap_diff_data`, `updated_date`) VALUES (%d, %d, %s, %s, %s)", $sm_sitemap_data_history_tbl_name, absint( $domain_id ), absint( $last_insert_cron_id ), $url_list_result_json, $result_diff, current_time( 'mysql', 1 ) ) );     //db call ok; no-cache ok
                                            $last_insert_data = $wpdb->insert_id;
                                            if ( isset( $last_insert_data ) ) {
                                                $cron_tbl_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, '1', current_time( 'mysql', 1 ), $last_insert_cron_id ) );       //db call ok; no-cache ok
                                                $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `sitemap_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                              //db call ok; no-cache ok
                                            }
                                        } else {
                                            echo "Old last_insert_id missing";
                                        }

                                    } else {

                                        $insert_data      = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_id`, `sitemap_xml_data`, `updated_date`) VALUES (%d, %d, %s, %s)", $sm_sitemap_data_history_tbl_name, absint( $domain_id ), absint( $last_insert_cron_id ), $url_list_result_json, current_time( 'mysql', 1 ) ) );     //db call ok; no-cache ok
                                        $last_insert_data = $wpdb->insert_id;
                                        if ( isset( $last_insert_data ) ) {
                                            $cron_tbl_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, '1', current_time( 'mysql', 1 ), $last_insert_cron_id ) );      //db call ok; no-cache ok
                                            $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `sitemap_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                              //db call ok; no-cache ok
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                print_r(  " No of Scan URL is missing " );
            }
			break;

		case 'adminurl':
            if( isset( $no_of_records ) ){

                if( $no_of_records > 0 ) {

                    $domian_lists = $wpdb->get_results(
                        "
						SELECT dl.*, dh.cron_id,dh.status,dc.updated_date,dc.* 
						FROM   $domain_tbl_name dl 
						LEFT JOIN 
								(
									SELECT dh.* 
							        FROM   $sm_admin_data_history_tbl_name dh
							        WHERE  id 
							        IN (
							            SELECT Max(id) 
							            FROM   $sm_admin_data_history_tbl_name dh 
							            GROUP  BY domain_id
							            )
						        )dh 
						ON dl.id = dh.domain_id
						LEFT JOIN $sm_domain_scan_status dc ON dl.id = dc.domain_id
						WHERE dc.adminurl_scan_date <= DATE(NOW()) - INTERVAL $cron_days DAY     
						AND dc.admin_status = 1
						ORDER BY dc.adminurl_scan_date ASC
						LIMIT 0,$no_of_records 
					"
                    );

                    if(! empty ( $domian_lists ) ) {

                        foreach ( $domian_lists as $domian_list ) {

                            //Update data array
                            $domain_id = $domian_list->domain_id;

                            //Insert Query
                            $last_insert_cron_id = $wpdb->query( $wpdb->prepare ("INSERT INTO %1s (`domain_id`, `cron_name`, `status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_cron_status_tbl_name, $domain_id, 'admin_url', '0', current_time( 'mysql', 1 ) ) );      //db call ok; no-cache ok
                            $last_insert_cron_id = $wpdb->insert_id;

                            if( isset( $last_insert_cron_id ) ) {

                                $site_url = $domian_list->domain_url;

                                $site_login_url = $site_url."wp-admin/";

                                $response = wp_remote_get( $site_login_url );

                                $response_code = wp_remote_retrieve_response_code( $response );

                                if( ! empty ( $response_code ) ) {

                                    if( 200 === $response_code ) {

                                        //Insert Query
                                        $admin_data = $wpdb->query( $wpdb->prepare ("INSERT INTO %1s (`domain_id`, `cron_id`, `status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_admin_data_history_tbl_name, $domain_id, $last_insert_cron_id, '0', current_time( 'mysql', 1 ) ) );       //db call ok; no-cache ok
                                        $admin_data_id = $wpdb->insert_id;
                                        if ( isset( $admin_data_id ) ) {
                                            $cron_tbl_update = $wpdb->query( $wpdb->prepare ("UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, '1', current_time( 'mysql', 1 ), $last_insert_cron_id ) );       //db call ok; no-cache ok
                                            $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `adminurl_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                             //db call ok; no-cache ok
                                        }

                                    } else {

                                        //Insert Query
                                        $admin_data = $wpdb->query( $wpdb->prepare ("INSERT INTO %1s (`domain_id`, `cron_id`, `status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_admin_data_history_tbl_name, $domain_id, $last_insert_cron_id, '1', current_time( 'mysql', 1 ) ) );      //db call ok; no-cache ok
                                        $admin_data_id = $wpdb->insert_id;
                                        if ( isset( $admin_data_id ) ){
                                            $cron_tbl_update = $wpdb->query( $wpdb->prepare ("UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, '1', current_time( 'mysql', 1 ), $last_insert_cron_id ) );      //db call ok; no-cache ok
                                            $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `adminurl_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                             //db call ok; no-cache ok
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                print_r(  " No of Scan URL is missing " );
            }
			break;

		case 'robots':
            if( isset( $no_of_records ) ){

                if( $no_of_records > 0 ) {

                    $domian_lists = $wpdb->get_results(
                        "
						SELECT dl.*, dh.cron_id,dh.status,dc.updated_date,dc.* 
						FROM   $domain_tbl_name dl 
						LEFT JOIN 
								(
									SELECT dh.* 
							        FROM   $sm_admin_data_history_tbl_name dh
							        WHERE  id 
							        IN (
							            SELECT Max(id) 
							            FROM   $sm_admin_data_history_tbl_name dh 
							            GROUP  BY domain_id
							            )
						        )dh 
						ON dl.id = dh.domain_id
						LEFT JOIN $sm_domain_scan_status dc ON dl.id = dc.domain_id
						WHERE dc.robots_scan_date <= DATE(NOW()) - INTERVAL $cron_days DAY     
						AND dc.roborts_status = 1
						ORDER BY dc.robots_scan_date ASC
						LIMIT 0,$no_of_records 
					"
                    );

                    if(! empty ( $domian_lists ) ) {

                        foreach ( $domian_lists as $domian_list ) {

                            //Update data array
                            $domain_id = $domian_list->domain_id;

                            //Insert Query
                            $last_insert_cron_id = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_name`, `status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_cron_status_tbl_name, $domain_id, 'robots_url', '0', current_time( 'mysql', 1 ) ) );       //db call ok; no-cache ok
                            $last_insert_cron_id = $wpdb->insert_id;

                            if( isset( $last_insert_cron_id ) ) {

                                $site_url = $domian_list->domain_url;

                                $site_login_url = $site_url."robots.txt";

                                $response = wp_remote_get( $site_login_url );

                                $response_code = wp_remote_retrieve_response_code( $response );

                                if( ! empty ( $response_code ) ) {

                                    if( 200 === $response_code ) {

                                        //Insert Query
                                        $admin_data = $wpdb->query( $wpdb->prepare ("INSERT INTO %1s (`domain_id`, `cron_id`, `seo_status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_seo_data_history, $domain_id, $last_insert_cron_id, '0', current_time( 'mysql', 1 ) ) );       ///db call ok; no-cache ok
                                        $admin_data_id = $wpdb->insert_id;
                                        if ( isset( $admin_data_id ) ) {
                                            $cron_tbl_update = $wpdb->query( $wpdb->prepare ("UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, '1', current_time( 'mysql', 1 ), $last_insert_cron_id ) );       //db call ok; no-cache ok
                                            $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `robots_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                               //db call ok; no-cache ok
                                        }

                                    } else {

                                        //Insert Query
                                        $admin_data = $wpdb->query( $wpdb->prepare ("INSERT INTO %1s (`domain_id`, `cron_id`, `seo_status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_seo_data_history, $domain_id, $last_insert_cron_id, '1', current_time( 'mysql', 1 ) ) );      //db call ok; no-cache ok
                                        $admin_data_id = $wpdb->insert_id;
                                        if ( isset( $admin_data_id ) ){
                                            $cron_tbl_update = $wpdb->query( $wpdb->prepare ("UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, '1', current_time( 'mysql', 1 ), $last_insert_cron_id ) );       //db call ok; no-cache ok
                                            $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `robots_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                                //db call ok; no-cache ok
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                print_r(  " No of Scan URL is missing " );
            }
            break;

		case 'critical':
			if( isset( $no_of_records ) ){
				if( $no_of_records > 0 ) {
					$domian_lists = $wpdb->get_results(
						"
                        SELECT dl.*,dh.*,dc.*
                        FROM   $domain_tbl_name dl 
                        LEFT JOIN 
                                (
                                    SELECT dh.* 
                                    FROM   $sm_site_critical_history dh
                                    WHERE  id 
                                    IN (
                                        SELECT Max(id) 
                                        FROM   $sm_site_critical_history dh 
                                        GROUP  BY domain_id
                                        )
                                )dh 
                        ON dl.id = dh.domain_id
                        LEFT JOIN $sm_domain_scan_status dc ON dl.id = dc.domain_id
                        WHERE dc.site_scan_status <= DATE(NOW()) - INTERVAL $cron_days DAY     
                        AND dc.site_status = 1
                        ORDER BY dc.site_scan_status ASC
                        LIMIT 0,$no_of_records
		"
					);
					if(! empty ( $domian_lists ) ) {

						foreach ( $domian_lists as $domian_list ) {

							//Update data array
							$domain_id = $domian_list->id;

							//Insert Query
							$last_insert_cron_id = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_name`, `status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_cron_status_tbl_name, $domain_id, 'site_scan', '0', current_time( 'mysql', 1 ) ) );       //db call ok; no-cache ok
							$last_insert_cron_id = $wpdb->insert_id;

							if ( isset( $last_insert_cron_id ) ) {

								$site_url = $domian_list->domain_url;

								$response = wp_remote_get( $site_url );

								if( is_wp_error( $response ) ) {
									return false;
								}

								$response_code = wp_remote_retrieve_response_code( $response );
								$body = wp_remote_retrieve_body( $response );   // use the content
								$body = wp_strip_all_tags( $body );

								if ( ! empty ( $response_code ) ) {

									if ( 200 === $response_code ) {

										//Insert Query
										$admin_data    = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_id`, `url_status_code`, `url_response_code`, `updated_date`) VALUES (%d, %s, %s, %s, %s)", $sm_site_critical_history, $domain_id, $last_insert_cron_id, '0', $response_code, current_time( 'mysql', 1 ) ) );       //db call ok; no-cache ok
										$admin_data_id = $wpdb->insert_id;
										if ( isset( $admin_data_id ) ) {
											$cron_tbl_update           = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, '1', current_time( 'mysql', 1 ), $last_insert_cron_id ) );        //db call ok; no-cache ok
											$domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `site_scan_status` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                                           //db call ok; no-cache ok
										}

									} else {

										//Insert Query
										$admin_data    = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_id`, `url_status_code`, `url_response_code`, `log`, `updated_date`) VALUES (%d, %s, %s, %s, %s, %s)", $sm_site_critical_history, $domain_id, $last_insert_cron_id, '1', $response_code, $body, current_time( 'mysql', 1 ) ) );       //db call ok; no-cache ok
										$admin_data_id = $wpdb->insert_id;
										if ( isset( $admin_data_id ) ) {
											$cron_tbl_update           = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, '1', current_time( 'mysql', 1 ), $last_insert_cron_id ) );       //db call ok; no-cache ok
											$domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `site_scan_status` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                                           //db call ok; no-cache ok
										}
									}
								}
							}
						}
					}
				}
			}else {
				print_r(  " No of Scan URL is missing " );
			}
			break;

		default:
			echo "Type is not defind or invalid type";
	}

	die();
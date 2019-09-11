<?php
	/* Template Name: XML Script Template */

	global $wpdb;

	$url_list_result = array();

	$domain_tbl_name = "{$wpdb->prefix}sm_domain_list";
	$sm_cron_status_tbl_name = "{$wpdb->prefix}sm_cron_status";
	$sm_sitemap_data_history_tbl_name = "{$wpdb->prefix}sm_sitemap_data_history";
	$sm_domain_scan_status = "{$wpdb->prefix}sm_domain_scan_status";

	$status_value = '0';

	$cache_key = 'prefix_post_count_publish';

	$_posts = wp_cache_get( $cache_key );

	if ( false === $_posts ) {
		$_posts = $wpdb->get_col( $wpdb->prepare("SELECT count(*) FROM %1s INNER JOIN %2s domain_scan ON domain_scan.domain_id = %1s.id WHERE domain_scan.roborts_status=%3s", $domain_tbl_name, $sm_domain_scan_status, $domain_tbl_name, $status_value ) ); // db call ok; OK
		wp_cache_set( $cache_key, $_posts );
	}

	if($_posts){

		if( isset( $_posts[0] ) ) {
			$no_of_post = $_posts[0];
		}

		if( isset( $no_of_post ) ){

			if( $no_of_post > 0 ) {

				//$domian_lists1 = $wpdb->get_results( $wpdb->prepare("SELECT * FROM wp_sm_domain_list domainTbl LEFT JOIN wp_sm_sitemap_data_history sitemapTbl ON sitemapTbl.domain_id = domainTbl.id ORDER BY domainTbl.id DESC LIMIT 0,%1s",$no_of_post) ); // db call ok; OK
				$domian_lists = $wpdb->get_results (
					"
						SELECT dl.*, dh.cron_id, dh.sitemap_xml_data, dh.sitemap_diff_data 
						FROM   wp_sm_domain_list dl 
						LEFT JOIN 
								(
									SELECT * 
							        FROM   wp_sm_sitemap_data_history dh
							        WHERE  id 
							        IN (
							            SELECT Max(id) 
							            FROM   wp_sm_sitemap_data_history dh 
							            GROUP  BY domain_id
							            )
						        )dh 
						ON dl.id = dh.domain_id 
					"
				) ;


				if(! empty ( $domian_lists ) ) {

					foreach ( $domian_lists as $domian_list ) {

						unset($url_list_result);
						$url_list_result = array();

						//Update data array
						$domain_id            = $domian_list->id;

						//Insert Query
						$last_insert_cron_id = $wpdb->query( $wpdb->prepare ("INSERT INTO %1s (`domain_id`, `cron_name`, `status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_cron_status_tbl_name, $domain_id, 'sitemap_xml', '0', current_time( 'mysql', 1 ) ) );       // db call ok; OK
						$last_insert_cron_id = $wpdb->insert_id;

						//Check first time came or not
						if ( empty( $domian_list->sitemap_xml_data ) ) {

							if( isset($domian_list->sitemap_url) ) {

								$sitemap_url = $domian_list->sitemap_url;
								$sitemap_url_list_data = new SimpleXMLElement ( $sitemap_url, null, true );

								if( is_object( $sitemap_url_list_data ) ) {

									foreach ( $sitemap_url_list_data as $url ) {

										if ( is_object( $url->loc ) ) {
											$url_list_result[] .= $url->loc;
										} else {
											$url_list_result = '';
										}
									}

									//Update data array
									$url_list_result_json = wp_json_encode( $url_list_result );  //wp_json


									if ( $last_insert_cron_id ) {

										//Insert Query
										$insert_data = $wpdb->query( $wpdb->prepare ("INSERT INTO %1s (`domain_id`, `cron_id`, `sitemap_xml_data`, `updated_date`) VALUES (%d, %d, %s, %s)", $sm_sitemap_data_history_tbl_name, absint($domain_id), absint( $last_insert_cron_id ), $url_list_result_json, current_time( 'mysql', 1 ) ) );     // db call ok; OK
										$last_insert_data = $wpdb->insert_id;
										if ( isset( $last_insert_data ) ){
											$cron_tbl_update = $wpdb->query( $wpdb->prepare ("UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, '1', current_time( 'mysql', 1 ), $last_insert_cron_id ) );       // db call ok; OK
										}

									} else {
										echo " last_insert_id missing";
									}

								}
							}

						}
						else {

							$sitemap_url = $domian_list->sitemap_url;

							$sitemap_url_list_data = new SimpleXMLElement ( $sitemap_url, null, true );

							foreach ( $sitemap_url_list_data as $url ) {

								if ( is_object( $url->loc ) ) {
									$url_list_result[] .= $url->loc;
								} else {
									$url_list_result = '';
								}
							}

							$old_sitemap_json = $domian_list->sitemap_xml_data;
							$old_sitemap = json_decode( $old_sitemap_json );

							//Compare old and new sitemap URL
							//$result_diff = array_diff( $old_sitemap, $url_list_result );
							$result_diff = array_merge(array_diff($url_list_result, $old_sitemap), array_diff($old_sitemap, $url_list_result));

							//Update data array
							$url_list_result_json = wp_json_encode( $url_list_result );



							//check changes for compared sitemap
							if ( ! empty( $result_diff ) ) {

								if ( $last_insert_cron_id ) {

									//Update Query
									$result_diff = wp_json_encode( $result_diff );

									//Insert Query
									$insert_data = $wpdb->query($wpdb->prepare("INSERT INTO %1s (`domain_id`, `cron_id`, `sitemap_xml_data`, `sitemap_diff_data`, `updated_date`) VALUES (%d, %d, %s, %s, %s)", $sm_sitemap_data_history_tbl_name, absint($domain_id), absint( $last_insert_cron_id ), $url_list_result_json, $result_diff, current_time( 'mysql', 1 )));     // db call ok; OK
									$last_insert_data = $wpdb->insert_id;
									if ( isset( $last_insert_data ) ){
										$cron_tbl_update = $wpdb->query( $wpdb->prepare ("UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, '1', current_time( 'mysql', 1 ), $last_insert_cron_id ) );       // db call ok; OK
									}
								} else {
									echo "Old last_insert_id missing";
								}

							} else {

								$insert_data = $wpdb->query($wpdb->prepare("INSERT INTO %1s (`domain_id`, `cron_id`, `sitemap_xml_data`, `updated_date`) VALUES (%d, %d, %s, %s)", $sm_sitemap_data_history_tbl_name, absint($domain_id), absint( $last_insert_cron_id ), $url_list_result_json, current_time( 'mysql', 1 )));     // db call ok; OK
								$last_insert_data = $wpdb->insert_id;
								if ( isset( $last_insert_data ) ){
									$cron_tbl_update = $wpdb->query( $wpdb->prepare ("UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, '1', current_time( 'mysql', 1 ), $last_insert_cron_id ) );       // db call ok; OK
								}

							}

						}
					}

				}
			}
		}

	}
	die();


	exit();

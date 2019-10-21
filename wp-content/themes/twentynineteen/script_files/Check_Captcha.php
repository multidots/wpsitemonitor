<?php

/* Template Name: Check Captcha SCRIPT Template */

    global  $wpdb;

    $type = $_GET['type'];
    if( isset( $_GET['no'] ) ){
        $no_of_records = $_GET['no'];
    }
    $cron_days = 1;

    $url_list_result = array();

    require_once 'Check_Captcha.php';

    $class_file = new Sitemoniter_WPMail();

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


    switch ($type) {
        case 'https':
            if( isset( $no_of_records ) ){

                if( $no_of_records > 0 ) {

                    $domian_lists = $wpdb->get_results(
                        "
                            SELECT dl.*, shh.*,dl.id
                            FROM   $domain_tbl_name dl 
                            LEFT JOIN 
                                    (
                                        SELECT shh.* 
                                        FROM   $sm_site_https_history shh
                                        WHERE  id 
                                        IN (
                                            SELECT Max(id) 
                                            FROM   $sm_site_https_history shh 
                                            GROUP  BY domain_id
                                            )
                                    )shh 
                            ON dl.id = shh.domain_id
                            LEFT JOIN $sm_domain_scan_status dc ON dl.id = dc.domain_id
                            WHERE dc.https_scan_date <= DATE(NOW()) - INTERVAL $cron_days DAY     
                            AND dc.admin_status = 1
                            ORDER BY dc.https_scan_date ASC
                            LIMIT 0,$no_of_records
                        "
                    );

                    if (!empty ($domian_lists)) {

                        foreach ($domian_lists as $domian_list) {

                            //Update data array
                            $domain_id = $domian_list->id;

                            //Insert Query
                            $last_insert_cron_id = $wpdb->query($wpdb->prepare("INSERT INTO %1s (`domain_id`, `cron_name`, `status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_cron_status_tbl_name, $domain_id, 'https_scan', '0', current_time('mysql', 1)));      //db call ok; no-cache ok
                            $last_insert_cron_id = $wpdb->insert_id;

                            if (isset($last_insert_cron_id)) {

                                $site_url = $domian_list->domain_url;

                                $parse_url = wp_parse_url($domian_list->domain_url);

                                if (is_array($parse_url)) {

                                    if (isset($parse_url['host'])) {
                                        $host = $parse_url['host'];
                                        $host_status = $class_file->has_ssl($host);

                                        if ($host_status == 1) {

                                            //Insert Query
                                            $admin_data = $wpdb->query($wpdb->prepare("INSERT INTO %1s (`domain_id`, `cron_id`, `https_status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_site_https_history, $domain_id, $last_insert_cron_id, '1', current_time('mysql', 1)));       //db call ok; no-cache ok
                                            $admin_data_id = $wpdb->insert_id;
                                            if (isset($admin_data_id)) {
                                                $cron_tbl_update = $wpdb->query($wpdb->prepare("UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, '1', current_time('mysql', 1), $last_insert_cron_id));       //db call ok; no-cache ok
                                                $domain_scan_status_update = $wpdb->query($wpdb->prepare("UPDATE %1s SET `https_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time('mysql', 1), $domain_id));                                             //db call ok; no-cache ok
                                            }

                                        } else {

                                            //Insert Query
                                            $admin_data = $wpdb->query($wpdb->prepare("INSERT INTO %1s (`domain_id`, `cron_id`, `https_status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_site_https_history, $domain_id, $last_insert_cron_id, '0', current_time('mysql', 1)));       //db call ok; no-cache ok
                                            $admin_data_id = $wpdb->insert_id;
                                            if (isset($admin_data_id)) {
                                                $cron_tbl_update = $wpdb->query($wpdb->prepare("UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, '1', current_time('mysql', 1), $last_insert_cron_id));       //db call ok; no-cache ok
                                                $domain_scan_status_update = $wpdb->query($wpdb->prepare("UPDATE %1s SET `https_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time('mysql', 1), $domain_id));                                             //db call ok; no-cache ok
                                            }
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

        case 'captcha':
            if ( isset( $no_of_records ) ) {

                if ( $no_of_records > 0 ) {

                    $domian_lists = $wpdb->get_results(
                        $wpdb->prepare("
                                SELECT dl.*, cch.*,dl.id
                                FROM   %1s dl 
                                LEFT JOIN 
                                        (
                                            SELECT cch.* 
                                            FROM   %1s cch
                                            WHERE  id 
                                            IN (
                                                SELECT Max(id) 
                                                FROM  %1s  cch 
                                                GROUP  BY domain_id
                                                )
                                        )cch 
                                ON dl.id = cch.domain_id
                                LEFT JOIN %1s dc ON dl.id = dc.domain_id
                                WHERE dc.captcha_scan_date <= DATE(NOW()) - INTERVAL %d DAY   
                                AND dc.captcha_status = %d
                                ORDER BY dc.https_scan_date ASC
                                LIMIT 0,%d",
                                array(
                                    $domain_tbl_name,
                                    $sm_site_captcha_check_history,
                                    $sm_site_captcha_check_history,
                                    $sm_domain_scan_status,
                                    $cron_days,
                                    1,
                                    $no_of_records,
                                )
                        )
                    );  //db call ok; no-cache ok




                    if ( ! empty ( $domian_lists ) ) {

                        foreach ( $domian_lists as $domian_list ) {

                            //Update data array
                            $domain_id = $domian_list->id;
                            $domain_url = $domian_list->domain_url;
                            $domain_page_sitemap_url = $domain_url.'page-sitemap.xml';

                            //Insert Query
                            $last_insert_cron_id = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_name`, `status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_cron_status_tbl_name, $domain_id, 'captcha_scan', '0', current_time( 'mysql', 1 ) ) );      //db call ok; no-cache ok
                            $last_insert_cron_id = $wpdb->insert_id;

                            $response      = wp_remote_get( $domain_page_sitemap_url );
                            $response_code = wp_remote_retrieve_response_code( $response );

                            if ( $response_code === 200 ) {

                                $sitemap_url_list_data = new SimpleXMLElement ( $domain_page_sitemap_url, null, true );

                                foreach ( $sitemap_url_list_data as $url ) {

                                    if ( is_object( $url->loc ) ) {
                                        $url_list_result[] .= $url->loc;
                                    } else {
                                        $url_list_result = '';
                                    }
                                }

                                $input  = 'contact';
                                $result = array_filter( $url_list_result, function ( $item ) use ( $input ) {
                                    if ( stripos( $item, $input ) !== false ) {
                                        return true;
                                    }

                                    return false;
                                } );

                                if( ! empty( $result ) ) {

                                    foreach ( $result as $result_url ) {

                                        $response      = wp_remote_get( $result_url );
                                        $response_code = wp_remote_retrieve_response_code( $response );

                                        if ( $response_code === 200 ) {

                                            $status = $class_file->url_get_content_html( $result_url );

                                            //Insert Query
                                            $admin_data    = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_id`, `captcha_status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_site_captcha_check_history, $domain_id, $last_insert_cron_id, $status, current_time( 'mysql', 1 ) ) );       //db call ok; no-cache ok
                                            $admin_data_id = $wpdb->insert_id;
                                            $cron_tbl_update           = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, 1, current_time( 'mysql', 1 ), $last_insert_cron_id ) );       //db call ok; no-cache ok
                                            $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `captcha_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                             //db call ok; no-cache ok


                                        }
                                    }
                                } else {

                                    $domain_contact_url = $domain_url . 'contact-us/';
                                    $response = wp_remote_get($domain_contact_url);
                                    $response_code = wp_remote_retrieve_response_code($response);

                                    if ($response_code == 200) {

                                        //Insert Query
                                        $admin_data    = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_id`, `captcha_status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_site_captcha_check_history, $domain_id, $last_insert_cron_id, $status, current_time( 'mysql', 1 ) ) );       //db call ok; no-cache ok
                                        $admin_data_id = $wpdb->insert_id;
                                        $cron_tbl_update           = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, 1, current_time( 'mysql', 1 ), $last_insert_cron_id ) );       //db call ok; no-cache ok
                                        $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `captcha_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                             //db call ok; no-cache ok


                                    } else {

                                        $domain_contact_url = $domain_url . 'contact/';
                                        $response = wp_remote_get($domain_contact_url);
                                        $response_code = wp_remote_retrieve_response_code($response);

                                        if ($response_code == 200) {

                                            //Insert Query
                                            $admin_data    = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_id`, `captcha_status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_site_captcha_check_history, $domain_id, $last_insert_cron_id, $status, current_time( 'mysql', 1 ) ) );       //db call ok; no-cache ok
                                            $admin_data_id = $wpdb->insert_id;
                                            $cron_tbl_update           = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, 1, current_time( 'mysql', 1 ), $last_insert_cron_id ) );       //db call ok; no-cache ok
                                            $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `captcha_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                             //db call ok; no-cache ok


                                        } else {

                                            //Insert Query
                                            $admin_data    = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_id`, `captcha_status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_site_captcha_check_history, $domain_id, $last_insert_cron_id, $status, current_time( 'mysql', 1 ) ) );       //db call ok; no-cache ok
                                            $admin_data_id = $wpdb->insert_id;
                                            $cron_tbl_update           = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, 1, current_time( 'mysql', 1 ), $last_insert_cron_id ) );       //db call ok; no-cache ok
                                            $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `captcha_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                             //db call ok; no-cache ok

                                        }
                                    }

                                }
                            } else {

                                $domain_contact_url = $domain_url . 'contact-us/';
                                $response      = wp_remote_get( $domain_contact_url );
                                $response_code = wp_remote_retrieve_response_code( $response );

                                if( $response_code == 200 ){


                                    //Insert Query
                                    $admin_data    = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_id`, `captcha_status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_site_captcha_check_history, $domain_id, $last_insert_cron_id, $status, current_time( 'mysql', 1 ) ) );       //db call ok; no-cache ok
                                    $admin_data_id = $wpdb->insert_id;
                                    $cron_tbl_update           = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, 1, current_time( 'mysql', 1 ), $last_insert_cron_id ) );       //db call ok; no-cache ok
                                    $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `captcha_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                             //db call ok; no-cache ok


                                } else {

                                    $domain_contact_url = $domain_url . 'contact/';
                                    $response      = wp_remote_get( $domain_contact_url );
                                    $response_code = wp_remote_retrieve_response_code( $response );

                                    if( $response_code == 200 ) {


                                        //Insert Query
                                        $admin_data    = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_id`, `captcha_status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_site_captcha_check_history, $domain_id, $last_insert_cron_id, $status, current_time( 'mysql', 1 ) ) );       //db call ok; no-cache ok
                                        $admin_data_id = $wpdb->insert_id;
                                        $cron_tbl_update           = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, 1, current_time( 'mysql', 1 ), $last_insert_cron_id ) );       //db call ok; no-cache ok
                                        $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `captcha_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                             //db call ok; no-cache ok


                                    } else {

                                        $log = 'Contact page not found or not available';

                                        //Insert Query
                                        $admin_data = $wpdb->query($wpdb->prepare("INSERT INTO %1s (`domain_id`, `cron_id`, `captcha_status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_site_captcha_check_history, $domain_id, $last_insert_cron_id, $status, current_time('mysql', 1)));       //db call ok; no-cache ok
                                        $admin_data_id = $wpdb->insert_id;
                                        $cron_tbl_update = $wpdb->query($wpdb->prepare("UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, 1, current_time('mysql', 1), $last_insert_cron_id));       //db call ok; no-cache ok
                                        $domain_scan_status_update = $wpdb->query($wpdb->prepare("UPDATE %1s SET `captcha_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time('mysql', 1), $domain_id));                                             //db call ok; no-cache ok
                                    }
                                }
                            }
                        }
                    }




                    die();






                    if ( ! empty ( $domian_lists ) ) {

                        foreach ( $domian_lists as $domian_list ) {

                            //Update data array
                            $domain_id = $domian_list->id;

                            //Insert Query
                            $last_insert_cron_id = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_name`, `status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_cron_status_tbl_name, $domain_id, 'captcha_scan', '0', current_time( 'mysql', 1 ) ) );      //db call ok; no-cache ok
                            $last_insert_cron_id = $wpdb->insert_id;

                            $dataOfOldScan =  $wpdb->get_row( $wpdb->prepare( "SELECT captcha_status FROM %1s WHERE domain_id = %d ORDER BY id desc LIMIT 0,1",$sm_site_captcha_check_history,$domain_id ) );       //db call ok; no-cache ok

                            if ( isset( $last_insert_cron_id ) ) {

                                $domain_url         = $domian_list->domain_url;
                                $domain_contact_url = $domain_url . 'contact-us/';
                                $domain_sitemap_url = $domian_list->sitemap_url;

                                $response      = wp_remote_get( $domain_sitemap_url );
                                $response_code = wp_remote_retrieve_response_code( $response );

                                if ( $response_code === 200 ) {

                                    $sitemap_url_list_data = new SimpleXMLElement ( $domain_sitemap_url, null, true );

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

                                } else {

                                    print_r( "Sitemap URL Not Found" );
                                    $crawler_url_list[] = '';

                                }

                                $input  = 'contact';
                                $result = array_filter( $crawler_url_list, function ( $item ) use ( $input ) {
                                    if ( stripos( $item, $input ) !== false ) {
                                        return true;
                                    }

                                    return false;
                                } );

                                if ( ! empty( $result ) ) {

                                    foreach ( $result as $result_url ) {
                                        $response      = wp_remote_get( $result_url );
                                        $response_code = wp_remote_retrieve_response_code( $response );

                                        if ( $response_code === 200 ) {

                                            $status = $class_file->url_get_content_html( $result_url );

                                            if( isset( $dataOfOldScan->captcha_status ) ) {

                                                if ( $dataOfOldScan->captcha_status !== $status ) {

                                                    //Insert Query
                                                    $admin_data    = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_id`, `captcha_status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_site_captcha_check_history, $domain_id, $last_insert_cron_id, $status, current_time( 'mysql', 1 ) ) );       //db call ok; no-cache ok
                                                    $admin_data_id = $wpdb->insert_id;
                                                }
                                                $cron_tbl_update           = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, 1, current_time( 'mysql', 1 ), $last_insert_cron_id ) );       //db call ok; no-cache ok
                                                $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `captcha_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                             //db call ok; no-cache ok


                                            } else {

                                                //Insert Query
                                                $admin_data    = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_id`, `captcha_status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_site_captcha_check_history, $domain_id, $last_insert_cron_id, $status, current_time( 'mysql', 1 ) ) );       //db call ok; no-cache ok
                                                $admin_data_id = $wpdb->insert_id;
                                                $cron_tbl_update           = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, 1, current_time( 'mysql', 1 ), $last_insert_cron_id ) );       //db call ok; no-cache ok
                                                $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `captcha_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                             //db call ok; no-cache ok
                                            }


                                        }
                                    }
                                } else {
                                    $response      = wp_remote_get( $domain_contact_url );
                                    $response_code = wp_remote_retrieve_response_code( $response );

                                    if ( $response_code === 200 ) {

                                        $status = $class_file->url_get_content_html( $domain_contact_url );

                                        if( isset( $dataOfOldScan->captcha_status ) ) {

                                            if ( $dataOfOldScan->captcha_status !== $status ) {

                                                //Insert Query
                                                $admin_data    = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_id`, `captcha_status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_site_captcha_check_history, $domain_id, $last_insert_cron_id, $status, current_time( 'mysql', 1 ) ) );       //db call ok; no-cache ok
                                                $admin_data_id = $wpdb->insert_id;
                                            }
                                            $cron_tbl_update           = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, 1, current_time( 'mysql', 1 ), $last_insert_cron_id ) );       //db call ok; no-cache ok
                                            $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `captcha_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                             //db call ok; no-cache ok


                                        } else {

                                            //Insert Query
                                            $admin_data    = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_id`, `captcha_status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_site_captcha_check_history, $domain_id, $last_insert_cron_id, $status, current_time( 'mysql', 1 ) ) );       //db call ok; no-cache ok
                                            $admin_data_id = $wpdb->insert_id;
                                            $cron_tbl_update           = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, 1, current_time( 'mysql', 1 ), $last_insert_cron_id ) );       //db call ok; no-cache ok
                                            $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `captcha_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                             //db call ok; no-cache ok
                                        }

                                    } else {
                                        $domain_contact_url = $domain_url . 'contact/';
                                        $response           = wp_remote_get( $domain_contact_url );
                                        $response_code      = wp_remote_retrieve_response_code( $response );

                                        if ( $response_code === 200 ) {

                                            $status = $class_file->url_get_content_html( $domain_contact_url );

                                            if( isset( $dataOfOldScan->captcha_status ) ) {

                                                if ( $dataOfOldScan->captcha_status !== $status ) {

                                                    //Insert Query
                                                    $admin_data    = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_id`, `captcha_status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_site_captcha_check_history, $domain_id, $last_insert_cron_id, $status, current_time( 'mysql', 1 ) ) );       //db call ok; no-cache ok
                                                    $admin_data_id = $wpdb->insert_id;
                                                }
                                                $cron_tbl_update           = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, 1, current_time( 'mysql', 1 ), $last_insert_cron_id ) );       //db call ok; no-cache ok
                                                $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `captcha_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                             //db call ok; no-cache ok


                                            } else {

                                                //Insert Query
                                                $admin_data    = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_id`, `captcha_status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_site_captcha_check_history, $domain_id, $last_insert_cron_id, $status, current_time( 'mysql', 1 ) ) );       //db call ok; no-cache ok
                                                $admin_data_id = $wpdb->insert_id;
                                                $cron_tbl_update           = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, 1, current_time( 'mysql', 1 ), $last_insert_cron_id ) );       //db call ok; no-cache ok
                                                $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `captcha_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                             //db call ok; no-cache ok
                                            }

                                        } else {

                                            $log = 'Contact page not found or not available';

                                            if( isset( $dataOfOldScan->captcha_status ) ) {

                                                if ( $dataOfOldScan->captcha_status !== '0' ) {

                                                    //Insert Query
                                                    $admin_data    = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_id`, `captcha_status`, `log`, `updated_date`) VALUES (%d, %s, %s, %s, %s)", $sm_site_captcha_check_history, $domain_id, $last_insert_cron_id, 0, $log, current_time( 'mysql', 1 ) ) );       //db call ok; no-cache ok
                                                    $admin_data_id = $wpdb->insert_id;
                                                }
                                                $cron_tbl_update           = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, 1, current_time( 'mysql', 1 ), $last_insert_cron_id ) );       //db call ok; no-cache ok
                                                $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `captcha_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                             //db call ok; no-cache ok

                                            } else {

                                                //Insert Query
                                                $admin_data    = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_id`, `captcha_status`, `log`, `updated_date`) VALUES (%d, %s, %s, %s, %s)", $sm_site_captcha_check_history, $domain_id, $last_insert_cron_id, '0', $log, current_time( 'mysql', 1 ) ) );       //db call ok; no-cache ok
                                                $admin_data_id = $wpdb->insert_id;
                                                $cron_tbl_update           = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, 1, current_time( 'mysql', 1 ), $last_insert_cron_id ) );       //db call ok; no-cache ok
                                                $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `captcha_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                             //db call ok; no-cache ok

                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }

                }

            } else {
                print_r( " No of Scan URL is missing " );
            }
            break;

        default:
            echo "Type is not defind or invalid type";
    }
    die();

    /*function has_ssl( $domain ) {
        $ssl_check = @fsockopen( 'ssl://' . $domain, 443, $errno, $errstr, 30 );
        $res = !! $ssl_check;
        if ( $ssl_check ) { fclose( $ssl_check ); }
        if($res){
            echo "HTTPS Activated";
        } else {
            echo "HTTPS Not Activated";
        }
        return $res;
    }*/

    // Test it:
    has_ssl('google.com');
    die();

    require_once 'sslLabsApi.php';
    $api = new sslLabsApi();

    //Return API response as JSON object
    //$api = new sslLabsApi(true);

    //Set content-type header for JSON output
    header('Content-Type: application/json');

    //get API information
    $api_data_json = json_decode( $api->fetchHostInformation(  'wpsitemonitor.md-staging.com' ) );
    print_r( $api_data_json );
    $api_data_object = $api_data_json->endpoints;
    if ( $api_data_json->status == 'READY' ){
        foreach ( $api_data_object as $api_data_objects  ){
            $grade = $api_data_objects->grade;
            if( $grade == 'A' ){
                echo "HTTPS Activated";
            } else {
                $warning = $api_data_objects->hasWarnings;
                if( $warning == '1'){
                    echo "HTTPS Not Activated";
                } else {
                    echo "HTTPS Activated";
                }

            }
            break;
        }
    }



    die();



    $domain_url = 'http://one.wordpress.test/';
    $domain_contact_url = $domain_url.'contact-us/';
    $domain_sitemap_url = $domain_url.'sitemap.xml';

    $response = wp_remote_get( $domain_sitemap_url );
    $response_code = wp_remote_retrieve_response_code( $response );

    if( $response_code == 200 ) {

        $sitemap_url_list_data = new SimpleXMLElement ( $domain_sitemap_url, null, true );

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

    } else {

     print_r( "Sitemap URL Not Found" );
     die();

    }

    $input = 'contact';
    $result = array_filter($crawler_url_list, function ($item) use ($input) {
        if (stripos($item, $input) !== false) {
            return true;
        }
        return false;
    });

    if( !empty( $result ) ) {
        foreach ( $result as $result_url ){
            $response = wp_remote_get( $result_url );
            $response_code = wp_remote_retrieve_response_code( $response );
            if( $response_code == 200 ) {
                $status = url_get_content_html( $result_url );
                echo $status;
            }
        }
    } else {
        $response = wp_remote_get( $domain_contact_url );
        $response_code = wp_remote_retrieve_response_code( $response );
        if( $response_code == 200 ) {
            $status = url_get_content_html( $domain_contact_url );
            echo $status;
        } else {
            $domain_contact_url = $domain_url.'contact/';
            $response = wp_remote_get( $domain_contact_url );
            $response_code = wp_remote_retrieve_response_code( $response );
            if( $response_code == 200 ) {
                $status = url_get_content_html( $domain_contact_url );
                echo $status;
            } else {
                print_r( "URL Not found" );
            }
        }
    }



    echo "<pre>";
    print_r( $crawler_url_list );die();


    /*$response = wp_remote_get( $domain_contact_url );
    $response_code = wp_remote_retrieve_response_code( $response );

    if( $response_code == 200 ) {
        $status = url_get_content_html( $domain_contact_url );
        echo $status;

    } else {

        $domain_contact_url = $domain_url.'contact/';
        $response = wp_remote_get( $domain_contact_url );
        $response_code = wp_remote_retrieve_response_code( $response );

        if( $response_code == 200 ) {
            $status = url_get_content_html( $domain_contact_url );
            echo $status;
        } else {
            print_r( "URL Not found" );
        }
    }*/
    die();
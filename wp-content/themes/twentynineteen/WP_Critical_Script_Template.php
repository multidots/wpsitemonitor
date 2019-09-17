<?php
/* Template Name: Critical Site Template */

	global  $wpdb;

	$cron_days = 1;

	$url_list_result = array();

	$domain_tbl_name = "{$wpdb->prefix}sm_domain_list";
	$sm_cron_status_tbl_name = "{$wpdb->prefix}sm_cron_status";
	$sm_domain_scan_status = "{$wpdb->prefix}sm_domain_scan_status";
	$sm_sitemap_data_history_tbl_name = "{$wpdb->prefix}sm_sitemap_data_history";
	$sm_admin_data_history_tbl_name = "{$wpdb->prefix}sm_admin_data_history";
	$sm_seo_data_history = "{$wpdb->prefix}sm_seo_data_history";
	$sm_site_critical_history = "{$wpdb->prefix}sm_site_critical_history";

	$status_value = '0';

	if( isset( $no_of_records ) ){
		if( $no_of_records > 0 ) {
			$domian_lists = $wpdb->get_results(
				"
			SELECT dl.*,dh.*,dc.*
			FROM   wp_sm_domain_list dl 
			LEFT JOIN 
					(
						SELECT dh.* 
				        FROM   wp_sm_site_critical_history dh
				        WHERE  id 
				        IN (
				            SELECT Max(id) 
				            FROM   wp_sm_site_critical_history dh 
				            GROUP  BY domain_id
				            )
			        )dh 
			ON dl.id = dh.domain_id
			LEFT JOIN wp_sm_domain_scan_status dc ON dl.id = dc.domain_id
			WHERE dc.site_scan_status <= DATE(NOW()) - INTERVAL $cron_days DAY     
			AND dc.site_status = 0
			ORDER BY dc.site_scan_status ASC
			LIMIT 0,$no_of_records
		"
			);
			if(! empty ( $domian_lists ) ) {

				foreach ( $domian_lists as $domian_list ) {

					//Update data array
					$domain_id = $domian_list->id;

					//Insert Query
					$last_insert_cron_id = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_name`, `status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_cron_status_tbl_name, $domain_id, 'site_scan', '0', current_time( 'mysql', 1 ) ) );       // db call ok; OK
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
								$admin_data    = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_id`, `url_status_code`, `url_response_code`, `updated_date`) VALUES (%d, %s, %s, %s, %s)", $sm_site_critical_history, $domain_id, $last_insert_cron_id, '0', $response_code, current_time( 'mysql', 1 ) ) );       // db call ok; OK
								$admin_data_id = $wpdb->insert_id;
								if ( isset( $admin_data_id ) ) {
									$cron_tbl_update           = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, '1', current_time( 'mysql', 1 ), $last_insert_cron_id ) );        // db call ok; OK
									$domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `site_scan_status` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );                                                           // db call ok; OK
								}

							} else {

								//Insert Query
								$admin_data    = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_id`, `url_status_code`, `url_response_code`, `log`, `updated_date`) VALUES (%d, %s, %s, %s, %s, %s)", $sm_site_critical_history, $domain_id, $last_insert_cron_id, '1', $response_code, $body, current_time( 'mysql', 1 ) ) );       // db call ok; OK
								$admin_data_id = $wpdb->insert_id;
								if ( isset( $admin_data_id ) ) {
									$cron_tbl_update           = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, '1', current_time( 'mysql', 1 ), $last_insert_cron_id ) );       // db call ok; OK
									$domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `site_scan_status` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );       // db call ok; OK
								}
							}
						}
					}
				}
			}
		}
	}

<?php
	/* Template Name: WP Roborts Script Template */


	global  $wpdb;

	$url_list_result = array();

	$domain_tbl_name = "{$wpdb->prefix}sm_domain_list";
	$sm_cron_status_tbl_name = "{$wpdb->prefix}sm_cron_status";
	$sm_seo_data_history = "{$wpdb->prefix}sm_seo_data_history";
	$sm_domain_scan_status = "{$wpdb->prefix}sm_domain_scan_status";

	$status_value = '0';

	$cache_key = 'prefix_post_count_publish';

	$_posts = wp_cache_get( $cache_key );

	if ( false === $_posts ) {
		$_posts = $wpdb->get_col( $wpdb->prepare("SELECT count(*) FROM %1s INNER JOIN %2s domain_scan ON domain_scan.domain_id = %1s.id WHERE domain_scan.roborts_status=%3s", $domain_tbl_name, $sm_domain_scan_status, $domain_tbl_name, $status_value ) ); // db call ok; OK
		wp_cache_set( $cache_key, $_posts );
	}

	if($_posts) {

		if ( isset( $_posts[0] ) ) {
			$no_of_post = $_posts[0];
		}

		if ( isset( $no_of_post ) ) {

			if ( $no_of_post > 0 ) {

				$domian_lists = $wpdb->get_results (
					"
						SELECT dl.*, dh.cron_id,dh.status 
						FROM   wp_sm_domain_list dl 
						LEFT JOIN 
								(
									SELECT dh.* 
							        FROM   wp_sm_seo_data_history dh
							        WHERE  id 
							        IN (
							            SELECT Max(id) 
							            FROM   wp_sm_seo_data_history dh 
							            GROUP  BY domain_id
							            )
						        )dh 
						ON dl.id = dh.domain_id 
					"
				);

				foreach ( $domian_lists as $domian_list ) {

					//Update data array
					$domain_id = $domian_list->id;

					//Insert Query
					$last_insert_cron_id = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_name`, `status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_cron_status_tbl_name, $domain_id, 'robots_url', '0', current_time( 'mysql', 1 ) ) );       // db call ok; OK
					$last_insert_cron_id = $wpdb->insert_id;

					if( isset( $last_insert_cron_id ) ) {

						$site_url = $domian_list->domain_url;

						$site_login_url = $site_url."robots.txt";

						$response = wp_remote_get( $site_login_url );

						$response_code = wp_remote_retrieve_response_code( $response );

						if( ! empty ( $response_code ) ) {

							if( 200 === $response_code ) {

								//Insert Query
								$admin_data = $wpdb->query( $wpdb->prepare ("INSERT INTO %1s (`domain_id`, `cron_id`, `status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_seo_data_history, $domain_id, $last_insert_cron_id, '0', current_time( 'mysql', 1 ) ) );       // db call ok; OK
								$admin_data_id = $wpdb->insert_id;
								if ( isset( $admin_data_id ) ) {
									$cron_tbl_update = $wpdb->query( $wpdb->prepare ("UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, '1', current_time( 'mysql', 1 ), $last_insert_cron_id ) );       // db call ok; OK
								}
							} else {
								//Insert Query
								$admin_data = $wpdb->query( $wpdb->prepare ("INSERT INTO %1s (`domain_id`, `cron_id`, `status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_seo_data_history, $domain_id, $last_insert_cron_id, '1', current_time( 'mysql', 1 ) ) );       // db call ok; OK
								$admin_data_id = $wpdb->insert_id;
								if ( isset( $admin_data_id ) ){
									$cron_tbl_update = $wpdb->query( $wpdb->prepare ("UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, '1', current_time( 'mysql', 1 ), $last_insert_cron_id ) );       // db call ok; OK
								}
							}
						}
					}
				}
			}
		}
	}

	exit();


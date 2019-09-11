<?php
	/* Template Name: WP-admin URL Script Template */
	global  $wpdb;

	$url_list_result = array();

	$domain_tbl_name = "{$wpdb->prefix}sm_domain_list";
	$sm_cron_status_tbl_name = "{$wpdb->prefix}sm_cron_status";
	$sm_admin_data_history_tbl_name = "{$wpdb->prefix}sm_admin_data_history";
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

				$domian_lists_backup = $wpdb->get_results( $wpdb->prepare("SELECT domainTbl.*,adminTbl.cron_id FROM wp_sm_domain_list domainTbl LEFT JOIN wp_sm_admin_data_history adminTbl ON adminTbl.domain_id = domainTbl.id ORDER BY domainTbl.id DESC LIMIT 0,%1s",$no_of_post) ); // db call ok; OK
				$domian_lists = $wpdb->get_results (
					"
						SELECT dl.*, dh.cron_id,dh.status	 
						FROM   wp_sm_domain_list dl 
						LEFT JOIN 
								(
									SELECT dh.* 
							        FROM   wp_sm_admin_data_history dh
							        WHERE  id 
							        IN (
							            SELECT Max(id) 
							            FROM   wp_sm_admin_data_history dh 
							            GROUP  BY domain_id
							            )
						        )dh 
						ON dl.id = dh.domain_id 
					"
				) ;

				if(! empty ( $domian_lists ) ) {

					foreach ( $domian_lists as $domian_list ) {

						//Update data array
						$domain_id = $domian_list->id;

						//Insert Query
						$last_insert_cron_id = $wpdb->query( $wpdb->prepare ("INSERT INTO %1s (`domain_id`, `cron_name`, `status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_cron_status_tbl_name, $domain_id, 'admin_url', '0', current_time( 'mysql', 1 ) ) );       // db call ok; OK
						$last_insert_cron_id = $wpdb->insert_id;

						if( isset( $last_insert_cron_id ) ) {

							$site_url = $domian_list->domain_url;

							$site_login_url = $site_url."wp-admin/";

							$response = wp_remote_get( $site_login_url );

							$response_code = wp_remote_retrieve_response_code( $response );

							if( ! empty ( $response_code ) ) {

								if( 200 === $response_code ) {

									//Insert Query
									$admin_data = $wpdb->query( $wpdb->prepare ("INSERT INTO %1s (`domain_id`, `cron_id`, `status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_admin_data_history_tbl_name, $domain_id, $last_insert_cron_id, '0', current_time( 'mysql', 1 ) ) );       // db call ok; OK
									$admin_data_id = $wpdb->insert_id;
									if ( isset( $admin_data_id ) ) {
										$cron_tbl_update = $wpdb->query( $wpdb->prepare ("UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, '1', current_time( 'mysql', 1 ), $last_insert_cron_id ) );       // db call ok; OK
									}

								} else {


									//Insert Query
									$admin_data = $wpdb->query( $wpdb->prepare ("INSERT INTO %1s (`domain_id`, `cron_id`, `status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_admin_data_history_tbl_name, $domain_id, $last_insert_cron_id, '1', current_time( 'mysql', 1 ) ) );       // db call ok; OK
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
	}
	exit();


























	die();
	$domian_lists = $wpdb->get_results (
	"
		SELECT      *
		FROM        wp_custom_domain_list domainTbl
		INNER JOIN  wp_custom_script_admin_list adminTbl 
					ON adminTbl.domain_id = domainTbl.id
		WHERE 		domainTbl.report_status = '0'			
		ORDER BY    domainTbl.id ASC			
		"
	) ;

	foreach ($domian_lists as $domian_list) {

		$site_url = $domian_list->project_domain;

		$site_login_url = $domian_list->wp_admin_url;

		$response = wp_remote_get( $site_login_url );

		$response_code = wp_remote_retrieve_response_code( $response );

		if( ! empty ( $response_code ) ) {

			$wpdb->update(
				'wp_custom_script_admin_list',
				array(
					'status_code' => $response_code,
					'cron_status'    =>  '1',
					'updated_at' => current_time( 'mysql' )
				),
				array( 'domain_id' => $domian_list->domain_id )
			);

			if( 200 === $response_code ) {

				$wpdb->update(
					'wp_custom_script_admin_list',
					array(
						'admin_url_status' => '1',
						'updated_at' => current_time( 'mysql' )
					),
					array( 'domain_id' => $domian_list->domain_id )
				);

			}

		}
		else {
			echo "Please enter proper URL";
		}

		$wpdb->update(
			'wp_custom_domain_list',
			array(
				'wp_admin_url_status'    =>  '1',
				'updated_at' => current_time( 'mysql' )
			),
			array( 'id' => $domian_list->domain_id )
		);

	}


	die();


	$site_url = 'http://two.wordpress.test/';

	$site_login_url = 'http://two.wordpress.test/wp-admin/';

	$table_name = $wpdb->prefix.'XMLScript';


	// First, escape the link for use in a LIKE statement.
	$link = $wpdb->esc_like( $site_url );

	// Add wildcards, since we are searching within comment text.
	$link = '%' . $link . '%';

	//  Create a SQL statement with placeholders for the string input.
	$db_results = $wpdb->get_results(
		$wpdb->prepare(
			"SELECT * FROM wp_XMLScript WHERE site_url LIKE %s",
			$link
		)
	);

	if( ! empty( $db_results ) ) {

		foreach ( $db_results as $db_result ) {
			$json_data_db_id = $db_result->id;
		}

		//where condition
		$where = [ 'id' => $json_data_db_id ];

		//Update data array
		$update_data = array(
			'admin_url' => '1',
			'time' => current_time('mysql', 1)
		);

		//Update Query
		$wpdb->update( $table_name, $update_data ,$where );

		if( ! empty ( $response_code ) ) {
			if( 200 === $response_code ) {
				echo "Admin URL is wp-admin";
			}
			else {
				echo "wp-admin URL is different";
			}
		}
		else {
			echo "Please enter proper URL";
		}

	}
	else {
		echo "Not found URL";
	}


	exit();
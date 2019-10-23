<?php

use \Firebase\JWT\JWT;

/**
 * Login API Callback Function
 *
 * @return \WP_Error|\WP_REST_Response
 */
function sm_login( $request ) {

	$secret_key = defined( 'AUTH_SALT' ) ? AUTH_SALT : false;

	$login_data  = json_decode( $request->get_body() );
	$sm_username = $login_data->sm_username ? esc_html( $login_data->sm_username ) : '';
	$sm_password = $login_data->sm_password ? esc_html( $login_data->sm_password ) : '';

	/** First thing, check the secret key if not exist return a error*/
	if ( false === $secret_key ) {
		return new WP_Error(
			'jwt_auth_bad_config',
			__( 'JWT is not configurated properly, please contact the admin', 'md_site_monitor' ),
			array(
				'status' => 403,
			)
		);
	}

	/** Try to authenticate the user with the passed credentials*/
	$sm_user = wp_authenticate( $sm_username, $sm_password );

	/** If the authentication fails return a error*/
	if ( is_wp_error( $sm_user ) ) {
		return new WP_Error(
			'user_not_found',
			esc_html__( 'Invalid username or password.', 'md_site_monitor' ),
			array(
				'status' => 403,
			)
		);
	}

	$issuedAt  = time();
	$notBefore = $issuedAt;
	$expire    = $issuedAt + ( 24 * 60 * 60 * 7 );

	$token = array(
		'iss'  => get_bloginfo( 'url' ),
		'iat'  => $issuedAt,
		'nbf'  => $notBefore,
		'exp'  => $expire,
		'data' => array(
			'user' => array(
				'id' => $sm_user->data->ID,
			),
		),
	);

	$token = JWT::encode( $token, $secret_key );;

	/** The token is signed, now create the object with no sensible user data to the client*/
	$data = array(
		'token' => $token,
	);

	return new WP_REST_Response( $data, 200 );
}

/**
 * Delete Projects API callback.
 *
 * @param $request
 *
 * @return \WP_Error|\WP_REST_Response
 */

function sm_delete_projects( $request ) {

	$auth = validate_token();

	if ( ! isset( $auth['status'] ) || empty( $auth['status'] ) || false === $auth['status'] ) {
		return new WP_Error( 'invalid_user', esc_html__( 'User ID not found', 'md_site_monitor' ), array( 'status' => 403 ) );
	}

	global $wpdb;
	$delete_data = json_decode( $request->get_body() );
	if ( empty( $delete_data ) ) {
		return new WP_Error( 'invalid_data', esc_html__( 'Project data not found', 'md_site_monitor' ), array( 'status' => 403 ) );
	} else {
		$sm_domain_list = $wpdb->prefix . 'sm_domain_list';
		foreach ( $delete_data as $delete_id ) {
			$wpdb->query( $wpdb->prepare( "DELETE FROM %1s WHERE id = %d", $sm_domain_list, $delete_id ) );
		}
	}

	return new WP_REST_Response( $delete_data, 200 );
}

/**
 *
 * Enabled / Disabled projects for scan
 *
 * @param $request
 *
 * @return \WP_Error|\WP_REST_Response
 */

function sm_projects_status( $request ) {

	$auth = validate_token();

	if ( ! isset( $auth['status'] ) || empty( $auth['status'] ) || false === $auth['status'] ) {
		return new WP_Error( 'invalid_user', esc_html__( 'User ID not found', 'md_site_monitor' ), array( 'status' => 403 ) );
	}

	global $wpdb;
	$projectData = json_decode( $request->get_body() );
	$project_id  = $projectData->projectID ? absint( esc_html( $projectData->projectID ) ) : '';

	$projectStatus = $projectData->projectStatus ? true : false;
	if ( empty( $project_id ) ) {
		return new WP_Error( 'invalid_data', esc_html__( 'Project data not found', 'md_site_monitor' ), array( 'status' => 403 ) );
	} else {

		$sm_sitemap_option = 0;
		$sm_admin_option   = 0;
		$sm_robots_option  = 0;
		$sm_https_status  = 0;
		$sm_captcha_status  = 0;
		if ( true === $projectStatus || 1 === $projectStatus ) {
			$sm_sitemap_option = 1;
			$sm_admin_option   = 1;
			$sm_robots_option  = 1;
			$sm_https_status  = 1;
			$sm_captcha_status = 1;
		}

		$sm_domain_scan_status = $wpdb->prefix . 'sm_domain_scan_status';
		$wpdb->update(
			$sm_domain_scan_status,
			array(
				'sitemap_status' => $sm_sitemap_option,
				'admin_status'   => $sm_admin_option,
				'roborts_status' => $sm_robots_option,
				'https_status' => $sm_https_status,
				'captcha_status' => $sm_captcha_status,
				'updated_date'   => date( 'Y-m-d H:i:s' ),
			),
			array(
				'domain_id' => $project_id,
			)
		);
	}

	$response = array(
		'project_id' => $project_id,
		'message'    => "Project updated Successfully.",
	);

	return new WP_REST_Response( $response, 200 );
}

/**
 *
 * Add project API callback function
 *
 * @param $request
 *
 * @return array|\WP_Error|\WP_REST_Response
 */

function sm_add_project( $request ) {

	$auth = validate_token();

	if ( ! isset( $auth['status'] ) || empty( $auth['status'] ) || false === $auth['status'] ) {
		return new WP_Error( 'invalid_user', esc_html__( 'User ID not found', 'md_site_monitor' ), array( 'status' => 403 ) );
	}
	$sm_user_id = $auth['uid'];

	global $wpdb;

	$project_data = json_decode( $request->get_body() );

	$project_data->user_id = $sm_user_id;
	$sm_admin_option       = $project_data->sm_admin_option ? 1 : 0;
	$sm_robots_option      = $project_data->sm_robots_option ? 1 : 0;
	$sm_sitemap_option     = $project_data->sm_sitemap_option ? 1 : 0;
	$sm_domain_url         = $project_data->sm_domain_url ? esc_html( $project_data->sm_domain_url ) : 1;
	$sm_sitemap_url        = $project_data->sm_sitemap_url ? esc_html( $project_data->sm_sitemap_url ) : 1;
	$sm_project_name       = $project_data->sm_project_name ? esc_html( $project_data->sm_project_name ) : 1;

	if ( empty( $sm_project_name ) || empty( $sm_domain_url ) ) {
		return new WP_Error( 'data_not_found', esc_html__( 'Please enter required data.', 'md_site_monitor' ), array( 'status' => 403 ) );
	}

	$sm_domain_list = $wpdb->prefix . 'sm_domain_list';

	$wpdb->insert( $sm_domain_list, array(
		'user_id'      => absint( $sm_user_id ),
		'project_name' => $sm_project_name,
		'domain_url'   => trim( strtolower( $sm_domain_url ) ),
		'sitemap_url'  => $sm_sitemap_url,
		'created_date' => date( 'Y-m-d H:i:s' ),
		'updated_date' => date( 'Y-m-d H:i:s' ),
	), array(
		'%d',
		'%s',
		'%s',
		'%s',
		'%s',
		'%s',
	) );

	$project_id = $wpdb->insert_id;

	$sm_domain_list = $wpdb->prefix . 'sm_domain_scan_status';
	$wpdb->insert( $sm_domain_list, array(
		'domain_id'      => absint( $project_id ),
		'sitemap_status' => absint( $sm_sitemap_option ),
		'admin_status'   => absint( $sm_admin_option ),
		'roborts_status' => absint( $sm_robots_option ),
		'https_status' => 1,
		'captcha_status' => 1,
		'created_date'   => date( 'Y-m-d H:i:s' ),
		'updated_date'   => date( 'Y-m-d H:i:s' ),
	), array(
		'%d',
		'%d',
		'%d',
		'%d',
		'%d',
		'%d',
		'%s',
		'%s',
	) );

	$stats_id = $wpdb->insert_id;

	if ( isset( $project_id ) && ! empty( $project_id ) && isset( $stats_id ) && ! empty( $stats_id ) ) {
		add_project_notification( $project_data );
		$response = array(
			'project_id' => $project_id,
			'message'    => "Project Successfully added.",
		);

		$response = new WP_REST_Response( $response, array( 'status' => 200 ) );

		return $response;
	} else {
		return new WP_Error( 'error', esc_html__( 'Something went wrong.', 'md_site_monitor' ), array( 'status' => 200 ) );
	}
}

/**
 *
 * Callback function for the list of projects with search and pagination.
 *
 * @param $request
 *
 * @return \WP_Error|\WP_REST_Response
 */

function sm_get_domains( $request ) {

	global $wpdb;
	$auth = validate_token();

	if ( ! isset( $auth['status'] ) || empty( $auth['status'] ) || false === $auth['status'] ) {
		return new WP_Error( 'invalid_user', esc_html__( 'User ID not found', 'md_site_monitor' ), array( 'status' => 403 ) );
	}
	$sm_user_id = $auth['uid'];
	$sm_paged   = filter_input( INPUT_GET, 'sm_paged', FILTER_SANITIZE_NUMBER_INT );
	$sm_search  = filter_input( INPUT_GET, 'sm_search', FILTER_SANITIZE_STRING );
	$sm_page_no = $sm_paged ? ( $sm_paged + 1 ) : 1;
	$offset     = absint( $sm_page_no - 1 ) * absint( SM_RECORDS_PER_PAGE );

	$domain_table_name  = $wpdb->prefix . SM_DOMAIN_TABLE;
	$domain_scan_status = $wpdb->prefix . SM_DOMAIN_STATUS_TABLE;

	if ( ! empty( $sm_search ) ) {
		$domain_data = $wpdb->get_results( $wpdb->prepare( "			
					SELECT dl.id,dl.project_name,dl.domain_url,dl.sitemap_url,cs.sitemap_status,cs.admin_status,cs.admin_status,cs.roborts_status FROM %1s as dl 
					JOIN %1s as cs
					ON dl.id = cs.domain_id 
					WHERE dl.project_name LIKE %s
					AND dl.user_id = %d ORDER BY dl.id DESC LIMIT %d, %d",
			$domain_table_name,
			$domain_scan_status,
			'%' . $wpdb->esc_like( $sm_search ) . '%',
			$sm_user_id,
			$offset,
			SM_RECORDS_PER_PAGE ), ARRAY_A );
	} else {
		$domain_data = $wpdb->get_results( $wpdb->prepare( "			
					SELECT dl.id,dl.project_name,dl.domain_url,dl.sitemap_url,cs.sitemap_status,cs.admin_status,cs.admin_status,cs.roborts_status FROM %1s as dl 
					JOIN %1s as cs
					ON dl.id = cs.domain_id 
					AND dl.user_id = %d ORDER BY dl.id DESC LIMIT %d, %d",
			$domain_table_name,
			$domain_scan_status,
			$sm_user_id,
			$offset,
			SM_RECORDS_PER_PAGE ), ARRAY_A );
	}

	if ( isset( $domain_data ) && empty( $domain_data ) ) {
		return new WP_Error( 'data_not_found', esc_html__( 'Sorry, No records found.', 'md_site_monitor' ), array( 'status' => 200 ) );
	}

	if ( ! empty( $sm_search ) ) {
		$sm_total_domain_data = $wpdb->get_row(
			$wpdb->prepare( "
					SELECT COUNT(*) as sm_total_domain FROM %1s 
					WHERE project_name LIKE %s 
					and user_id = %d",
				$domain_table_name,
				'%' . $wpdb->esc_like( $sm_search ) . '%',
				$sm_user_id
			) );
	} else {
		$sm_total_domain_data = $wpdb->get_row( $wpdb->prepare( "SELECT COUNT(*) as sm_total_domain FROM %1s WHERE user_id = %d", $domain_table_name,
			$sm_user_id ) );
	}
	$sm_total_domain = absint( $sm_total_domain_data->sm_total_domain );
	foreach ( $domain_data as $key => $data ) {
		$domain_data[ $key ]['cron_status']['sitemap_xml']    = get_project_cron_status( 'sitemap_xml', $data['id'] );
		$domain_data[ $key ]['cron_status']['admin_status']   = get_project_cron_status( 'admin_url', $data['id'] );
		$domain_data[ $key ]['cron_status']['robots_status']  = get_project_cron_status( 'robots_url', $data['id'] );
		$domain_data[ $key ]['cron_status']['https_status']   = get_project_cron_status( 'https_scan', $data['id'] );
		$domain_data[ $key ]['cron_status']['captcha_status'] = get_project_cron_status( 'captcha_scan', $data['id'] );
	}


	//print_r($domain_data);
	$api_responce = array(
		'data'       => $domain_data,
		'total_data' => $sm_total_domain,
	);
	$response     = new WP_REST_Response( $api_responce, array( 'status' => 200 ) );

	return $response;
}

/**
 * Get Status of specific project along with sitemap data and other status.
 * @param $request
 *
 * @return \WP_Error|\WP_REST_Response
 */

function sm_project_report( $request ) {

	$auth = validate_token();

	if ( ! isset( $auth['status'] ) || empty( $auth['status'] ) || false === $auth['status'] ) {
		return new WP_Error( 'invalid_user', esc_html__( 'User ID not found', 'md_site_monitor' ), array( 'status' => 403 ) );
	}

	$project_id = filter_input( INPUT_GET, 'project_id', FILTER_SANITIZE_NUMBER_INT );
	$type       = filter_input( INPUT_GET, 'type', FILTER_SANITIZE_STRING );

	$api_responce = array();

	switch ( $type ) {
		case 'sitemap';
			$api_responce = sitemap_report( $project_id );
			break;
		case 'admin';
			admin_report( $project_id );
			break;
		case 'robots';
			robots_report( $project_id );
			break;
		case 'all';
			$api_responce = get_all_type_report( $project_id );
			break;
	}

	$response = new WP_REST_Response( $api_responce, array( 'status' => 200 ) );

	return $response;
}

/**
 *
 * Get only sitemap data for the specific projects.
 *
 * @param $project_id
 *
 * @return array
 */

function sitemap_report( $project_id ) {

	global $wpdb;
	$sm_sitemap_data_history = $wpdb->prefix . SM_SITEMAP_HISTORY_TABLE;

	$sitemap_data = $wpdb->get_results( $wpdb->prepare( "			
					SELECT * FROM %1s 
					WHERE domain_id = %d AND created_date >= DATE(NOW()) - INTERVAL 30 DAY
					ORDER BY id ASC",
		$sm_sitemap_data_history,
		$project_id ), ARRAY_A );

	$sitemap_filter_data = array();

	if ( ! empty( $sitemap_data ) ) {
		foreach ( $sitemap_data as $key => $data ) {

			$sitemap_filter_data[ $key ]['id']                = esc_html( $data['id'] );
			$sitemap_filter_data[ $key ]['domain_id']         = esc_html( $data['domain_id'] );
			$sitemap_filter_data[ $key ]['cron_id']           = esc_html( $data['cron_id'] );
			$sitemap_filter_data[ $key ]['sitemap_xml_data']  = ! empty( $data['sitemap_xml_data'] ) ? json_decode( $data['sitemap_xml_data'] ) : array();
			$sitemap_filter_data[ $key ]['sitemap_diff_data'] = ! empty( $data['sitemap_diff_data'] ) ? json_decode( $data['sitemap_diff_data'] ) : array();
			$sitemap_filter_data[ $key ]['date']              = ! empty( $data['created_date'] ) ? esc_html( date( 'd-m-Y', strtotime( $data['created_date'] ) ) ) : '';

			if ( ! empty( $sitemap_filter_data[ $key ]['sitemap_xml_data'] ) ) {
				$current_diff_count                           = count( $sitemap_filter_data[ $key ]['sitemap_xml_data'] );
				$sitemap_filter_data[ $key ]['sitemap_count'] = $current_diff_count;
				$old_key                                      = $key - 1;
				$old_diff_count                               = $sitemap_filter_data[ $old_key ]['sitemap_count'];
				$diff_count                                   = absint( $current_diff_count ) - absint( $old_diff_count );
				if ( $diff_count === 0 ) {
					$sitemap_filter_data[ $key ]['sitemap_text_class'] = "sitemap_text green_text";
					$sitemap_filter_data[ $key ]['sitemap_diff_text'] = sprintf( __( 'No any changes found in the sitemap', 'sitemonitor' ), $diff_count );
				} else if ( $diff_count > 0 ) {
					$sitemap_filter_data[ $key ]['sitemap_diff_text'] = sprintf( __( 'Sitemap Updated - %d recored was added', 'sitemonitor' ), $diff_count );
					$sitemap_filter_data[ $key ]['sitemap_text_class'] = "sitemap_text green_text";
				} else {
					$sitemap_filter_data[ $key ]['sitemap_text_class'] = "sitemap_text red_text";
					$sitemap_filter_data[ $key ]['sitemap_diff_text'] = sprintf( __( 'Sitemap Updated - %d recored was removed', 'sitemonitor' ), abs( $diff_count ) );
				}
			} else {
				$sitemap_filter_data[ $key ]['sitemap_diff_text'] = __( 'sitemap was added', 'sitemonitor' );
			}

		}
	}
	array_shift( $sitemap_filter_data );

	return $sitemap_filter_data;
}

/**
 *
 *  Get all the status of given project id.
 *
 * @param $project_id
 *
 * @return array
 */

function get_all_type_report( $project_id ) {

	global $wpdb;
	$sitemap_filter_data            = array();
	$sitemap_filter_data['sitemap'] = sitemap_report( $project_id );

	$admin_url = get_project_status( 'admin_url', $project_id );
	$sitemap_filter_data['admin_status'] = !empty($admin_url['status']) ? $admin_url['status'] : 0;
	$sitemap_filter_data['admin_status_text'] = !empty($admin_url['status_text']) ? $admin_url['status_text'] : "";

	$robots_url = get_project_status( 'robots_url', $project_id );
	$sitemap_filter_data['robots_status'] = !empty($robots_url['status']) ? $robots_url['status'] : 0;
	$sitemap_filter_data['robots_status_text'] = !empty($robots_url['status_text']) ? $robots_url['status_text'] : "";

	$https_scan = get_project_status( 'https_scan', $project_id );
	$sitemap_filter_data['ssl_status'] = !empty($https_scan['status']) ? $https_scan['status'] : 0;
	$sitemap_filter_data['ssl_status_text'] = !empty($https_scan['status_text']) ? $https_scan['status_text'] : "";

	$captcha_scan = get_project_status( 'captcha_scan', $project_id );
	$sitemap_filter_data['captcha_status'] = !empty($captcha_scan['status']) ? $captcha_scan['status'] : 0;
	$sitemap_filter_data['captcha_status_text'] = !empty($captcha_scan['status_text']) ? $captcha_scan['status_text'] : "";


	$domain_table_name  = $wpdb->prefix . SM_DOMAIN_TABLE;
	$domain_scan_status = $wpdb->prefix . SM_DOMAIN_STATUS_TABLE;

	$domain_data = $wpdb->get_results( $wpdb->prepare( "			
					SELECT dl.id,dl.project_name,dl.domain_url,dl.sitemap_url,cs.sitemap_status,cs.admin_status,cs.admin_status,cs.roborts_status FROM %1s as dl 
					JOIN %1s as cs
					ON dl.id = cs.domain_id 
					AND dl.user_id = %d ORDER BY dl.id DESC LIMIT %d, %d",
		$domain_table_name,
		$domain_scan_status,
		$sm_user_id,
		$offset,
		SM_RECORDS_PER_PAGE ), ARRAY_A );

	return $sitemap_filter_data;
}

/**
 * Send email notification when project added by user.
 *
 * @param $domainData
 */

function add_project_notification( $domainData ) {

	$user_id    = $domainData->user_id;
	$domain_url = $domainData->sm_domain_url;

	$user_info  = get_userdata( $user_id );
	$user_email = $user_info->user_email;

	$body = add_site_email_template( $domain_url );

	$headers = array( 'Content-Type: text/html; charset=UTF-8' );
	wp_mail( $user_email, 'A new site was added to your account. We will now monitor ' . $domain_url, $body, $headers );
}

/**
 *
 * Get cron data ( cron execute or not ) of the specific project.
 *
 * @param $status_type
 * @param $project_id
 *
 * @return int
 */

function get_project_cron_status( $status_type, $project_id ) {
	global $wpdb;
	$sm_cron_status = $wpdb->prefix . SM_CRON_STATUS_TABLE;
	$project_status = $wpdb->get_row(
		$wpdb->prepare(
			"SELECT status FROM %1s WHERE domain_id =%d AND cron_name = %s ORDER BY id DESC LIMIT 1",
			array(
				$sm_cron_status,
				$project_id,
				$status_type,
			)
		)
	);
	if ( ! empty( $project_status ) ) {
		return absint( $project_status->status );
	} else {
		return 0;
	}
}

/**
 *
 * Get Status of the specific project and type.
 *
 * @param $status_type
 * @param $project_id
 *
 * @return array\
 */

function get_project_status( $status_type, $project_id ) {

	global $wpdb;
	$sm_admin_data_history = $wpdb->prefix . SM_ADMIN_HISTORY_TABLE;
	$sm_seo_data_history = $wpdb->prefix . SM_SEO_DATA_TABLE;
	$sm_site_https_history = $wpdb->prefix . SM_SSL_DATA_TABLE;
	$sm_site_captcha_check_history = $wpdb->prefix . SM_CAPTCHA_DATA_TABLE;

	$domain_id = $project_id;
	$crontype = $status_type;

	if( 'admin_url' === $crontype  ) {
		$tablename = $sm_admin_data_history;
		$status = 'status';
	}
	if( 'robots_url' === $crontype ) {
		$tablename = $sm_seo_data_history;
		$status = 'seo_status';
	}
	if( 'https_scan' === $crontype ) {
		$tablename = $sm_site_https_history;
		$status = 'https_status';
	}
	if( 'captcha_scan' === $crontype ) {
		$tablename = $sm_site_captcha_check_history;
		$status = 'captcha_status';
	}
	$domain_lists = $wpdb->get_row(
		$wpdb->prepare("
                SELECT adh.updated_date,  adh.%1s  as status 
                FROM   %1s adh 
                WHERE adh.domain_id = %d
                ORDER BY adh.id DESC 
                LIMIT 0,1",
			array(
				$status,
				$tablename,
				$domain_id,
			)
		)
	);  //db call ok; no-cache ok

	$response_data = array();
	if(!empty($domain_lists)){
		$response_data['status'] = absint($domain_lists->status);
		$date1 = strtotime( $domain_lists->updated_date );
		$date2 = time();
		$subTime = $date2 - $date1;
		$y = ($subTime/(60*60*24*365));
		$d = ($subTime/(60*60*24))%365;
		$h = ($subTime/(60*60))%24;
		$m = ($subTime/60)%60;

		if($y >= 1){
			$ago_caption = 1 === $y ? "year" : "years";
			$status_text = sprintf( __( 'Updated %d %s ago', 'sitemonitor' ), absint( $y ) , $ago_caption);
		} elseif ($d >= 1){
			$ago_caption = 1 === $d ? "day" : "days";
			$status_text = sprintf( __( 'Updated %d %s ago', 'sitemonitor' ), absint( $d ) , $ago_caption );
		} elseif ($h >= 1){
			$ago_caption = 1 === $h ? "hour" : "hours";
			$status_text = sprintf( __( 'Updated %d %s ago', 'sitemonitor' ), absint( $h ), $ago_caption );
		} else {
			$ago_caption = 1 === $m ? "minute" : "minutes";
			$status_text = sprintf( __( 'Updated %d %s ago', 'sitemonitor' ), absint( $m ), $ago_caption );
		}
		$response_data['status_text'] = $status_text;
	}
	return $response_data;
}

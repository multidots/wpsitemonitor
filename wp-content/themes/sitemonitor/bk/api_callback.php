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

function sm_delete_projects( $request ) {

	$auth = validate_token();

	if ( ! isset( $auth['status'] ) || empty( $auth['status'] ) || false === $auth['status'] ) {
		return new WP_Error( 'invalid_user', esc_html__( 'User ID not found', 'md_site_monitor' ), array( 'status' => 403 ) );
	}
	$sm_user_id = $auth['uid'];

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

	$response = array(
		'message' => "Projects deleted Successfully.",
	);

	return new WP_REST_Response( $delete_data, 200 );
}


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
	$sm_domain_url         = $project_data->sm_domain_url ? esc_html( $project_data->sm_domain_url ) : '';
	$sm_sitemap_url        = $project_data->sm_sitemap_url ? esc_html( $project_data->sm_sitemap_url ) : '';
	$sm_project_name       = $project_data->sm_project_name ? esc_html( $project_data->sm_project_name ) : '';

	if ( empty( $sm_project_name ) || empty( $sm_domain_url ) ) {
		return new WP_Error( 'data_not_found', esc_html__( 'Please enter required data.', 'md_site_monitor' ), array( 'status' => 403 ) );
	}

	$sm_domain_list = $wpdb->prefix . 'sm_domain_list';

	$wpdb->insert( $sm_domain_list, array(
		'user_id'      => absint( $sm_user_id ),
		'project_name' => $sm_project_name,
		'domain_url'   => $sm_domain_url,
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
		'created_date'   => date( 'Y-m-d H:i:s' ),
		'updated_date'   => date( 'Y-m-d H:i:s' ),
	), array(
		'%d',
		'%d',
		'%d',
		'%d',
		'%s',
		'%s',
	) );

	$stats_id = $wpdb->insert_id;

	if ( isset( $project_id ) && ! empty( $project_id ) && isset( $stats_id ) && ! empty( $stats_id ) ) {

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
					SELECT * FROM %1s as dl 
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
					SELECT * FROM %1s as dl 
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
		$sm_total_domain_data = $wpdb->get_row( $wpdb->prepare( "SELECT COUNT(*) as sm_total_domain FROM %1s WHERE project_name LIKE '%" . $sm_search . "%' and user_id = %d",
			$domain_table_name,
			$sm_user_id
		) );
	} else {
		$sm_total_domain_data = $wpdb->get_row( $wpdb->prepare( "SELECT COUNT(*) as sm_total_domain FROM %1s WHERE user_id = %d", $domain_table_name,
			$sm_user_id ) );
	}
	$sm_total_domain = absint( $sm_total_domain_data->sm_total_domain );
	$api_responce    = array(
		'data'       => $domain_data,
		'total_data' => $sm_total_domain,
	);
	$response        = new WP_REST_Response( $api_responce, array( 'status' => 200 ) );

	return $response;
}

<?php

use Firebase\JWT\JWT;

/**
 * Login API Callback Function
 *
 * @return \WP_Error|\WP_REST_Response
 */
function sm_login( $request ) {

	$login_data  = json_decode( $request->get_body() );
	$sm_username = $login_data->sm_username ? esc_html( $login_data->sm_username ) : '';
	$sm_password = $login_data->sm_password ? esc_html( $login_data->sm_password ) : '';
	$sm_user     = wp_authenticate( $sm_username, $sm_password );

	if ( is_wp_error( $sm_user ) ) {
		return new WP_Error( 'user_not_found', esc_html__( 'Invalid username or password.', 'md_site_monitor' ), array( 'status' => 200 ) );
	}

	return new WP_REST_Response( $sm_user, 200 );
}

function sm_delete_projects( $request ) {
	global $wpdb;
	$api_headers      = $request->get_headers();
	$auth             = $api_headers['authorization'][0];
	$logged_user_data = get_user_data_using_auth( $auth );

	$error = ! empty( $logged_user_data->error ) ? false : true;
	if ( true === $error ) {

		$sm_user_id = $logged_user_data['data']['user_id'] ? esc_html( absint( $logged_user_data['data']['user_id'] ) ) : '';
		if ( empty( $sm_user_id ) ) {
			return new WP_Error( 'invalid_data', esc_html__( 'User ID not found', 'md_site_monitor' ), array( 'status' => 403 ) );
		}
	}

	$delete_data = json_decode( $request->get_body() );
	if ( empty( $delete_data ) ) {
		return new WP_Error( 'invalid_data', esc_html__( 'Project data not found', 'md_site_monitor' ), array( 'status' => 403 ) );
	} else {
		$sm_domain_list = $wpdb->prefix . 'sm_domain_list';
		foreach ($delete_data as $delete_id){
			$wpdb->query( $wpdb->prepare("DELETE FROM %1s WHERE id = %d", $sm_domain_list, $delete_id) );
		}
	}

	$response = array(
		'message'    => "Projects deleted Successfully.",
	);
	return new WP_REST_Response( $delete_data, 200 );
}


function sm_add_project( $request ) {
	global $wpdb;
	$api_headers      = $request->get_headers();
	$auth             = $api_headers['authorization'][0];
	$logged_user_data = get_user_data_using_auth( $auth );

	$error = ! empty( $logged_user_data->error ) ? false : true;
	if ( true === $error ) {


		$sm_user_id = $logged_user_data['data']['user_id'] ? esc_html( absint( $logged_user_data['data']['user_id'] ) ) : '';
		if ( empty( $sm_user_id ) ) {
			return new WP_Error( 'invalid_data', esc_html__( 'User ID not found', 'md_site_monitor' ), array( 'status' => 403 ) );
		}


		$project_data      = json_decode( $request->get_body() );
		$sm_admin_option   = $project_data->sm_admin_option ? 1 : 0;
		$sm_robots_option  = $project_data->sm_robots_option ? 1 : 0;
		$sm_sitemap_option = $project_data->sm_sitemap_option ? 1 : 0;
		$sm_domain_url     = $project_data->sm_domain_url ? esc_html( $project_data->sm_domain_url ) : '';
		$sm_sitemap_url    = $project_data->sm_sitemap_url ? esc_html( $project_data->sm_sitemap_url ) : '';
		$sm_project_name   = $project_data->sm_project_name ? esc_html( $project_data->sm_project_name ) : '';

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
	} else {
		return $logged_user_data;
	}
}

function sm_get_domains( $request ) {

	global $wpdb;
	$api_headers      = $request->get_headers();
	$auth             = $api_headers['authorization'][0];
	$logged_user_data = get_user_data_using_auth( $auth );

	$error = ! empty( $logged_user_data->error ) ? false : true;
	if ( true === $error ) {

		$sm_user_id = $logged_user_data['data']['user_id'] ? esc_html( absint( $logged_user_data['data']['user_id'] ) ) : '';
		$sm_paged   = filter_input( INPUT_GET, 'sm_paged', FILTER_SANITIZE_NUMBER_INT );
		$sm_search  = filter_input( INPUT_GET, 'sm_search', FILTER_SANITIZE_STRING );
		$sm_page_no = $sm_paged ? ( $sm_paged + 1 ) : 1;
		$offset     = absint( $sm_page_no - 1 ) * absint( SM_RECORDS_PER_PAGE );

		$domain_table_name = $wpdb->prefix . SM_DOMAIN_TABLE;
		$domain_scan_status = $wpdb->prefix . SM_DOMAIN_STATUS_TABLE;

		if ( empty( $sm_user_id ) ) {
			return new WP_Error( 'invalid_data', esc_html__( 'User ID not found', 'md_site_monitor' ), array( 'status' => 200 ) );
		}

		if ( ! empty( $sm_search ) ) {
			$domain_data = $wpdb->get_results( $wpdb->prepare( "			
					SELECT * FROM %1s as dl 
					LEFT JOIN %1s as cs
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
					LEFT JOIN %1s as cs
					ON dl.id = cs.domain_id 
					AND dl.user_id = %d ORDER BY dl.id DESC LIMIT %d, %d",
				$domain_table_name,
				$domain_scan_status,
				$sm_user_id,
				$offset,
				SM_RECORDS_PER_PAGE ), ARRAY_A );
		}


		if ( isset( $domain_data ) && empty( $domain_data ) ) {
			return new WP_Error( 'data_not_found', esc_html__( 'Sorry, No records found.', 'md_site_monitor' ), array( 'status' => 403 ) );
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

		$api_responce = array(
			'data'       => $domain_data,
			'total_data' => $sm_total_domain,
		);

		$response = new WP_REST_Response( $api_responce, array( 'status' => 200 ) );

		return $response;
	} else {
		return $logged_user_data;
	}
}

function get_user_data_using_auth( $auth ) {

	if ( ! $auth ) {
		return new WP_Error(
			'jwt_auth_no_auth_header',
			'Authorization header not found.',
			array(
				'status' => 403,
			)
		);
	}

	list( $token ) = sscanf( $auth, 'Bearer %s' );
	if ( ! $token ) {
		return new WP_Error(
			'jwt_auth_bad_auth_header',
			'Authorization header malformed.',
			array(
				'status' => 403,
			)
		);
	}

	/** Get the Secret Key */
	$secret_key = defined( 'JWT_AUTH_SECRET_KEY' ) ? JWT_AUTH_SECRET_KEY : false;
	if ( ! $secret_key ) {
		return new WP_Error(
			'jwt_auth_bad_config',
			'JWT is not configurated properly, please contact the admin',
			array(
				'status' => 403,
			)
		);
	}

	/** Try to decode the token */
	try {
		$token = JWT::decode( $token, $secret_key, array( 'HS256' ) );
		/** The Token is decoded now validate the iss */
		if ( $token->iss !== get_bloginfo( 'url' ) ) {
			/** The iss do not match, return error */
			return new WP_Error(
				'jwt_auth_bad_iss',
				'The iss do not match with this server',
				array(
					'status' => 403,
				)
			);
		}
		/** So far so good, validate the user id in the token */
		if ( ! isset( $token->data->user->id ) ) {
			/** No user id in the token, abort!! */
			return new WP_Error(
				'jwt_auth_bad_request',
				'User ID not found in the token',
				array(
					'status' => 403,
				)
			);
		}

		/** If the output is true return an answer to the request to show it */
		return array(
			'code' => 'jwt_auth_valid_token',
			'data' => array(
				'status'  => 200,
				'user_id' => $token->data->user->id,
			),
		);
	} catch ( Exception $e ) {
		/** Something is wrong trying to decode the token, send back the error */
		return new WP_Error(
			'jwt_auth_invalid_token',
			$e->getMessage(),
			array(
				'status' => 403,
			)
		);
	}
}

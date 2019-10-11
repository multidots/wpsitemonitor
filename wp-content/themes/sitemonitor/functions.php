<?php
use \Firebase\JWT\JWT;
require_once get_template_directory() . '/jwt/vendor/autoload.php';
require_once get_template_directory() . '/api/register_api_endpoint.php';
require_once get_template_directory() . '/api/api_callback.php';
require_once get_template_directory() . '/api/constant.php';

/**
 * Validate Authorization for the user
 * return Array
 */
function validate_token() {
	$auth = isset( $_SERVER['HTTP_AUTHORIZATION'] ) ? $_SERVER['HTTP_AUTHORIZATION'] : false;

	/* Double check for different auth header string (server dependent) */
	if ( ! $auth ) {
		$auth = isset( $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] ) ? $_SERVER['REDIRECT_HTTP_AUTHORIZATION'] : false;
	}

	if ( ! $auth ) {
		return array(
			'status' => false,
		);
	}

	list( $token ) = sscanf( $auth, 'Bearer %s' );
	if ( ! $token ) {
		return array(
			'status' => false,
		);
	}

	/** Get the Secret Key */
	$secret_key = defined( 'AUTH_SALT' ) ? AUTH_SALT : false;
	if ( ! $secret_key ) {
		return array(
			'status' => false,
		);
	}

	/** Try to decode the token */
	try {
		$token = JWT::decode( $token, $secret_key, array( 'HS256' ) );
		/** The Token is decoded now validate the iss */
		if ( $token->iss != get_bloginfo( 'url' ) ) {
			/** The iss do not match, return error */
			return array(
				'status' => false,
			);
		}
		/** So far so good, validate the user id in the token */
		if ( ! isset( $token->data->user->id ) ) {
			/** No user id in the token, abort!! */
			return array(
				'status' => false,
			);
		}

		/** If the output is true return an answer to the request to show it */
		return array(
			'status' => true,
			'uid' => $token->data->user->id,
		);;
	} catch ( Exception $e ) {
		/** Something is wrong trying to decode the token, send back the error */
		return false;
	}
}

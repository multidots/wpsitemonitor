<?php
use \Firebase\JWT\JWT;
require_once get_template_directory() . '/jwt/vendor/autoload.php';
require_once get_template_directory() . '/class-WPMail.php';
require_once get_template_directory() . '/api/register_api_endpoint.php';
require_once get_template_directory() . '/api/api_callback.php';
require_once get_template_directory() . '/api/constant.php';

/**
 * Validate Authorization for the user
 * return Array
 */
function validate_token() {

	$auth = FILTER_INPUT( INPUT_SERVER, 'HTTP_AUTHORIZATION', FILTER_SANITIZE_STRING );
	$auth = isset( $auth ) ? $auth : false;

	/* Double check for different auth header string (server dependent) */
	if ( ! $auth ) {
		$auth = FILTER_INPUT( INPUT_SERVER, 'REDIRECT_HTTP_AUTHORIZATION', FILTER_SANITIZE_STRING );
		$auth = isset( $auth ) ? $auth : false;
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
		if ( $token->iss !== get_bloginfo( 'url' ) ) {
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
			'uid'    => $token->data->user->id,
		);;
	} catch ( Exception $e ) {
		/** Something is wrong trying to decode the token, send back the error */
		return false;
	}
}

function md_sitemonitor_set_default_tables() {
	require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );

	global $wpdb;
	$charset_collate = $wpdb->get_charset_collate();

	$sm_domain_list = $wpdb->prefix . 'sm_domain_list';

	$sql = "CREATE TABLE IF NOT EXISTS {$sm_domain_list} (
	id int(20) NOT NULL AUTO_INCREMENT,
	user_id bigint(20) NOT NULL,
	project_name varchar(255) NULL,
	domain_url varchar(255) NOT NULL,
	sitemap_url varchar(255) NULL ,					
	created_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_date timestamp NULL DEFAULT CURRENT_TIMESTAMP,	
	PRIMARY KEY  (id)
	) {$charset_collate};";
	dbDelta( $sql );

	$sm_cron_status = $wpdb->prefix . 'sm_cron_status';

	$sql = "CREATE TABLE IF NOT EXISTS {$sm_cron_status} (
	id int(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	domain_id int(20) NOT NULL,
	cron_name varchar(255) NULL,
	status varchar(255) NOT NULL,
	log longtext NULL ,					
	created_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_date timestamp NULL DEFAULT CURRENT_TIMESTAMP,	
	FOREIGN KEY (domain_id) REFERENCES " . $sm_domain_list . "(id) ON DELETE CASCADE
	) {$charset_collate};";
	dbDelta( $sql );

	$sm_sitemap_data_history = $wpdb->prefix . 'sm_sitemap_data_history';

	$sql = "CREATE TABLE IF NOT EXISTS {$sm_sitemap_data_history} (
	id int(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	domain_id int(20) NOT NULL,
	cron_id int(20) NOT NULL,
	sitemap_xml_data longtext NULL,
	sitemap_diff_data longtext NULL,		
	created_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_date timestamp NULL DEFAULT CURRENT_TIMESTAMP,	
	FOREIGN KEY (domain_id) REFERENCES " . $sm_domain_list . "(id) ON DELETE CASCADE,
	FOREIGN KEY (cron_id) REFERENCES " . $sm_cron_status . "(id) ON DELETE CASCADE
	) {$charset_collate};";
	dbDelta( $sql );

	$sm_admin_data_history = $wpdb->prefix . 'sm_admin_data_history';

	$sql = "CREATE TABLE IF NOT EXISTS {$sm_admin_data_history} (
	id int(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	domain_id int(20) NOT NULL,
	cron_id int(20) NOT NULL,
	status int(11) NOT NULL DEFAULT 0,
	created_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_date timestamp NULL DEFAULT CURRENT_TIMESTAMP,	
	FOREIGN KEY (domain_id) REFERENCES " . $sm_domain_list . "(id) ON DELETE CASCADE,
	FOREIGN KEY (cron_id) REFERENCES " . $sm_cron_status . "(id) ON DELETE CASCADE
	) {$charset_collate};";
	dbDelta( $sql );


	$sm_seo_data_history = $wpdb->prefix . 'sm_seo_data_history';

	$sql = "CREATE TABLE IF NOT EXISTS {$sm_seo_data_history} (
	id int(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	domain_id int(20) NOT NULL,
	cron_id int(20) NOT NULL,
	seo_status int(11) NOT NULL DEFAULT 0,
	created_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_date timestamp NULL DEFAULT CURRENT_TIMESTAMP,	
	FOREIGN KEY (domain_id) REFERENCES " . $sm_domain_list . "(id) ON DELETE CASCADE,
	FOREIGN KEY (cron_id) REFERENCES " . $sm_cron_status . "(id) ON DELETE CASCADE
	) {$charset_collate};";
	dbDelta( $sql );


	$sm_domain_scan_status = $wpdb->prefix . 'sm_domain_scan_status';

	$sql = "CREATE TABLE IF NOT EXISTS {$sm_domain_scan_status} (
	id int(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	domain_id int(20) NOT NULL,
	sitemap_status int(20) NOT NULL,
	admin_status int(20) NOT NULL,
	roborts_status int(20) NOT NULL,
	https_status int(20) NOT NULL,
	captcha_status int(20) NOT NULL,
	site_status int(20) NOT NULL,
	sitemap_scan_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	adminurl_scan_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	robots_scan_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	https_scan_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	captcha_scan_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	site_scan_status datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	created_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_date timestamp NULL DEFAULT CURRENT_TIMESTAMP,	
	FOREIGN KEY (domain_id) REFERENCES " . $sm_domain_list . "(id) ON DELETE CASCADE
	) {$charset_collate};";
	dbDelta( $sql );


	$sm_site_critical_history = $wpdb->prefix . 'sm_site_critical_history';

	$sql = "CREATE TABLE IF NOT EXISTS {$sm_site_critical_history} (
	id int(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	domain_id int(20) NOT NULL,
	cron_id int(20) NOT NULL,
	url_status_code int(20) NOT NULL DEFAULT 0,
	url_response_code int(20) NOT NULL,
	log longtext NULL,
	created_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_date timestamp NULL DEFAULT CURRENT_TIMESTAMP,	
	FOREIGN KEY (domain_id) REFERENCES " . $sm_domain_list . "(id) ON DELETE CASCADE,
	FOREIGN KEY (cron_id) REFERENCES " . $sm_cron_status . "(id) ON DELETE CASCADE
	) {$charset_collate};";
	dbDelta( $sql );


	$sm_site_https_history = $wpdb->prefix . 'sm_site_https_history';

	$sql = "CREATE TABLE IF NOT EXISTS {$sm_site_https_history} (
	id int(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	domain_id int(20) NOT NULL,
	cron_id int(20) NOT NULL,
	https_status int(20) NOT NULL DEFAULT 0,
	log longtext NULL,
	created_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_date timestamp NULL DEFAULT CURRENT_TIMESTAMP,	
	FOREIGN KEY (domain_id) REFERENCES " . $sm_domain_list . "(id) ON DELETE CASCADE,
	FOREIGN KEY (cron_id) REFERENCES " . $sm_cron_status . "(id) ON DELETE CASCADE
	) {$charset_collate};";
	dbDelta( $sql );


	$sm_site_captcha_check_history = $wpdb->prefix . 'sm_site_captcha_check_history';

	$sql = "CREATE TABLE IF NOT EXISTS {$sm_site_captcha_check_history} (
	id int(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	domain_id int(20) NOT NULL,
	cron_id int(20) NOT NULL,
	captcha_status int(20) NOT NULL DEFAULT 0,
	log longtext NULL,
	created_date timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updated_date timestamp NULL DEFAULT CURRENT_TIMESTAMP,	
	FOREIGN KEY (domain_id) REFERENCES " . $sm_domain_list . "(id) ON DELETE CASCADE,
	FOREIGN KEY (cron_id) REFERENCES " . $sm_cron_status . "(id) ON DELETE CASCADE
	) {$charset_collate};";
	dbDelta( $sql );
}

add_action( "after_switch_theme", "md_sitemonitor_set_default_tables" );

<?php
/**
 * Register Custom API Endpoints
 */
class MD_SM_API_Register_Controller extends WP_REST_Controller {

	public function sm_register_routes() {
		/**
		 *  Register Login API Endpoint
		 */
		register_rest_route(
			'md-site-monitor', '/login/',
			array(
				'methods'  => WP_REST_Server::EDITABLE,
				'callback' => 'sm_login',
			)
		);

		/**
		 *  Register Get Domain API Endpoint
		 */
		register_rest_route(
			'md-site-monitor', '/get_domains',
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => 'sm_get_domains',
				'permission_callback' => function ( WP_REST_Request $request ) {
					$auth = validate_token();
					return $auth['status'];
				},
			)
		);

		/**
		 *  Register API FOR THE ADDING A PROJECT
		 */
		register_rest_route(
			'md-site-monitor', '/add_project',
			array(
				'methods'             => WP_REST_Server::EDITABLE,
				'callback'            => 'sm_add_project',
				'args'                => array(
					'sm_project_name' => array(
						'validate_callback' => function ( $param, $request, $key ) {
							return empty( $param );
						},
					),
					'sm_domain_url'   => array(
						'validate_callback' => function ( $param, $request, $key ) {
							return empty( $param );
						},
					),
				),
				'permission_callback' => function ( WP_REST_Request $request ) {
					$auth = validate_token();
					return $auth['status'];
				},
			)
		);

		/**
		 *  Register API FOR THE ADDING A PROJECT
		 */
		register_rest_route(
			'md-site-monitor', '/delete_projects',
			array(
				'methods'             => WP_REST_Server::DELETABLE,
				'callback'            => 'sm_delete_projects',
				'permission_callback' => function ( WP_REST_Request $request ) {
					$auth = validate_token();
					return $auth['status'];
				},
			)
		);


		/**
		 *  Register API FOR THE Reports based on Project and Report Type
		 */
		register_rest_route(
			'md-site-monitor', '/project_report',
			array(
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => 'sm_project_report',
				'args'                => array(
					'project_id' => array(
						'required' => true,
						'type' => 'integer',
					),
					'type'   => array(
						'required' => true,
						'type' => 'string',
					),
				),
				'permission_callback' => function ( WP_REST_Request $request ) {
					$auth = validate_token();
					return $auth['status'];
				},
			)
		);

        /**
         *  Register API TO CHANGE PROJECT STATUS
         */
        register_rest_route(
            'md-site-monitor', '/projects_status',
            array(
                'methods'             => WP_REST_Server::EDITABLE,
                'callback'            => 'sm_projects_status',
                'permission_callback' => function ( WP_REST_Request $request ) {
                    $auth = validate_token();
                    return $auth['status'];
                },
            )
        );

        /**
         *  Register API TO UPDATE PROJECT DATA
         */
        register_rest_route(
            'md-site-monitor', '/update_project',
            array(
                'methods'             => WP_REST_Server::EDITABLE,
                'callback'            => 'sm_project_update',
                'permission_callback' => function ( WP_REST_Request $request ) {
                    $auth = validate_token();
                    return $auth['status'];
                },
            )
        );
	}

}

add_action( 'rest_api_init', function () {
	$latest_posts_controller = new MD_SM_API_Register_Controller();
	$latest_posts_controller->sm_register_routes();
} );

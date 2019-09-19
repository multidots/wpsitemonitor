<?php

use \Firebase\JWT\JWT;

/**
 * Register Custom API Endpoints
 */
class MD_SM_API_Register_Controller extends WP_REST_Controller
{

    public function sm_register_routes()
    {
        /**
         *  Register Login API Endpoint
         */
        register_rest_route(
            'md-site-monitor', '/login/',
            array(
                'methods' => 'POST',
                'callback' => 'sm_login',
            )
        );

        /**
         *  Register Get Domain API Endpoint
         */
        register_rest_route(
            'md-site-monitor', '/get_domains',
            array(
                'methods' => 'GET',
                'callback' => 'sm_get_domains',
                'permission_callback' => function (WP_REST_Request $request) {
                    $api_headers = $request->get_headers();
                    $auth = !empty($api_headers['authorization'][0]) ? $api_headers['authorization'][0] : '';
                    $logged_user_data = get_user_data_using_auth($auth);
                    $error = !empty($logged_user_data->error) ? false : true;
                    if (true === $error) {
                        return true;
                    }
                    return false;
                },
            )
        );

        register_rest_route(
            'md-site-monitor', '/add_project',
            array(
                'methods' => 'POST',
                'callback' => 'sm_add_project',
                'args' => array(
                    'sm_project_name' => array(
                        'validate_callback' => function ($param, $request, $key) {
                            return empty($param);
                        }
                    ),
                    'sm_domain_url' => array(
                        'validate_callback' => function ($param, $request, $key) {
                            return empty($param);
                        }
                    ),
                ),
                'permission_callback' => function (WP_REST_Request $request) {
                    $api_headers = $request->get_headers();
                    $auth = !empty($api_headers['authorization'][0]) ? $api_headers['authorization'][0] : '';
                    $logged_user_data = get_user_data_using_auth($auth);
                    $error = !empty($logged_user_data->error) ? false : true;
                    if (true === $error) {
                        return true;
                    }
                    return false;
                },
            )
        );
    }
}

add_action('rest_api_init', function () {
    $latest_posts_controller = new MD_SM_API_Register_Controller();
    $latest_posts_controller->sm_register_routes();
});

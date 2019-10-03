<?php

    /* Template Name: Sent Mail Template */

    global  $wpdb;

    wp_head();

    include_once ( 'script_files/class-WPMail.php' );

    $domain_tbl_name = "{$wpdb->prefix}sm_domain_list";
    $sm_cron_status_tbl_name = "{$wpdb->prefix}sm_cron_status";
    $sm_domain_scan_status = "{$wpdb->prefix}sm_domain_scan_status";
    $sm_sitemap_data_history_tbl_name = "{$wpdb->prefix}sm_sitemap_data_history";
    $sm_admin_data_history_tbl_name = "{$wpdb->prefix}sm_admin_data_history";
    $sm_seo_data_history = "{$wpdb->prefix}sm_seo_data_history";
    $sm_site_critical_history = "{$wpdb->prefix}sm_site_critical_history";
    $users = "{$wpdb->prefix}users";

    $siteMoniter = new Sitemoniter_WPMail();

    $user_id = 1;

    $domain_lists = $wpdb->get_results(
        "
                SELECT dl.*,users.* 
                FROM   $users  users 
                INNER JOIN $domain_tbl_name dl ON (dl.user_id = users.id)
                WHERE dl.user_id = $user_id
               "
    );

    $body_data = '<h1>Site List </h1>
        <table class="table" style="width:100%;font-family: arial, sans-serif ;border-collapse: collapse;width: 100% ;">
            <tr>
                <th>Domain Name</th>
                <th>Domain URL</th>
                <th>Status</th>
            </tr>';

            foreach ( $domain_lists as $domain_list ) {

                $domain_id = $domain_list->id;
                $project_name = $domain_list->project_name;
                $project_url = $domain_list->domain_url;

                $encrypted = $siteMoniter->my_simple_crypt( $domain_id, 'e' );
                $body_data .= '<tr><td>';
                $body_data .= $project_name;
                $body_data .= '</td><td>';
                $body_data .= $project_url;
                $body_data .= '</td><td>';
                $body_data .= '<a href='.get_site_url()."/project-list-data/?data=".$encrypted.' >Click Here</a> </td>';
                $body_data .= '</tr>';
            }

            $body_data .='</table>';
     echo "<pre>";
     print_r ($body_data);die();
    $siteMoniter->mail_send( $to='meet.makadiya@multidots.com', $subject='Cron Report', $body=$body_data );

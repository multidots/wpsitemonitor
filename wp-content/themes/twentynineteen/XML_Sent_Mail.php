<?php

    /* Template Name: Sent Mail Template */
    wp_head();

    include_once ( 'script_files/class-WPMail.php' );

    $siteMoniter = new Sitemoniter_WPMail();

    global  $wpdb;

    $domain_lists = $wpdb->get_results("SELECT dl.* FROM   wp_sm_domain_list dl LIMIT 0,2" );


    $body_data = '<h1>Site List </h1>
        <table class="table" style="width:100%;font-family: arial, sans-serif ;border-collapse: collapse;width: 100% ;">
            <tr>
                <th>Project Name</th>
                <th>Project URL</th>
                <th>URL</th>
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
    $siteMoniter->mail_send( $to='meet.makadiya@multidots.com', $subject='Cron Report', $body=$body_data );

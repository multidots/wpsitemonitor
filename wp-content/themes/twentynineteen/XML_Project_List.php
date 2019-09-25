<?php
    /* Template Name: Project List data Template */

    wp_head();

    $data = $_GET['data'];

    if( ! empty( $data ) ) {

        global  $wpdb;

        $url_list_result = array();

        $domain_tbl_name = "{$wpdb->prefix}sm_domain_list";
        $sm_cron_status_tbl_name = "{$wpdb->prefix}sm_cron_status";
        $sm_domain_scan_status = "{$wpdb->prefix}sm_domain_scan_status";
        $sm_sitemap_data_history_tbl_name = "{$wpdb->prefix}sm_sitemap_data_history";
        $sm_admin_data_history_tbl_name = "{$wpdb->prefix}sm_admin_data_history";
        $sm_seo_data_history = "{$wpdb->prefix}sm_seo_data_history";

        $status_value = '0';

        $domain_id = my_simple_crypt( $data, 'd' );

        //sitemap_url
        $domian_lists_sitemap_url = $wpdb->get_results(
            "
                SELECT cs.id as cron_id,cs.*,dl.*,dh.*
                FROM  $domain_tbl_name dl
                LEFT JOIN 
                        (
                            SELECT * 
                            FROM   wp_sm_cron_status cs
                            WHERE  id 
                            IN (
                                SELECT Max(id) 
                                FROM   wp_sm_cron_status cs
                                WHERE cs.cron_name = 'sitemap_xml'
                                GROUP  BY domain_id
                                )
                        )cs         
                ON dl.id = cs.domain_id
                LEFT JOIN 
                        (
                            SELECT * 
                            FROM   wp_sm_sitemap_data_history dh
                            WHERE  id 
                            IN (
                                SELECT Max(id) 
                                FROM   wp_sm_sitemap_data_history dh
                                GROUP  BY domain_id
                                )
                        )dh 
                ON dl.id = dh.domain_id
                WHERE dl.id = $domain_id
            "
        );

        //admin_url
        $domian_lists_admin_url = $wpdb->get_results(
            "
                SELECT cs.id as cron_id,cs.*,dl.*
                FROM   wp_sm_domain_list dl
                LEFT JOIN 
                        (
                            SELECT * 
                            FROM   wp_sm_cron_status cs
                            WHERE  id 
                            IN (
                                SELECT Max(id) 
                                FROM   wp_sm_cron_status cs
                                WHERE cs.cron_name = 'admin_url'
                                GROUP  BY domain_id
                                )
                        )cs         
                ON dl.id = cs.domain_id
                WHERE dl.id = $domain_id
            "
        );

        //robots_url
        $domian_lists_robots_url = $wpdb->get_results(
            "
                SELECT cs.id as cron_id,cs.*,dl.*
                FROM   wp_sm_domain_list dl
                LEFT JOIN 
                        (
                            SELECT * 
                            FROM   wp_sm_cron_status cs
                            WHERE  id 
                            IN (
                                SELECT Max(id) 
                                FROM   wp_sm_cron_status cs
                                WHERE cs.cron_name = 'robots_url'
                                GROUP  BY domain_id
                                )
                        )cs         
                ON dl.id = cs.domain_id
                WHERE dl.id = $domain_id
            "
        );

        if( !empty( $domian_lists_sitemap_url ) || !empty( $domian_lists_admin_url ) || !empty( $domian_lists_robots_url ) ){
            ?>
            <table style="width:100%" class="table" id="example">
                <?php foreach ( $domian_lists_sitemap_url as $domian_list ) {?>
                    <input type="hidden" id="project_name" value="<?php echo $domian_list->project_name; ?>"  />
                    <tr>
                        <th>Project Name:</th>
                        <td><?php echo $domian_list->project_name; ?></td>
                    </tr>
                    <tr>
                        <th>Domain URL</th>
                        <td><?php echo $domian_list->domain_url; ?></td>
                    </tr>
                    <tr>
                        <th>Sitemap Difference</th>
                        <td>
                            <?php
                            $sitemap_diff = json_decode( $domian_list->sitemap_diff_data ) ;
                            if ( ! empty( $sitemap_diff ) ) {
                                echo '<ol>';
                                foreach ( $sitemap_diff as $sitemap_diffs ){
                                    echo '<li>'.$sitemap_diffs.'</li>';
                                }
                                echo '</ol>';
                            } else {
                                echo 'No change in sitemap';
                            }

                            ?>
                        </td>
                    </tr>
                <?php } ?>
                <?php foreach ( $domian_lists_admin_url as $domian_list ) {?>
                    <tr>
                        <th>Admin Status</th>
                        <td><?php echo $domian_list->status == '0'?'Need To Change URL':'URL Already Change'; ?></td>
                    </tr>
                <?php } ?>
                <?php foreach ( $domian_lists_robots_url as $domian_list ) {?>
                    <tr>
                        <th>Robots Status</th>
                        <td><?php echo $domian_list->status == '0'?'File Exists':'File Not Exists'; ?></td>
                    </tr>
                <?php } ?>
            </table>
            <input type="button" id="btnExport" value="Export"/>
        <?php }
    }

    wp_footer();

    function my_simple_crypt( $string, $action = 'e' ) {
        // you may change these values to your own
        $secret_key = 'ZnhnTVQ5b2xid3YwV3h4TjlYa0xUQT09';
        $secret_iv = 'OUphNFZrK3Q1TjZOK1JLYzJ1K0FrUT09';

        $output = false;
        $encrypt_method = "AES-256-CBC";
        $key = hash( 'sha256', $secret_key );
        $iv = substr( hash( 'sha256', $secret_iv ), 0, 16 );

        if( $action == 'e' ) {
            $output = base64_encode( openssl_encrypt( $string, $encrypt_method, $key, 0, $iv ) );
        }
        else if( $action == 'd' ){
            $output = openssl_decrypt( base64_decode( $string ), $encrypt_method, $key, 0, $iv );
        }

        return $output;
    }

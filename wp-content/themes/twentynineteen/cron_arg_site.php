
<style>
	table {
		font-family: arial, sans-serif;
		border-collapse: collapse;
		width: 100%;
	}

	td, th {
		border: 1px solid #dddddd;
		text-align: left;
		padding: 8px;
	}

	tr:nth-child(even) {
		background-color: #dddddd;
	}
</style>

<?php

/* Template Name: Cron Argument Site Template */

	global  $wpdb;

	$cron_days = 7;

	$url_list_result = array();

	$domain_tbl_name = "{$wpdb->prefix}sm_domain_list";
	$sm_cron_status_tbl_name = "{$wpdb->prefix}sm_cron_status";
	$sm_domain_scan_status = "{$wpdb->prefix}sm_domain_scan_status";
	$sm_sitemap_data_history_tbl_name = "{$wpdb->prefix}sm_sitemap_data_history";
	$sm_admin_data_history_tbl_name = "{$wpdb->prefix}sm_admin_data_history";
	$sm_seo_data_history = "{$wpdb->prefix}sm_seo_data_history";

	$status_value = '0';

	$domian_lists = $wpdb->get_results(
	"
			SELECT dl.*, dc.* ,dh.*,adh.status,adh.*,sdh.*
			FROM   wp_sm_domain_list dl
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
			LEFT JOIN 
					(
						SELECT * 
				        FROM   wp_sm_admin_data_history adh
				        WHERE  id 
				        IN (
				            SELECT Max(id) 
				            FROM   wp_sm_admin_data_history adh
				            GROUP  BY domain_id
				            )
			        )adh 
			ON dl.id = adh.domain_id
			LEFT JOIN 
					(
						SELECT * 
				        FROM   wp_sm_seo_data_history sdh
				        WHERE  id 
				        IN (
				            SELECT Max(id) 
				            FROM   wp_sm_seo_data_history sdh
				            GROUP  BY domain_id
				            )
			        )sdh 
			ON dl.id = sdh.domain_id
			LEFT JOIN wp_sm_domain_scan_status dc ON dl.id = dc.domain_id
		"
	);
	?>

<table>
	<tr>
		<th>Project Name</th>
		<th>Domain URL</th>
		<th>Sitemap Difference</th>
		<th>Admin Status</th>
		<th>Robots Status</th>
	</tr>
	<?php
            foreach ( $domian_lists as $domian_list ) {?>
		<tr>
			<td><?php echo $domian_list->project_name; ?></td>
			<td><?php echo $domian_list->domain_url; ?></td>
			<td><?php print_r( json_decode( $domian_list->sitemap_diff_data ) );  ?></td>
			<td><?php echo $domian_list->status; ?></td>
			<td><?php echo $domian_list->seo_status; ?></td>
		</tr>
		<?php }
	?>
</table>
<?php
	die();
    include_once ( 'class-WPMail.php' );
	$mail_fun = new Sitemoniter_WPMail();

    $mail_fun->mail_send();
    die();
	$type = $_GET['type'];
	if( isset( $_GET['no'] ) ){
		$no_of_records = $_GET['no'];
	}



	if( isset( $no_of_records ) ){

		if( $no_of_records > 0 ) {



            if(! empty ( $domian_lists ) ) {

                foreach ( $domian_lists as $domian_list ) {

                    //Update data array
                    $domain_id = $domian_list->id;

                    //Insert Query
                    $last_insert_cron_id = $wpdb->query( $wpdb->prepare( "INSERT INTO %1s (`domain_id`, `cron_name`, `status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_cron_status_tbl_name, $domain_id, 'robots_url', '0', current_time( 'mysql', 1 ) ) );       // db call ok; OK
                    $last_insert_cron_id = $wpdb->insert_id;

                    if( isset( $last_insert_cron_id ) ) {

                        $site_url = $domian_list->domain_url;

                        $site_login_url = $site_url."robots.txt";

                        $response = wp_remote_get( $site_login_url );

                        $response_code = wp_remote_retrieve_response_code( $response );

                        if( ! empty ( $response_code ) ) {

                            if( 200 === $response_code ) {

                                //Insert Query
                                $admin_data = $wpdb->query( $wpdb->prepare ("INSERT INTO %1s (`domain_id`, `cron_id`, `status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_seo_data_history, $domain_id, $last_insert_cron_id, '0', current_time( 'mysql', 1 ) ) );       // db call ok; OK
                                $admin_data_id = $wpdb->insert_id;
                                if ( isset( $admin_data_id ) ) {
                                    $cron_tbl_update = $wpdb->query( $wpdb->prepare ("UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, '1', current_time( 'mysql', 1 ), $last_insert_cron_id ) );       // db call ok; OK
                                    $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `robots_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );       // db call ok; OK
                                }

                            } else {

                                //Insert Query
                                $admin_data = $wpdb->query( $wpdb->prepare ("INSERT INTO %1s (`domain_id`, `cron_id`, `status`, `updated_date`) VALUES (%d, %s, %s, %s)", $sm_seo_data_history, $domain_id, $last_insert_cron_id, '1', current_time( 'mysql', 1 ) ) );       // db call ok; OK
                                $admin_data_id = $wpdb->insert_id;
                                if ( isset( $admin_data_id ) ){
                                    $cron_tbl_update = $wpdb->query( $wpdb->prepare ("UPDATE %1s SET `domain_id` = %d, `status` = %s, `updated_date` = %s WHERE id = %d", $sm_cron_status_tbl_name, $domain_id, '1', current_time( 'mysql', 1 ), $last_insert_cron_id ) );       // db call ok; OK
                                    $domain_scan_status_update = $wpdb->query( $wpdb->prepare( "UPDATE %1s SET `robots_scan_date` = %s WHERE domain_id = %d", $sm_domain_scan_status, current_time( 'mysql', 1 ), $domain_id ) );       // db call ok; OK
                                }
                            }
                        }
                    }
                }
            }
		}
	} else {
		print_r(  " No of Scan URL is missing " );
	}

	die();
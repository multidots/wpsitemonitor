<?php


class Sitemoniter_WPMail
{
    public function __construct( $args = array() ) {
        /*$defaults = array(
            'url'    => '',
            'plugin' => '',
            'nonce'  => '',
            'title'  => __( 'Update Plugin' ),
        );Warning: include_once(/srv/www/WPSiteMonitor/public_html/script_files/class-WPMail.php): failed to open stream: No such file or directory in /srv/www/WPSiteMonitor/public_html/wp-content/themes/twentynineteen/XML_Sent_Mail.php on line 4

        $args   = wp_parse_args( $args, $defaults );

        parent::__construct( $args );*/
    }

    public function mail_send ( $to , $subject, $body ) {
        $headers = array('Content-Type: text/html; charset=UTF-8');
        wp_mail( $to, $subject, $body, $headers );
    }

    public function my_simple_crypt( $string, $action = 'e' ) {
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

    public function has_ssl( $domain ) {
        $ssl_check = @fsockopen( 'ssl://' . $domain, 443, $errno, $errstr, 30 );
        $res = !! $ssl_check;
        if ( $ssl_check ) { fclose( $ssl_check ); }
        return $res;
    }

    function url_get_content_html( $domain_contact_url ){
        $content = file_get_contents( $domain_contact_url );
        $html_format_content = htmlentities( $content );
        if ( strpos ( $html_format_content, 'g-recaptcha-response' ) !== false ) {
            return 1;
        } else {
            return 0;
        }
    }
}

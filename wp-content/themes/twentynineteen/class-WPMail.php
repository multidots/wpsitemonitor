<?php


class Sitemoniter_WPMail
{
    public function __construct( $args = array() ) {
        /*$defaults = array(
            'url'    => '',
            'plugin' => '',
            'nonce'  => '',
            'title'  => __( 'Update Plugin' ),
        );
        $args   = wp_parse_args( $args, $defaults );

        parent::__construct( $args );*/
    }

    public function mail_send() {
        $to = 'meet.makadiya@multidots.com';
        $subject = 'The subject';
        $body =  'The email body content';
        $headers = array('Content-Type: text/html; charset=UTF-8');
        wp_mail( $to, $subject, $body, $headers );
    }
}
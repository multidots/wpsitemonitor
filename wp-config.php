<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'WdbnSivA8+xOqCLXTrwRKbqzJx8xa6QP5dUD1L8RzkKx8zzcHm9z3emWxkQ82+3TF24ozyv0/Fttk5ybcV/5UA==');
define('SECURE_AUTH_KEY',  'ov/EQiFOayhuRlbvvN8W46iZS1tL3JHke1iutFofJkEK0rRdpf69FPX8JT7l5VfrYyo9mlWWtAGwDzFxpDUtZQ==');
define('LOGGED_IN_KEY',    'QN9JIBAD/MvX4zuBqCxRbcTtZr1waa6NSb3wws8tcyVpZiMszhca8q22gFS7ZOXSHT9QTmHYUdneqRSGFRjiiA==');
define('NONCE_KEY',        'htIKLNjuNSnZRqtspnApVRHkMQq3Kh+iI/5gjTgPAHcGmZDnDRBnRh7d6S7zqoCUZnqWaY45XxzHs/NSyO1HJQ==');
define('AUTH_SALT',        'vfZu9akgNKF/WaazEDu4nOpi6o2n98s6DLHdmJKgYGtA3tIr4wmnHxywDXB++f4czNs94vFIpUl/x6qwdkaIeQ==');
define('SECURE_AUTH_SALT', 'Bda9JjRvjiDvZCl8W/Vlypcwi6SgN7fdW1XTkhWT772oyYMOV5X8F0EhYNmXIC8VMn4XVqwWj6Zm3Rc9wDZwVg==');
define('LOGGED_IN_SALT',   'UR/oV6VkfMdERhjNR49faE/qw8j5SFUR+72vCZ47KFH21dJdS1ndI6au4VArQ0B50jlQpBJdcMPIDm/V4uyTlg==');
define('NONCE_SALT',       '/8qz++y0QWurZw6mGLiIFgAyhQx4oa6cNy9OajeKSOXqBrVi7Y0B6RwKCsEHY6Dr9p/yRo8tsuUIRKvtax355A==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) )
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

<?php
/**
 * Prime Patient Main Theme Functions
 * 
 * @package prime-patient-main
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

// Theme Constants
define('THEME_VERSION', '1.0.0');
define('THEME_URI', get_template_directory_uri());
define('THEME_PATH', get_template_directory());

/**
 * Theme Setup
 */
function prime_patient_main_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script'
    ));
    
    // Load text domain
    load_theme_textdomain('prime-patient-main', THEME_PATH . '/languages');
    
    // Remove admin bar margin
    add_theme_support('admin-bar', array('callback' => '__return_false'));
}
add_action('after_setup_theme', 'prime_patient_main_setup');

/**
 * Enqueue Scripts and Styles
 */
function prime_patient_main_enqueue_assets() {
    // Google Fonts - Cinzel and Montserrat
    wp_enqueue_style(
        'prime-patient-main-fonts',
        'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap',
        array(),
        null
    );
    
    // Main stylesheet (compiled Tailwind CSS)
    wp_enqueue_style(
        'prime-patient-main-style',
        THEME_URI . '/assets/css/style.css',
        array(),
        THEME_VERSION
    );
    
    // Main JavaScript
    wp_enqueue_script(
        'prime-patient-main-script',
        THEME_URI . '/assets/js/main.js',
        array(),
        THEME_VERSION,
        true
    );
}
add_action('wp_enqueue_scripts', 'prime_patient_main_enqueue_assets');

/**
 * Helper function to get asset path
 */
function theme_asset($path) {
    return THEME_URI . '/assets/images/' . ltrim($path, '/');
}

/**
 * Include icon functions
 */
require_once THEME_PATH . '/inc/icons.php';

/**
 * Theme Activation - Create Pages
 */
function prime_patient_main_activation() {
    // This is a single-page site, so we only need the homepage
    // The front-page.php will handle everything
    
    // Set homepage to display front page
    update_option('show_on_front', 'page');
    
    // Check if we already have a front page set
    $front_page_id = get_option('page_on_front');
    
    if (!$front_page_id || get_post_status($front_page_id) !== 'publish') {
        // Create homepage
        $homepage = array(
            'post_title'    => 'Turnkey Consult',
            'post_content'  => '',
            'post_status'   => 'publish',
            'post_type'     => 'page',
            'post_name'     => 'home'
        );
        
        $page_id = wp_insert_post($homepage);
        
        if ($page_id && !is_wp_error($page_id)) {
            update_option('page_on_front', $page_id);
        }
    }
    
    // Flush rewrite rules
    flush_rewrite_rules();
}
add_action('after_switch_theme', 'prime_patient_main_activation');

/**
 * Remove default WordPress styles and scripts we don't need
 */
function prime_patient_main_cleanup() {
    // Remove emoji scripts
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('wp_print_styles', 'print_emoji_styles');
    
    // Remove WordPress generator meta tag
    remove_action('wp_head', 'wp_generator');
    
    // Remove RSD link
    remove_action('wp_head', 'rsd_link');
    
    // Remove wlwmanifest link
    remove_action('wp_head', 'wlwmanifest_link');
}
add_action('init', 'prime_patient_main_cleanup');

/**
 * Custom body classes
 */
function prime_patient_main_body_classes($classes) {
    // Add custom class for full-width layout
    $classes[] = 'prime-patient-main-theme';
    
    // Add page-specific class
    if (is_front_page()) {
        $classes[] = 'page-home';
    }
    
    return $classes;
}
add_filter('body_class', 'prime_patient_main_body_classes');

/**
 * Disable comments completely (not needed for landing page)
 */
function prime_patient_main_disable_comments() {
    // Close comments on the front-end
    add_filter('comments_open', '__return_false', 20, 2);
    add_filter('pings_open', '__return_false', 20, 2);
    
    // Hide existing comments
    add_filter('comments_array', '__return_empty_array', 10, 2);
}
add_action('admin_init', 'prime_patient_main_disable_comments');

/**
 * Remove comment support from posts and pages
 */
function prime_patient_main_remove_comment_support() {
    remove_post_type_support('post', 'comments');
    remove_post_type_support('page', 'comments');
}
add_action('init', 'prime_patient_main_remove_comment_support');

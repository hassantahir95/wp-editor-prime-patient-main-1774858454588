<?php
/**
 * Front Page Template
 * 
 * @package prime-patient-main
 */

get_header(); ?>

<?php
// Include all landing page sections in order
get_template_part('template-parts/sections/hero');
get_template_part('template-parts/sections/pain');
get_template_part('template-parts/sections/proof');
get_template_part('template-parts/sections/system');
get_template_part('template-parts/sections/process');
get_template_part('template-parts/sections/benefits');
get_template_part('template-parts/sections/results');
get_template_part('template-parts/sections/why-choose');
get_template_part('template-parts/sections/qualification');
get_template_part('template-parts/sections/final-cta');
?>

<?php get_footer(); ?>

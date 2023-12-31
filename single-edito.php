<?php get_header(); ?>

<!-- Breadcrumbs -->
<section id="breadcrumbs">
    <div class="container">
        <?php if (function_exists('rank_math_the_breadcrumbs')) rank_math_the_breadcrumbs(); ?>
    </div>
</section>

<!-- Content -->
<section>
    <div class="container container-sm formatted">
        <h1><?php echo get_the_title(); ?></h1>
        <?php the_content(); ?>
        <div class="signature"><?php echo __("Le bureau RHEVER", "rhever"); ?></div>
    </div>
</section>

<?php get_footer(); ?>
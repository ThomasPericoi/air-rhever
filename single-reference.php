<?php get_header(); ?>

<!-- Breadcrumbs -->
<section id="breadcrumbs">
    <div class="container">
        <?php if (function_exists('rank_math_the_breadcrumbs')) rank_math_the_breadcrumbs(); ?>
    </div>
</section>

<div class="container container-sm formatted">
    <h1><?php echo get_the_title(); ?></h1>
    <?php if (shortcode_exists('pdfjs-viewer')) : ?>
        <?php echo do_shortcode('[pdfjs-viewer url=' . get_field('reference_file')["url"] . ' viewer_width=100% viewer_height=1000px download=true print=true]'); ?>
        <div class="documents-list documents">
            <a href="<?php echo get_field('reference_file')["url"]; ?>" target="_blank"><span class="extension"><?php echo pathinfo(get_field('reference_file')["url"], PATHINFO_EXTENSION); ?></span><?php echo get_field('reference_file')["title"]; ?></a>
        </div>
    <?php endif; ?>
</div>

<?php get_footer(); ?>
<?php get_header(); ?>

<!-- Hero -->
<section id="events-hero" class="hero">
    <div class="container container-sm">
        <h1 class="title"><?php echo __('Calendrier des événements RHEVER'); ?></h1>
    </div>
</section>

<!-- Loop -->
<section id="events-index">
    <div class="container">
        <?php if (have_posts()) : ?>
            <div class="rainbow-grid grid-3 events events-future">
                <?php
                while (have_posts()) : the_post(); ?>
                    <?php $timeline = (get_field('event_date', false, false) < date('Ymd')) ? "past" : "future"; ?>
                    <a href="<?php the_permalink(); ?>" class="grid-element event" data-timeline="<?php echo $timeline; ?>">
                        <div class="content">
                            <h3><?php echo get_the_title(); ?></h3>
                            <?php
                            $categories = get_the_terms(get_the_ID(), 'event_category');
                            $category_name = $categories[0]->name;
                            ?>
                            <?php if ($categories) : ?>
                                <span class="category"><?php echo $category_name; ?></span>
                            <?php endif; ?>
                            <p><?php echo get_the_excerpt(); ?></p>
                        </div>
                        <div class="date"><span><?php echo __("Le ", "rhever") . get_field('event_date'); ?></span></div>
                    </a>
                <?php endwhile; ?>
            </div>
            <?php the_posts_pagination(); ?>
        <?php else : echo __('Il n\'y a aucun événement de publié pour le moment.', 'rhever');
        endif; ?>
    </div>
</section>

<!-- CTA -->
<?php
$title = get_field('events_cta_title', 'option');
$text = get_field('events_cta_text', 'option');
$image = get_field('events_cta_image', 'option');
?>
<section id="events-cta" class="cta-large cta-reverse cta-secondary js-toBeTriggered">
    <div class="container container-lg">
        <div class="content">
            <?php if ($title) : ?>
                <h2 class="highlighted"><?php echo $title; ?></h2>
            <?php endif; ?>
            <?php if ($text) : ?>
                <?php echo $text; ?>
            <?php endif; ?>
            <a href="#" class="btn btn-icon-corner-down-right"><?php echo __("Consulter les comptes-rendus", "rhever"); ?></a>
        </div>
        <figure>
            <?php if (!empty($image)) : ?>
                <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
            <?php endif; ?>
        </figure>
    </div>
</section>

<?php get_footer(); ?>
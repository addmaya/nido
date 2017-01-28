<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/html-header', 'parts/shared/header' ) ); ?>
<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
<span class="c-pg-title">team</span>
<div class="c-tint s--single"></div>
<div class="u-yingyang">
	<section class="u-ying">
		<div class="u-wrap">
			<header class="u-ying__header">
				<h1><?php the_title(); ?></h1>
				<span class="o-subtitle"><?php the_field('title'); ?></span>
				<div class="o-social">
					<a target="_blank" href="<?php the_field('twitter'); ?>" class="o-social__tw"><span></span></a>
					<a target="_blank" href="<?php the_field('linkedin') ?>" class="o-social__ldn"><span></span></a>
				</div>
			</header>
			<section class="u-ying__content">
				<p><?php the_field('bio'); ?></p>
			</section>
		</div>
	</section>
	<section class="u-yang s--reset">
		<ul class="u-yang__list">
			<li class="u-yang__list__item">
				<a data-target="profile" class="o-member" href="<?php the_permalink(); ?>">
					<figure class="o-member__photo" style="background-image:url('<?php the_field('photo')?>')"></figure>
				</a>
			</li>
		</ul>
		<div class="o-pager">
			<?php
				$next_post = get_next_post();
				if (!empty( $next_post )): 
			?>
			<a data-target="profile" href="<?php echo get_permalink( $next_post->ID ); ?>" class="o-pager--prev">
				<span class="o-circle"></span>
				<div class="o-arrow">
					<span class="o-arrow--stem"></span>
					<div class="o-arrow--head"><span></span><span></span></div>
				</div>
			</a>
			<?php endif; ?>
			<?php
				$prev_post = get_previous_post();
				if (!empty( $prev_post )): 
			?>
			<a data-target="profile" href="<?php echo get_permalink( $prev_post->ID ); ?>" class="o-pager--next last">
				<span class="o-circle"></span>
				<div class="o-arrow">
					<span class="o-arrow--stem"></span>
					<div class="o-arrow--head"><span></span><span></span></div>
				</div>
			</a>
			<?php endif; ?>
		</div>
	</section>
</div>
<div class="u-yingyang">
<?php Starkers_Utilities::get_template_parts(array('parts/shared/next-previous'));?>
</div>
<?php endwhile; ?>
<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/footer','parts/shared/html-footer') ); ?>
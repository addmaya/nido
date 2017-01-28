<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/html-header', 'parts/shared/header' ) ); ?>
<span class="c-pg-title">careers</span>
<div class="c-tint"></div>
<div class="u-yingyang">
	<section class="u-ying">
		<div class="u-wrap">
			<ul class="o-menu inline">
				<li class="o-menu__item"><a href="<?php echo home_url(); ?>/careers">Careers</a></li>
			</ul>
			<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
			<header class="u-ying__header">
				<h1><?php the_field('fancy_title'); ?></h1>
			</header>
			<section class="u-ying__content">
				<p><?php the_content(); ?></p>
			</section>
			<span class="o-line"></span>
			<?php endwhile; ?>
		</div>
	</section>
	<section class="u-yang">
		<section class="o-articles s--tint">
			<ul class="o-articles__list u-2-col">
				<?php 
				$jobs = new WP_Query(array('post_type'=>'career', 'posts_per_page'=>-1)); ?>
				<?php if ( $jobs->have_posts() ) : ?>
					<?php while ( $jobs->have_posts() ) : $jobs->the_post(); ?>
						<li class="o-articles__list__item">
							<article class="o-article">
								<section class="u-wrap">
									<ul class="o-meta">
										<li class="o-meta__item">
											<time>Posted: <?php time_ago(); ?></time>
										</li>
									</ul>
									<h2><?php the_title(); ?></h2>
									<a href="<?php the_permalink(); ?>" class="o-button">
										<div class="o-button__dash"></div>
										<span class="o-button__title">Apply</span>
										<div class="o-arrow">
											<span class="o-arrow--stem"></span>
											<div class="o-arrow--head"><span></span><span></span></div>
										</div>
									</a>
								</section>
							</article>
						</li>
					<?php endwhile; ?>
					<?php wp_reset_postdata(); ?>
				<?php endif; ?>
			</ul>
		</section>
	</section>
</div>
<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/footer','parts/shared/html-footer') ); ?>
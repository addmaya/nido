<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/html-header', 'parts/shared/header' ) ); ?>
<span class="c-pg-title">careers</span>
<div class="c-tint"></div>
<div class="u-yingyang">
	<section class="u-ying">
		<div class="u-wrap">
			<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
			<header class="u-ying__header">
				<h1><?php the_field('fancy_title'); ?></h1>
			</header>
			<section class="u-ying__content">
				<p><?php the_content(); ?></p>
				<a href="mailto:join@asigmacapital.com" class="o-button">
					<div class="o-button__dash"></div>
					<span class="o-button__title">join@asigmacapital.com</span>
					<div class="o-arrow">
						<span class="o-arrow--stem"></span>
						<div class="o-arrow--head"><span></span><span></span></div>
					</div>
				</a>
			</section>
			<span class="o-line"></span>
			<?php endwhile; ?>
		</div>
	</section>
	<section class="u-yang">
		<?php $jobs = new WP_Query(array('post_type'=>'career', 'posts_per_page'=>-1)); ?>
		<?php if ( $jobs->have_posts() ) {?>
			<section class="o-articles s--tint">
				<ul class="o-articles__list u-2-col">
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
				</ul>
			</section>
		<?php } {?>
			<figure class="c-team__image"></figure>
		<?php } ?>
	</section>
</div>
<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/footer','parts/shared/html-footer') ); ?>
<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/html-header', 'parts/shared/header' ) ); ?>
<span class="c-pg-title">insights</span>
<div class="c-tint"></div>
<div class="o-page-thumb">
	<div class="u-table">
		<div class="u-cell">
			<?php Starkers_Utilities::get_template_parts(array('parts/shared/menu-insights'));?>
		</div>
	</div>
</div>
<section class="o-content">
	<header class="o-content__header">
		<section class="u-wrap">
			<div class="o-index">
				<span class="o-index__number"><?php echo $wp_the_query->post_count; ?></span>
				<span class="o-line"></span>
			</div>
			<h1><?php post_type_archive_title(); ?></h1>
		</section>
	</header>
	<section class="c-brief">
		<div class="u-wrap">
			<p>
			<?php the_field('asg_insights_brief', 534); ?>
			</p>
		</div>
	</section>
	<section class="o-articles">
		<ul class="o-articles__list">
			<?php while (have_posts()):the_post();?>
			<li class="o-articles__list__item">
				<article class="o-article">
					<a href="<?php the_permalink();?>">
						<figure class="js-lazy" data-thumb="<?php get_post_thumb(); ?>" ></figure>
					</a>
					<section class="u-wrap">
						<ul class="o-meta">
							<li class="o-meta__item">
								<time><?php time_ago(); ?></time>
							</li>
						</ul>
						<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
						<a href="<?php the_permalink(); ?>" class="o-button">
							<div class="o-button__dash"></div>
							<span class="o-button__title">Read</span>
							<div class="o-arrow">
								<span class="o-arrow--stem"></span>
								<div class="o-arrow--head"><span></span><span></span></div>
							</div>
						</a>
					</section>
				</article>
			</li>
			<?php endwhile; ?>
		</ul>
		
		<?php if((wp_count_posts('insights')->publish) > 6): ?>
		<div class="u-align-center u-mb">
			<a href="#" class="o-button s--pull js-fetch-posts" data-post="Insights" data-type="insights">
				<span></span>
				<span></span>
				<span></span>
			</a>
			<span class="o-status">More Insights</span>
		</div>
		<?php endif; ?>
	</section>
</section>
<div class="c-next s--footer">
	<div class="u-wrap">
		<span class="o-subtitle u-mb"><a data-target="project" href="<?php echo home_url(); ?>/project/mutundwe-hill-estate/">Next</a></span>
		<h2><a data-target="project" href="<?php echo home_url(); ?>/project/mutundwe-hill-estate/">Real Estate</a></h2>
		<div class="o-pager">
			<a data-target="project" href="<?php echo home_url(); ?>/project/mutundwe-hill-estate/" class="o-pager--next last">
				<span class="o-circle"></span>
				<div class="o-arrow">
					<span class="o-arrow--stem"></span>
					<div class="o-arrow--head"><span></span><span></span></div>
				</div>
			</a>
		</div>
	</div>
</div>
<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/footer','parts/shared/html-footer') ); ?>
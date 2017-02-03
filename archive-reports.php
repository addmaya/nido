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
			<div class="o-content__header__brief">
				<p><?php the_field('reports_intro', 534); ?></p>
			</div>
		</section>
	</header>
	<section class="o-articles s--tint">
		<ul class="o-articles__list">
			<?php while ( have_posts() ) : the_post(); ?>
			<?php echo get_file(); ?>
			<?php endwhile; ?>
		</ul>
	</section>
	<?php if((wp_count_posts('report')->publish) > 6): ?>
	<div class="u-align-center u-mb">
		<a href="#" class="o-button s--pull js-fetch-posts" data-type="report">
			<span></span>
			<span></span>
			<span></span>
		</a>
		<span class="o-status">More Posts</span>
	</div>
	<?php endif; ?>
</section>
<div class="c-next s--footer">
	<div class="u-wrap">
		<span class="o-subtitle u-mb">Next</span>
		<h2><a data-target="insights"href="<?php echo home_url(); ?>/press">Press</a></h2>
		<div class="o-pager">
			<a data-target="insights" href="<?php echo home_url(); ?>/press" class="o-pager--next last">
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
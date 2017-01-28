<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/html-header', 'parts/shared/header' ) ); ?>
<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
<span class="c-pg-title">careers</span>
<div class="c-tint s--single"></div>
<div class="o-page-thumb">
	<div class="u-table">
		<div class="u-cell">
			<ul class="o-menu">
				<li class="o-menu__item"><a href="<?php echo home_url(); ?>/careers"><span>All Careers <i><?php echo wp_count_posts('career')->publish; ?></i></span></a></li>
			</ul>
		</div>
	</div>
</div>
<section class="o-content">
	<header class="o-content__header">
		<section class="u-wrap">
			<ul class="o-meta">
				<li class="o-meta__item">
					Posted: <time datetime="<?php the_time( 'Y-m-d' ); ?>" pubdate><?php the_date(); ?></time>
				</li>
			</ul>
			<h1><?php the_title(); ?></h1>
		</section>
	</header>
	<section class="c-story">
		<p><?php the_content(); ?></p>
		<div class="o-list">
			<h4>Key Responsibilities</h4>
			<ul>
				<?php
					$job_r = get_field('responsibilities');
					foreach ($job_r as $job) {
						echo '<li>'.$job['responsibility'].'</li>';
					}
				?>
			</ul>
		</div>
		<div class="o-list">
			<h4>Qualifications</h4>
			<ul>
				<?php
					$job_q = get_field('qualifications');
					foreach ($job_q as $job) {
						echo '<li>'.$job['qualification'].'</li>';
					}
				?>
			</ul>
		</div>
		<p>Sounds like you? Email us at <a href="mailto:join@asigmacapital.com">join@asigmacapital.com</a></p>
	</section>
	<footer class="o-content__footer">
		<?php Starkers_Utilities::get_template_parts(array('parts/shared/next-previous'));?>
	</footer>
</section>
<?php endwhile; ?>
<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/footer','parts/shared/html-footer' ) ); ?>
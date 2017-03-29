<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/html-header', 'parts/shared/header' ) ); ?>
<div class="c-tint"></div>
<div class="u-yingyang">
	<section class="u-ying">
		<div class="u-wrap">
			<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
			<header class="u-ying__header">
				<h1><?php the_field('fancy_title'); ?></h1>
			</header>
			<section class="u-ying__content">
				<?php the_content(); ?>
				<a data-target="profile" href="<?php echo home_url(); ?>/careers" class="o-button">
					<div class="o-button__dash"></div>
					<span class="o-button__title">Careers</span>
					<div class="o-arrow">
						<span class="o-arrow--stem"></span>
						<div class="o-arrow--head"><span></span><span></span></div>
					</div>
				</a>
			</section>
			<?php endwhile; ?>
		</div>
	</section>
	<section class="u-yang">
		<?php $board_mems = new WP_Query(array('post_type'=>'board', 'posts_per_page'=>-1, 'orderby' => 'menu_order', 'order'=>'ASC')); ?>
		<?php if ( $board_mems->have_posts() ) : ?>
		<div class="u-wrap">
			<h4 class="u-align-right">Advisory Board</h4>
		</div>
		<ul class="u-yang__list">
		
			<?php while ( $board_mems->have_posts() ) : $board_mems->the_post(); ?>
				<li class="u-yang__list__item">
					<a data-target="profile" class="o-member u-bkg-white" href="<?php the_permalink(); ?>">
						<figure class="o-member__photo js-lazy" data-thumb="<?php the_field('photo')?>"></figure>
						<div class="o-member__profile">
							<div class="u-wrap">
								<h2><?php the_title(); ?></h2>
								<span><?php the_field('title'); ?></span>
								<span class="o-line"></span>
								<span>Bio</span>
							</div>
						</div>
					</a>
				</li>
			<?php endwhile; ?>
			<?php wp_reset_postdata(); ?>
		</ul>
		<div class="u-wrap">
			<h4 class="u-align-right">Core Team</h4>
		</div>
		<?php endif; ?>
		<ul class="u-yang__list">
		<?php 
		$team = new WP_Query(array('post_type'=>'staff', 'posts_per_page'=>-1,  'orderby' => 'menu_order', 'order'=>'ASC')); ?>
		<?php if ( $team->have_posts() ) : ?>
			<?php while ( $team->have_posts() ) : $team->the_post(); ?>
				<li class="u-yang__list__item">
					<a data-target="profile" class="o-member" href="<?php the_permalink(); ?>">
						<figure class="o-member__photo js-lazy" data-thumb="<?php the_field('photo')?>"></figure>
						<div class="o-member__profile">
							<div class="u-wrap">
								<h2><?php the_title(); ?></h2>
								<span><?php the_field('title'); ?></span>
								<span class="o-line"></span>
								<span>Bio</span>
							</div>
						</div>
					</a>
				</li>
			<?php endwhile; ?>
			<?php wp_reset_postdata(); ?>
		<?php endif; ?>
		</ul>
	</section>
</div>
<div class="c-next s--footer">
	<div class="u-wrap">
		<span class="o-subtitle u-mb"><a data-target="advisory" href="<?php echo home_url();?>/advisory">Next</a></span>
		<h2><a data-target="advisory" href="<?php echo home_url();?>/advisory">Advisory Services</a></h2>
		<div class="o-pager">
			<a data-target="advisory" href="<?php echo home_url();?>/advisory" class="o-pager--next last">
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
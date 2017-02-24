<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/html-header', 'parts/shared/header' ) ); ?>
<div class="c-tint"></div>
<div class="o-page-thumb s--svs">
	<figure class="js-lazy" data-thumb="<?php get_post_thumb(); ?>"></figure>
</div>
<section class="o-content">
	<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
	<header class="o-content__header">
		<section class="u-wrap">
			<div class="o-index">
				<span class="o-index__number">01</span>
				<span class="o-line"></span>
			</div>
			<h1><?php the_title(); ?></h1>
		</section>
	</header>
	<div class="o-pager o-pager--services">
		<a data-target="capital-management" href="<?php echo home_url(); ?>/capital-management" class="o-pager--next last">
			<span class="o-circle"></span>
			<div class="o-arrow">
				<span class="o-arrow--stem"></span>
				<div class="o-arrow--head"><span></span><span></span></div>
			</div>
		</a>
	</div>
	<?php endwhile; ?>
	<?php $services = get_field('service'); if($services): ?>
		<ul class="c-services">
			<?php foreach ($services as $service): 
				$service_title = $service['title'];
				$service_thumb = $service['image'];
				$service_desc = $service['description'];
				$service_link = $service['page'];
			?>
				<li>
					<article class="o-service">
						<div class="o-service__meta">
							<span class="o-service__title"><?php echo $service_title; ?></span>
						</div>
						<div class="o-service__info">
							<figure class="o-service__thumb js-lazy" data-thumb="<?php echo $service_thumb;?>"></figure>
							<section class="o-service__desc">
								<div class="u-wrap">
									<p><?php echo $service_desc; ?></p>
								</div>
							</section>
						</div>						
					</article>	
				</li>
			<?php endforeach ?>
		</ul>
	<?php endif ?>
	<?php
		$posts_cat = 2;
		$posts_type = 'case_studies';
		$cs = new WP_Query(array('post_type'=>$posts_type, 'cat'=> $posts_cat)); 
		$cs_count = $cs->found_posts;
	?>
	<?php if ( $cs->have_posts() ) : ?>
	<section class="o-articles">
		<header class="o-articles__header">
			<div class="u-wrap">
				<h4 class="o-articles__title">Case Studies</h4>
				<div class="o-index">
					<span class="o-index__number">
						<?php echo $cs_count; ?>
					</span>
					<span class="o-line"></span>
				</div>
			</div>
		</header>
		<ul class="o-articles__list">
		<?php while ( $cs->have_posts() ) : $cs->the_post(); ?>
			<li class="o-articles__list__item">
				<article class="o-article">
					<a data-target="insights" href="<?php the_permalink();?>">
						<figure class="js-lazy" data-thumb="<?php get_post_thumb(); ?>"></figure>
					</a>
					<section class="u-wrap">
						<ul class="o-meta">
							<li class="o-meta__item">
								<time><?php time_ago(); ?></time>
							</li>
						</ul>
						<h2><a data-target="insights" href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
						<a data-target="insights" href="<?php the_permalink(); ?>" class="o-button">
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
		<?php wp_reset_postdata(); ?>
		</ul>		
		<?php 
			if($cs_count > 6): ?>
				<div class="u-align-center u-mb">
					<a href="#" class="o-button s--pull js-fetch-posts" data-post="Case Studies" data-type="<?php echo $posts_type; ?>" data-cat="<?php $posts_cat; ?>">
						<span></span>
						<span></span>
						<span></span>
					</a>
					<span class="o-status">More Case Studies</span>
				</div>
		<?php endif; ?>
	</section>
	<?php endif; ?>
</section>
<div class="c-next s--footer">
	<div class="u-wrap">
		<span class="o-subtitle u-mb">Next</span>
		<h2><a data-target="capital-management" href="<?php echo home_url(); ?>/capital-management">Capital Management</a></h2>
		<div class="o-pager">
			<a data-target="capital-management" href="<?php echo home_url(); ?>/capital-management" class="o-pager--next last">
				<span class="o-circle"></span>
				<div class="o-arrow">
					<span class="o-arrow--stem"></span>
					<div class="o-arrow--head"><span></span><span></span></div>
				</div>
			</a>
		</div>
	</div>
</div>
<?php Starkers_Utilities::get_template_parts(array('parts/shared/html-footer') ); ?>
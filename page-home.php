<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/html-header', 'parts/shared/header' ) ); ?>
<?php 
	$hotspots = new WP_Query(array('posts_per_page'=>6, 'post_type'=>'slide')); $i = 0; $s = 0;
	if ($hotspots->have_posts()):
?>
	<ul class="c-hotspots">
	<?php while ( $hotspots->have_posts() ) : $hotspots->the_post();
		$hotspot_title = get_the_title();
		$hotspot_thumb = get_field('sld_image');
		$index = $i + 1;
	?>
	<li class="c-hotspots__item <?php echo 'u-col-'.$i; ?>">
		<a href="#" class="c-hotspots__item__title" data-slide-index="<?php echo $index; ?>">
			<div class="u-wrap">
				<h3><?php echo $hotspot_title; ?></h3>
				<div class="o-index">
					<span class="o-index__number"><?php echo '0'.$index; ?></span>
					<span class="o-line"></span>
				</div>
			</div>
			<span class="o-line--hotspot"></span>
		</a>
	</li>
	<?php $i++;  endwhile; ?>
	<?php wp_reset_postdata(); ?>
	</ul>
	<div class="swiper-container c-slider__wrap">
		<div class="swiper-wrapper">
		<?php while ( $hotspots->have_posts() ) : $hotspots->the_post(); 
			$slide_caption = get_field('sld_caption');
			$slide_img_url = get_field('sld_image');
			$slide_cta = get_field('sld_link_cta');
			$slide_slug = get_field('sld_slug');
			if(!$slide_slug){
				$slide_link = get_field('sld_link');
				$start = strlen(home_url()) + 1;
				$head = substr($slide_link, $start);
				$target = rtrim($head, "/");
			}
			else{
				$slide_link = home_url().'/'.$slide_slug.'/';
				if($slide_slug == 'project/mutundwe-hill-estate'){
					$target = 'project';
				}
				else{
					$target = $slide_slug;
				}
			}
		?>
			<div class="swiper-slide index-<?php echo $s;?>">
				<section class="c-slide__copy">
					<div class="u-wrap">
						<h2>
							<a data-target="<?php echo $target; ?>" href="<?php echo $slide_link; ?>"><span><?php echo $slide_caption; ?></span></a>
						</h2>
						<a data-target="<?php echo $target; ?>" href="<?php echo $slide_link; ?>" class="o-button">
							<div class="o-button__dash"></div>
							<span class="o-button__title"><?php echo $slide_cta; ?></span>
							<div class="o-arrow">
								<span class="o-arrow--stem"></span>
								<div class="o-arrow--head"><span></span><span></span></div>
							</div>
						</a>
					</div>
				</section>
				<div class="c-slide__image js-lazy" data-thumb="<?php echo $slide_img_url; ?>">
					<div class="c-slide__tint">
					</div>
				</div>
			</div>
		<?php $s++;endwhile; ?>
		<?php wp_reset_postdata(); ?>
		</div>
	</div>
<?php endif; ?>
<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/footer','parts/shared/html-footer') ); ?>
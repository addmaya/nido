<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/html-header', 'parts/shared/header' ) ); ?>
<div class="c-pop">
	<div class="u-table">
		<div class="u-cell">
			<div class="c-pop__box">
				<a href="#" class="c-pop__close"></a>
				<div class="u-canvas"></div>
			</div>
		</div>
	</div>
</div>
<span class="c-pg-title">project</span>
<div class="c-tint"></div>
<div class="o-container">
	<section class="o-content s--project">
		<div class="u-clear">
			<header class="o-content__header">
				<section class="u-wrap">
					<h1><?php the_title(); ?></h1>
					<div class="o-content__header__brief">
						<?php echo apply_filters('the_content', get_field('mhe_summary')); ?>
					</div>
					<ul class="o-menu">
						<li class="o-menu__item"><a href="#sect-1"><span>Neighbourhood</span></a></li>
						<li class="o-menu__item"><a href="#sect-2"><span>Planned Facilities</span></a></li>
						<li class="o-menu__item"><a href="#sect-3"><span>Interactive Map</span></a></li>
						<li class="o-menu__item"><a href="#sect-4"><span>Reserve a Plot</span></a></li>
					</ul>
				</section>
			</header>
			<section class="c-hero__wrap">
				<figure class="c-hero js-lazy" data-thumb="<?php echo get_post_thumb(); ?>">
					<div class="u-table">
						<div class="u-cell">
							<a href="#" class="o-button--video"></a>
						</div>
					</div>
				</figure>
			</section>
		</div>
		<section class="o-content__section" id="sect-1">
			<div class="u-grid-2col">
				<div class="u-col">
					<figure class="u-bkg-img js-lazy" data-thumb="<?php the_field('mhe_neigh_image'); ?>" style="background-color: #2B4386; height: 25em"></figure>
				</div>
				<div class="u-col">
					<div class="u-wrap">
						<section>
							<h4>Neighbourhood</h4>
							<?php echo apply_filters('the_content', get_field('mhe_neigh')); ?>
							<div class="o-list u-reset">
								<ul>
									<?php 
										$neigh_highlights = get_field('mhe_neigh_points');									
									 ?>
									 <?php foreach ($neigh_highlights as $neigh_highligh): ?>
									 	<li><?php echo $neigh_highligh['mhe_neigh_highlight']; ?></li>
									 <?php endforeach ?>
								</ul>
							</div>
							<span class="o-line"></span>
						</section>
					</div>
				</div>
			</div>
		</section>
		<section class="o-content__section" id="sect-2">
			<div class="u-grid-2col">
				<div class="u-col">
					<section class="u-wrap">
						<h4>Planned Facilities</h4>
						<?php echo apply_filters('the_content', get_field('mhe_facilities')); ?>
						<span class="o-line"></span>
					</section>
				</div>
				<div class="u-col">
					<?php $neigh_facil_images = get_field('mhe_facilities_images'); ?>
					<?php foreach ($neigh_facil_images as $neigh_facil_image): ?>
						<figure class="u-bkg-img u-left u-square js-lazy" data-thumb="<?php echo $neigh_facil_image['mhe_facilities_image']; ?>">
							
						</figure>
					<?php endforeach ?>
				</div>
			</div>
		</section>
		<section class="o-content__section" id="sect-3">
			<h4 class="u-wrap">Reserve Plot(s)</h4>
			<section class="u-wrap u-clear">
				<div class="u-half">
					<p class="s--reset">Use the Interactive below map to select and reserve plots on the Mutundwe Hill Estate. Plots marked red are sold.</p>
				</div>
			</section>			
			<div class="c-map u-clear">
				<div class="c-map__geo">
					<?php echo do_shortcode('[plots]') ?> 
				</div>
				<div class="c-map__meta">
					<section class="u-wrap">
						<h4>Selected Plots</h4>
						<span class="o-figure">3</span>
						<ul class="c-plots__list">
							<li><span class="c-plot__id">Plot 489 (12 Decimals)</span> <a href="#" class="c-pop__close"></a></li>
							<li><span class="c-plot__id">Plot 512 (33 Decimals)</span> <a href="#" class="c-pop__close"></a></li>
							<li><span class="c-plot__id">Plot 301 (20 Decimals)</span> <a href="#" class="c-pop__close"></a></li>
						</ul>
						<div class="t-dark">
							<a href="#form_contact" class="o-button">
								<div class="o-button__dash"></div>
								<span class="o-button__title">Reserve</span>
								<div class="o-arrow">
									<span class="o-arrow--stem"></span>
									<div class="o-arrow--head"><span></span><span></span></div>
								</div>
								<span class="o-button__arrow"></span>
							</a>
						</div>
					</section>
					<span class="o-line"></span>
					<section class="u-wrap">
						<p class="u-white"><a href="tel:+256392159560">+256 392 159 560</a><a target="_blank" href="mailto:sales@asigmacapital.com">sales@asigmacapital.com</a></p>
					</section>
					<span class="o-line"></span>
				</div>
			</div>
		</section>
		<section class="o-content__section" id="sect-4">
			<h4 class="u-wrap">Pricing</h4>
			<div class="u-grid-2col">
				<div class="u-col">
					<ul class="c-features">
						<?php $stats = get_field('mhe_statistics'); ?>
						<?php foreach ($stats as $stat): ?>
							<li class="c-features__item">
								<span class="o-figure"><?php echo $stat['mhe_statistic_figure']; ?></span>
								<span class="u-copy"><?php echo $stat['mhe_statistic_text']; ?></span>
							</li>
						<?php endforeach ?>
					</ul>
					<div class="u-tb s--two-col">
						<ul class="u-th">
							<li><span>Plot Size</span></li>
							<li><span>Price (Ugx)</span></li>
						</ul>
						<?php $prices = get_field('mhe_prices'); ?>
						<?php foreach ($prices as $price): ?>
							<ul class="u-tr">
								<li><span><?php echo $price['mhe_plot_size']; ?></span></li>
								<li><span><?php echo $price['mhe_plot_amount']; ?></span></li>
							</ul>
						<?php endforeach ?>
					</div>
				</div>
				<div class="u-col">
					<section class="u-wrap">
						<?php echo apply_filters('the_content', get_field('mhe_pricing')); ?>
					</section>
					<figure class="u-bkg-img js-lazy" data-thumb="<?php the_field('mhe_pricing_image'); ?>" style="margin-bottom:3em; background-color:#2B4386; height: 10.5em;"></figure>
					<span class="o-line"></span>
				</div>
			</div>
			<form id="form_contact" class="o-form s--reserve" action="<?php echo get_admin_url();?>admin-post.php" method="post">
				<legend class="u-white">Call <a href="tel:+256392159560">+256 392 159 560</a> / <a target="_blank" href="mailto:sales@asigmacapital.com">sales@asigmacapital.com</a></legend>
				<div class="u-wrap">
					<div class="o-form__ele">
						<input class="o-input--txt" type="text" placeholder="Name" name="txt_name" required>
					</div>
					<div class="o-form__ele">
						<input class="o-input--txt" type="email" placeholder="Email" name="txt_email" required>
					</div>
					<div class="o-form__ele">
						<input class="o-input--txt" type="text" placeholder="Phone" name="txt_telephone" required>
					</div>
					<div class="u-hide">
						<input type="hidden" name="action" value="form_submit"/>
						<input type="text" name="form_spam_key"/>
						<?php wp_nonce_field('form_nonce_key','form_nonce');?>
					</div>
					<div class="t-dark u-right">
						<button class="o-button">
							<div class="o-button__dash"></div>
							<span class="o-button__title">Reserve</span>
							<div class="o-arrow">
								<span class="o-arrow--stem"></span>
								<div class="o-arrow--head"><span></span><span></span></div>
							</div>
							<span class="o-button__arrow"></span>
						</button>
					</div>
					<div class="o-form__status"></div>
				</div>
			</form>
		</section>
	</section>
</div>
<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/footer','parts/shared/html-footer') ); ?>
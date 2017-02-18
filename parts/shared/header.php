<span class="c-line-1"></span>
<span class="c-line-2"></span>
<span class="c-line-3"></span>
<span class="c-line-4"></span>
<span class="c-line-5"></span>
<header class="c-header">
	<div class="c-logo">
		<a href="<?php echo home_url(); ?>"></a>
	</div>
	<div class="o-social">
		<div class="u-wrap">
			<span class="o-line"></span>
			<a href="https://www.facebook.com/Asigma-Capital-1841729776096748/" target="_blank" class="o-social__fb"><span></span></a>
			<a href="https://twitter.com/asigmacapital" target="_blank" class="o-social__tw"><span></span></a>
			<a href="https://www.linkedin.com/company/asigma-capital" target="_blank" class="o-social__ldn"><span></span></a>
		</div>
	</div>
	<a href="#" class="js-top">Back to Top</a>
	<nav class="c-menu">
		<div class="u-wrap">
			<a href="#" class="c-menu--toggle">
				<span class="o-line"></span>
			</a>		
			<ul>
				<li class="js-profile c-menu__item <?php is_active('profile'); ?>">
					<a href="<?php echo home_url(); ?>/profile">		
						<span class="c-menu__item__title">Profile</span>
					</a>
				</li>
				<li class="js-advisory c-menu__item <?php is_active('advisory'); ?>">
					<a href="<?php echo home_url(); ?>/advisory">
						<span class="c-menu__item__title">Advisory</span>
					</a>
				</li>
				<li class="js-capital-management c-menu__item <?php is_active('capital-management'); ?>">
					<a href="<?php echo home_url(); ?>/capital-management">	
						<span class="c-menu__item__title">Capital Management</span>
					</a>
				</li>
				<li class="js-data c-menu__item <?php is_active('data'); ?>">
					<a href="<?php echo home_url(); ?>/data">		
						<span class="c-menu__item__title">Data</span>
					</a>
				</li>
				<li class="js-insights c-menu__item <?php is_active('insights'); ?>">
					<a href="<?php echo home_url(); ?>/insights">	
						<span class="c-menu__item__title">Insights</span>
					</a>
				</li>
				<li class="js-project c-menu__item <?php if(is_singular('project')){echo 'is-active';}?>">
					<a href="<?php echo home_url(); ?>/project/mutundwe-hill-estate/">	
						<span class="c-menu__item__title">Real Estate</span>
					</a>
				</li>
			</ul>
		</div>
	</nav>
	<div class="o-contacts u-col-4 <?php if(is_page('contact')){echo 'u-white';} ?>">
		<div class="u-wrap">
			<span class="o-line"></span>
			<?php if(have_rows('telephone', 27)): ?>
				<?php while( have_rows('telephone', 27) ): the_row();
					$telephone = get_sub_field('number');
				?>
				<a href="tel:<?php echo str_replace(' ', '', $telephone); ?>"><?php echo $telephone; ?></a>
				<?php endwhile; ?>
			<?php endif; ?>
			<?php 
				$email = get_field('email', 27);
				$gmap = get_field('google_map', 27);
				$address = get_field('address', 27);
			 ?>
			<a href="mailto:<?php echo $email; ?>"><?php echo $email; ?></a>
			<span class="o-break"></span>
			<a href="<?php echo home_url(); ?>/contact" class="o-link js-show-contact">
				<span class="o-angle">></span>
				<span class="c-link-title">Let's Talk Business</span>
			</a>
			<a href="<?php echo home_url(); ?>/careers" class="o-link" data-target="profile">
				<span class="o-angle">></span>
				<span class="c-link-title">Careers</span>
			</a>
		</div>
	</div>
	<div class="o-contacts u-col-5 <?php if(is_page('contact')){echo 'u-white';} ?>">
		<div class="u-wrap">
			<span class="o-line"></span>
			<p><?php echo $address; ?></p>
			<span class="o-break"></span>
			<a href="<?php echo $gmap; ?>" target="_blank" class="o-link">
				<span class="o-angle">></span>
				<span class="c-link-title">Map</span>
			</a>
		</div>
	</div>
	<a href="#" class="c-menu__toggle">
		<span></span><span></span>
	</a>
</header>
<div id="barba-wrapper">
	<div class="barba-container" data-namespace="<?php
		if (is_page('contact')){echo 'contact';}
		if (is_singular('project')){echo 'project';}
		if (is_front_page()){echo 'home';}
		if (is_post_type_archive('insights')  || is_post_type_archive('case_studies') || is_post_type_archive('reports') || is_post_type_archive('news') || is_page('advisory') || is_page('data') || is_category()){echo 'posts';}
	?>">
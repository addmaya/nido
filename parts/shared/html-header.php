<!DOCTYPE HTML>
<!--[if IEMobile 7 ]><html class="no-js iem7" manifest="default.appcache?v=1"><![endif]--> 
<!--[if lt IE 7 ]><html class="no-js ie6" lang="en"><![endif]--> 
<!--[if IE 7 ]><html class="no-js ie7" lang="en"><![endif]--> 
<!--[if IE 8 ]><html class="no-js ie8" lang="en"><![endif]--> 
<!--[if (gte IE 9)|(gt IEMobile 7)|!(IEMobile)|!(IE)]><!--><html class="no-js" lang="en"><!--<![endif]-->
	<head>
		<title><?php bloginfo('name'); ?><?php wp_title('-');?></title>
		<link href="https://fonts.googleapis.com/css?family=Playfair+Display|Roboto:100,400,700" rel="stylesheet">
		<link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri();?>/favicon.ico"/>
		<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/style.css?v0.195">
		<meta content="An advisory firm that combines finance, operations engineering and data analytics to add value to East-African SMEs." name="description">
		<meta charset="<?php bloginfo('charset');?>" />
	  	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta property="og:url" content="<?php echo get_permalink();?>"/>
		<meta property="og:site_name" content="<?php bloginfo('name');?>"/>
		<meta property="og:type" content="<?php if((!is_front_page() && is_singular() || is_single())){echo 'article'; } else{ echo 'website';} ?>" />
		<meta property="og:title" content="<?php echo get_the_title(); ?>"/>
		<meta property="og:description" content="<?php echo get_field('seo_description'); ?>" />
		<meta property="og:image" content="<?php $seo_img = wp_get_attachment_image_url(get_post_thumbnail_id($post->ID), 'full'); if($seo_img){echo $seo_img;} else{echo get_stylesheet_directory_uri().'/images/data-wave.jpg';} ?>"/>

		<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCcQOmynFmVAUA-OWS7ImsCkl9825ozutQ&libraries=geometry"></script>
		<script src="<?php echo get_stylesheet_directory_uri(); ?>/js/maps/gmaps.js"></script>
		<script src="<?php echo get_stylesheet_directory_uri(); ?>/js/maps/scripts.js"></script>

		<script src="<?php echo get_stylesheet_directory_uri(); ?>/js/build/vendors.js?v0.196"></script>
		<script src="<?php echo get_stylesheet_directory_uri(); ?>/js/build/app.min.js?v0.196"></script>
		
		<?php wp_head(); ?>		
	</head>
	<body class="boot <?php if(is_front_page()){echo 't-dark';}?>">
		<div class="c-box">
		<div class="c-loader">
			<div class="u-table">
				<div class="u-cell">
					<div class="c-loader__wrap">
						<span class="c-loader__line"></span>
					</div>
				</div>
			</div>
		</div>

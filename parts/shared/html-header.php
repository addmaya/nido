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
		<link rel="stylesheet" href="<?php echo get_stylesheet_directory_uri(); ?>/style.css?v0.155">
		<meta charset="<?php bloginfo('charset');?>" />
	  	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<?php wp_head(); ?>		
	</head>
	<body class="boot <?php if(is_front_page()){echo 't-dark';}?>">
		<div class="c-loader">
			<div class="u-table">
				<div class="u-cell">
					<div class="c-loader__wrap">
						<span class="c-loader__line"></span>
					</div>
				</div>
			</div>
		</div>

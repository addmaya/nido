<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/html-header', 'parts/shared/header' ) ); ?>
<div class="c-tint"></div>
<div class="u-yingyang">
	<section class="u-ying">
		<div class="u-wrap">
			<header class="u-ying__header">
				<h1><?php the_title(); ?></h1>
			</header>
			<span class="o-line u-mb"></span>
			<ul class="o-menu">
				<!-- <li class="o-menu__item"><a href="#" class="o-search__toggle"><span>Search</span></a></li> -->
				<li class="o-menu__item"><a data-target="advisory" href="<?php echo home_url(); ?>/advisory"><span>Advisory </span></a></li>
				<li class="o-menu__item"><a data-target="capital-management" href="<?php echo home_url(); ?>/capital-management"><span>Capital Management </span></a></li>
				<li class="o-menu__item"><a data-target="data" href="<?php echo home_url(); ?>/data"><span>Data </span></a></li>
				<li class="o-menu__item"><a data-target="insights" href="<?php echo home_url(); ?>/insights"><span>Insights </span></a></li>
			</ul>
		</div>
	</section>
</div>
<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/footer','parts/shared/html-footer') ); ?>
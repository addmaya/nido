<ul class="o-menu">
	<li class="o-menu__item"><a href="<?php echo home_url(); ?>/insights" class="<?php if(is_post_type_archive('insights')){echo 'is-active';} ?>"><span>Market Insights <i><?php echo wp_count_posts('insights')->publish; ?></i></span></a></li>
	<li class="o-menu__item"><a class="<?php if(is_post_type_archive('case_studies')){echo 'is-active';} ?>" href="<?php echo home_url(); ?>/case_studies"><span>Case Studies <i><?php echo wp_count_posts('case_studies')->publish; ?></i></span></a></li>
	<li class="o-menu__item"><a class="<?php if(is_post_type_archive('reports')){echo 'is-active';} ?>" href="<?php echo home_url(); ?>/reports"><span>Reports <i><?php echo wp_count_posts('reports')->publish; ?></i></span></a></li>
	<li class="o-menu__item"><a href="<?php echo home_url(); ?>/press" class="<?php if(is_post_type_archive('news')){echo 'is-active';} ?>"><span>Press <i><?php echo wp_count_posts('news')->publish; ?></i></span></a></li>
	<!-- <li class="o-menu__item"><a href="#" class="o-search__toggle"><span>Search</span></a></li> -->
</ul>
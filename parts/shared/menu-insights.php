<ul class="o-menu">
	<?php
		$count_insights = wp_count_posts('insights')->publish;
		$count_cases = wp_count_posts('case_studies')->publish;
		$count_reports = wp_count_posts('reports')->publish;
		$count_news = wp_count_posts('news')->publish;
	?>
	<?php if($count_insights){ ?>
	<li class="o-menu__item"><a href="<?php echo home_url(); ?>/insights" class="<?php if(is_post_type_archive('insights')){echo 'is-active';} ?>"><span>Market Insights <i><?php echo $count_insights; ?></i></span></a></li>
	<?php } ?>
	<?php if($count_cases){ ?>
	<li class="o-menu__item"><a href="<?php echo home_url(); ?>/case_studies" class="<?php if(is_post_type_archive('case_studies')){echo 'is-active';} ?>"><span>Case Studies <i><?php echo $count_cases; ?></i></span></a></li>
	<?php } ?>
	<?php if($count_reports){ ?>
	<li class="o-menu__item"><a href="<?php echo home_url(); ?>/reports" class="<?php if(is_post_type_archive('report')){echo 'is-active';} ?>"><span>Reports <i><?php echo $count_reports; ?></i></span></a></li>
	<?php } ?>
	<?php if($count_news){ ?>
	<li class="o-menu__item"><a href="<?php echo home_url(); ?>/press" class="<?php if(is_post_type_archive('news')){echo 'is-active';} ?>"><span>Press <i><?php echo $count_news; ?></i></span></a></li>
	<?php } ?>
	<!-- <li class="o-menu__item"><a href="#" class="o-search__toggle"><span>Search</span></a></li> -->
</ul>
<?php
	$pt_next = get_next_post();
	$pt_prev = get_previous_post();
	$pt_active = get_post_type();
	$pt = get_post_type_object(get_post_type());
	$pt_name = $pt->labels->singular_name;
	$pt_plural = $pt->labels->name;
	$pt_link = '';
	$pt_target = '';

	switch ($pt_active) {
		case 'news':
			$pt_link = home_url().'/press';
			$pt_target = 'insights';
			break;
		case 'insights':
			$pt_link = home_url().'/insights';
			$pt_target = 'insights';
			break;
		case 'staff':
			$pt_link = home_url().'/profile';
			$pt_target = 'profile';
			break;
		case 'board':
			$pt_link = home_url().'/profile';
			$pt_target = 'profile';
			break;
		case 'career':
			$pt_link = home_url().'/careers';
			$pt_target = 'profile';
			break;
		case 'reports':
			$pt_link = home_url().'/reports';
			$pt_target = 'insights';
			break;
		case 'case_studies':
			$pt_link = home_url().'/case_studies';
			$pt_target = 'insights';
			break;
		default:
			break;
	}
?>
<?php if (!empty($pt_prev)){ ?>
	<div class="c-next">
		<div class="u-wrap">
	  		<span class="o-subtitle"><a href="<?php echo get_permalink( $pt_prev->ID ); ?>">Next</a></span>
	  		<h2><a href="<?php echo get_permalink( $pt_prev->ID ); ?>"><?php echo $pt_prev->post_title; ?></a></h2>
	  		<div class="o-pager">
	  			<a href="<?php echo get_permalink( $pt_prev->ID ); ?>" class="o-pager--next last">
	  				<span class="o-circle"></span>
	  				<div class="o-arrow">
	  					<span class="o-arrow--stem"></span>
	  					<div class="o-arrow--head"><span></span><span></span></div>
	  				</div>
	  			</a>
	  		</div>
	  	</div>
	 </div>
<?php } else { ?>
	<div class="c-next new">
		<div class="u-wrap">
	  		<h2><a data-target="<?php echo $pt_target; ?>" href="<?php echo $pt_link; ?>"><?php if($pt_active != 'board'){echo 'All '.$pt_plural;}else{echo 'Asigma Profile';} ?></a></h2>
	  		<div class="o-pager">
	  			<a data-target="<?php echo $pt_target; ?>" href="<?php echo $pt_link; ?>" class="o-pager--next last">
	  				<span class="o-circle"></span>
	  				<div class="o-arrow">
	  					<span class="o-arrow--stem"></span>
	  					<div class="o-arrow--head"><span></span><span></span></div>
	  				</div>
	  			</a>
	  		</div>
	  	</div>
	 </div>
<?php } ?>
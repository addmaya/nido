<?php
	$pt_next = get_next_post();
	$pt_prev = get_previous_post();
	$pt = get_post_type_object(get_post_type());
	$pt_name = $pt->labels->singular_name;
?>
<?php if (!empty($pt_prev)){ ?>
	<div class="c-next">
		<div class="u-wrap">
	  		<span class="o-subtitle">Next</span>
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
<?php } else { if(!empty($pt_next)){?>
	<div class="c-next">
		<div class="u-wrap">
	  		<span class="o-subtitle">Previous</span>
	  		<h2><a href="<?php echo get_permalink( $pt_next->ID ); ?>"><?php echo $pt_next->post_title; ?></a></h2>
	  		<div class="o-pager">
	  			<a href="<?php echo get_permalink( $pt_next->ID ); ?>" class="o-pager--prev">
	  				<span class="o-circle"></span>
	  				<div class="o-arrow">
	  					<span class="o-arrow--stem"></span>
	  					<div class="o-arrow--head"><span></span><span></span></div>
	  				</div>
	  			</a>
	  		</div>
	  	</div>
	 </div>
<?php }} ?>
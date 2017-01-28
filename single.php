<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/html-header', 'parts/shared/header' ) ); ?>
<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
<span class="c-pg-title">news</span>
<div class="c-tint s--single"></div>
<div class="o-page-thumb">
	<figure class="js-lazy" data-thumb="<?php get_post_thumb(); ?>"></figure>
</div>
<?php 
	$standfirst = get_field('asg_summary');
	$pointers = get_field('asg_pointers');
 ?>
<section class="o-content s--story">
	<header class="o-content__header s--single <?php if(!($standfirst || $pointers)){echo 'u-pdb-3em';}?>">
		<section class="u-wrap">
			<ul class="o-meta">
				<li class="o-meta__item">
					<time datetime="<?php the_time( 'Y-m-d' ); ?>" pubdate><?php time_ago(); ?></time>
				</li>
				<li class="o-meta__item">
					<span><?php the_author(); ?></span>
				</li>
				<li class="o-meta__item">
					<?php the_category(); ?>
				</li>
			</ul>
			<h1><?php the_title(); ?></h1>
		</section>
	</header>
	 <?php if ($pointers): ?>
	 	<section class="c-standfirst">
	 		<div class="o-list">
	 			<ul>
	 				<?php foreach ($pointers as $pointer) {
	 					echo '<li>'.$pointer['asg_point'].'</li>';
	 				} ?>
	 			</ul>
	 		</div>
	 		<span class="o-line"></span>
	 		<p><?php echo $standfirst; ?></p>
	 	</section>
	 <?php endif ?>
	 
	<section class="c-story">
		<?php the_content(); ?>
	</section>
	<footer class="o-content__footer">
		<?php $author = get_field('asg_author'); ?>
		<?php if ($author): 
			$post = $author;
			setup_postdata($post);
		?>
			<div class="c-author u-wrap">
				<figure style="background-image:url(<?php the_field('photo'); ?>)"></figure>
				<span class="c-author__name"><?php the_title(); ?></span>
				<span class="o-subtitle"><?php the_field('title'); ?></span>
			</div>
		<?php wp_reset_postdata();?>
		<?php endif ?>
		<div class="o-social">
			<div class="u-wrap">
				<span class="o-line"></span>
				<a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" class="o-social__fb"><span></span></a>
				<a target="_blank" href="https://twitter.com/home?status=<?php the_permalink(); ?>" class="o-social__tw"><span></span></a>
				<a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=<?php the_permalink(); ?>&title=<?php the_title(); ?>&summary=&source=" class="o-social__ldn"><span></span></a>
			</div>
		</div>
		<?php Starkers_Utilities::get_template_parts(array('parts/shared/next-previous'));?>
	</footer>
</section>
<?php endwhile; ?>
<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/footer','parts/shared/html-footer' ) ); ?>
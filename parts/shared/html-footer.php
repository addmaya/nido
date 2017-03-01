	<?php wp_footer(); ?>	
	</div>
	<script src="<?php echo get_stylesheet_directory_uri(); ?>/js/build/vendors.js?v0.189"></script>
	<script src="<?php echo get_stylesheet_directory_uri(); ?>/js/build/app.min.js?v0.189"></script>
	<script>
		var ajaxurl="<?php echo admin_url('admin-ajax.php'); ?>";
		var posts_page = "<?php echo get_option( 'posts_per_page' ); ?>";
	</script>
	</body>
</html>
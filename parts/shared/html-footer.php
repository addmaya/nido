	<?php wp_footer(); ?>	
	</div>
	<script>
		var ajaxurl="<?php echo admin_url('admin-ajax.php'); ?>";
		var posts_page = "<?php echo get_option( 'posts_per_page' ); ?>";
	</script>
	</body>
</html>
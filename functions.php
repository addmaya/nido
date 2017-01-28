<?php
	add_action('admin_post_form_submit', 'form_submit');
	add_action('admin_post_nopriv_form_submit', 'form_submit');
	function form_submit(){
		if (isset($_POST['form_spam_key']) && $_POST['form_spam_key']==''){
			if(isset($_POST['form_nonce']) || wp_verify_nonce($_POST['form_nonce'], 'form_nonce_key')){
				if(isset($_POST['txt_name'])){
					$name = trim($_POST['txt_name']);
				}
				if(isset($_POST['txt_telephone'])){
					$number = trim($_POST['txt_telephone']);
				}			
				if(isset($_POST['txt_email'])){
					$email = trim($_POST['txt_email']);
				}
				if(isset($_POST['txt_message'])){
					$message = trim($_POST['txt_message']);
				}
				$emailto = 'admin@addmaya.com';
				$body = 'Email: '.$email."\n".'Name: '.$name."\n".'Phone Number: '.$number."\n".'Message: '.$message;
				$headers = 'From: '.$name.' <'.$emailto.'>' . "\r\n" . 'Reply-To: ' . $email;
				wp_mail($emailto, 'Asigma Website Comment', $body, $headers);
				echo 'Sent';	
			}
			else {
				print 'Nice Try';
				exit;
			}	
		}
		else {
			exit;
			echo 'Nice Try';
		}	
	}

	require_once( 'external/starkers-utilities.php' );
	add_theme_support('post-thumbnails');	
	function starkers_comment($comment, $args, $depth) {
		$GLOBALS['comment'] = $comment; 
		?>
		<?php if ($comment->comment_approved == '1'): ?>	
		<li>
			<article id="comment-<?php comment_ID() ?>">
				<?php echo get_avatar( $comment ); ?>
				<h4><?php comment_author_link() ?></h4>
				<time><a href="#comment-<?php comment_ID() ?>" pubdate><?php comment_date() ?> at <?php comment_time() ?></a></time>
				<?php comment_text() ?>
			</article>
		<?php endif;
	}

	show_admin_bar(false);
	function disable_wp_emojicons() {
	  remove_action( 'admin_print_styles', 'print_emoji_styles' );
	  remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	  remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
	  remove_action( 'wp_print_styles', 'print_emoji_styles' );
	  remove_filter( 'wp_mail', 'wp_staticize_emoji_for_email' );
	  remove_filter( 'the_content_feed', 'wp_staticize_emoji' );
	  remove_filter( 'comment_text_rss', 'wp_staticize_emoji' );
	  add_filter( 'tiny_mce_plugins', 'disable_emojicons_tinymce' );
	}
	add_action( 'init', 'disable_wp_emojicons' );
	remove_action('wp_head', 'wp_generator');
	remove_action('wp_head', 'wlwmanifest_link');
	remove_action('wp_head', 'rsd_link');
	add_filter( 'wp_default_scripts', 'remove_jquery_migrate' );
	function remove_jquery_migrate( &$scripts)
	{
	    if(!is_admin())
	    {
	        $scripts->remove( 'jquery');
	        $scripts->add( 'jquery', false, array( 'jquery-core' ), '1.10.2' );
	    }
	}
	remove_action('wp_head','rest_output_link_wp_head');
	remove_action('wp_head','wp_oembed_add_discovery_links');
	remove_action('template_redirect', 'rest_output_link_header', 11, 0);

	function time_ago(){
		echo human_time_diff( get_the_time('U'), current_time('timestamp') ) . ' ago';
	}

	function get_post_thumb(){
		if (has_post_thumbnail($post->ID)){
			$image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full' );
			echo $image[0];
		}
	}

	if ( function_exists( 'add_image_size' ) ) { 
    	add_image_size( 'post-thumb', 400, 9999 ); //300 pixels wide (and unlimited height)
    	add_image_size( 'post-image', 960, 9999 );
	}

	add_filter( 'image_size_names_choose', 'my_custom_sizes' );
	 
	function my_custom_sizes( $sizes ) {
	    return array_merge( $sizes, array(
	        'post-image' => __( 'Full Width' ),
	    ) );
	}

	function formatBytes($bytes, $precision = 2) { 
	    $units = array('B', 'KB', 'MB', 'GB', 'TB'); 

	    $bytes = max($bytes, 0); 
	    $pow = floor(($bytes ? log($bytes) : 0) / log(1024)); 
	    $pow = min($pow, count($units) - 1); 

	    // Uncomment one of the following alternatives
	    $bytes /= pow(1024, $pow);
	    // $bytes /= (1 << (10 * $pow)); 

	    return number_format(round($bytes, $precision)).' '.$units[$pow]; 
	}

	
	function fetch_posts(){
		$pg = intval($_GET['offset']);
		$pt = $_GET['post'];
		$html = '';

		if(!($pt == 'all')){
			$posts_type = $pt;
		}
		else {
			$posts_type = array('insights', 'case_studies', 'reports', 'news');
		}

		if(isset($_GET['cat'])){
			$ct = intval($_GET['cat']);
			$query = new WP_Query(array('post_type'=>$posts_type, 'offset'=>$pg, 'cat'=>$ct));
		}
		else{
			$query = new WP_Query(array('post_type'=>$posts_type, 'offset'=>$pg));
		}
		
		
		
		if ($query->have_posts()){
			while ( $query->have_posts() ) {
				$query->the_post();
				$thumb = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full' );

				$title = get_the_title();
				$thumb = $thumb[0];
				$date = human_time_diff( get_the_time('U'), current_time('timestamp') ) . ' ago';
				$link = get_permalink();
				
				if(!($pt == 'report')) {
				$html .= '<li class="o-articles__list__item"><article style="" class="o-article"><a href="'.$link.'"><figure style="background-image:url('.$thumb.')" ></figure></a><section class="u-wrap"><ul class="o-meta"><li class="o-meta__item"><time>'.$time.'</time></li></ul><h2><a href="'.$link.'">'.$title.'</a></h2><a href="'.$link.'" class="o-button"><div class="o-button__dash"></div><span class="o-button__title">Read</span><div class="o-arrow"><span class="o-arrow--stem"></span><div class="o-arrow--head"><span></span><span></span></div></div></a></section></article></li>';
				} else {
					$html .= get_file();
				}
			}
			echo $html;
			die();
		}
		else{
			echo 'null';
			die();
		}
	}
	add_action('wp_ajax_nopriv_fetch_posts', 'fetch_posts');
	add_action('wp_ajax_fetch_posts', 'fetch_posts');

	function get_file (){
		$file = get_field('file');
		$file_url = $file['url'];
		$file_size = formatBytes(filesize( get_attached_file( $file['id'] ) ));
		$file_type = wp_check_filetype($file_url);
		$file_time = human_time_diff( get_the_time('U'), current_time('timestamp') ) . ' ago';
		$file_title = get_the_title();
		$html ='<li class="o-articles__list__item"><article class="o-article"><section class="u-wrap"><ul class="o-meta"><li class="o-meta__item"><time>'.$file_time.'</time></li><li class="o-meta__item">'.$file_type['ext'].'</li><li class="o-meta__item">'.$file_size.'</li></ul><h2><a class="no-barba" target="_blank" href="'.$file_url.'" class="no-barba">'.$file_title.'</a></h2><a target="_blank" href="'.$file_url.'" class="o-button no-barba"><div class="o-button__dash"></div><span class="o-button__title">Download</span><div class="o-arrow"><span class="o-arrow--stem"></span><div class="o-arrow--head"><span></span><span></span></div></div></a></section></article></li>';
		return $html;
	}

	function namespace_add_custom_types( $query ) {
	  if( is_category() || is_tag() && empty( $query->query_vars['suppress_filters'] ) ) {
	    $query->set( 'post_type', 
	    	array(
	    		'insights',
	    		'case_studies',
	    		'reports',
	    		'projects'
			));
		  return $query;
		}
	}
	add_filter( 'pre_get_posts', 'namespace_add_custom_types' );


	function is_active($page){
		if(!($page == 'insights')){
			if($page == 'profile'){
				if((is_page($page) || is_singular('staff') || is_singular('board'))){
					echo ' is-active';
				}
			}
			else{
				if(is_page($page)){
					echo ' is-active';
				}
			}
		}
		else{
			if(is_post_type_archive($page) || is_singular($page)){
				echo ' is-active';
			}
		}
	}
	
	function remove_menus(){
	  global $menu;
	  global $submenu;

    if (!current_user_can('manage_options')) {
	  remove_menu_page( 'index.php' );                 
	  remove_menu_page( 'jetpack' ); 
	  remove_menu_page( 'edit.php' ); 
	  remove_menu_page( 'upload.php' );              
	  remove_menu_page( 'edit.php?post_type=page' );    
	  remove_menu_page( 'edit-comments.php' );          
	  remove_menu_page( 'themes.php' );                
	  remove_menu_page( 'plugins.php' );         
	  remove_menu_page( 'users.php' );                
	  remove_menu_page( 'tools.php' );                  
	  remove_menu_page( 'options-general.php' );   
	  }    
	  
	}
	add_action( 'admin_menu', 'remove_menus' );

	function admin_default_page() {
	  return 'wp-admin/edit.php?post_type=insights';
	}
	add_filter('login_redirect', 'admin_default_page');

	function my_deregister_scripts(){
	  wp_deregister_script( 'wp-embed' );
	}
	add_action( 'wp_footer', 'my_deregister_scripts' );

	add_filter('wp_handle_upload_prefilter','mdu_validate_image_size');
	function mdu_validate_image_size( $file ) {
	    $image = getimagesize($file['tmp_name']);
	    $minimum = array(
	        'width' => '960',
	        'height' => '540'
	    );
	    $maximum = array(
	        'width' => '1920',
	        'height' => '1080'
	    );
	    $image_width = $image[0];
	    $image_height = $image[1];

	    $too_small = "Image dimensions are too small. Minimum size is {$minimum['width']} by {$minimum['height']} pixels. Uploaded image is $image_width by $image_height pixels.";
	    $too_large = "Image dimensions are too large. Maximum size is {$maximum['width']} by {$maximum['height']} pixels. Uploaded image is $image_width by $image_height pixels.";

	    if ( $image_width < $minimum['width'] || $image_height < $minimum['height'] ) {
	        $file['error'] = $too_small; 
	        return $file;
	    }
	    elseif ( $image_width > $maximum['width'] || $image_height > $maximum['height'] ) {
	        $file['error'] = $too_large; 
	        return $file;
	    }
	    else
	        return $file;
	}
?>
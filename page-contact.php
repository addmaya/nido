<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/html-header', 'parts/shared/header' ) ); ?>
<div class="c-contact__bkg">
	<figure style="background-image: url('<?php get_post_thumb(); ?>')"></figure>
</div>
<section class="o-content">
	<div class="c-contact">
		<div class="u-wrap">
			<!-- <blockquote class="o-quote">
				"<?php the_field('quote'); ?>"
				<cite><?php the_field('quote_author'); ?></cite>
			</blockquote> -->
			<form id="form_contact" class="o-form u-clear" action="<?php echo get_admin_url();?>admin-post.php" method="post">
				<div class="u-g2-1">
					<div class="o-form__ele">
						<input class="o-input--txt" type="text" placeholder="Name" name="txt_name" required>
					</div>
					<div class="o-form__ele">
						<input class="o-input--txt" type="email" placeholder="Email" name="txt_email" required>
					</div>
					<div class="o-form__ele last">
						<input class="o-input--txt" type="text" placeholder="Phone" name="txt_telephone" required>
					</div>
				</div>
				<div class="u-hide">
					<input type="hidden" name="action" value="form_submit"/>
					<input type="text" name="form_spam_key"/>
					<?php wp_nonce_field('form_nonce_key','form_nonce');?>
				</div>
				<div class="u-g2-2">
					<div class="u-pl">
						<div class="o-form__ele last">
							<textarea class="o-input--txt ta u-small-caps" name="txt_message" cols="30" rows="10" placeholder="Message" required></textarea>
						</div>
						
						<button class="o-button js-submit-contact">
							<div class="o-button__dash"></div>
							<span class="o-button__title">Send</span>
							<div class="o-arrow">
								<span class="o-arrow--stem"></span>
								<div class="o-arrow--head"><span></span><span></span></div>
							</div>
							<span class="o-button__arrow"></span>
						</button>
						<div class="o-form__status"></div>
					</div>
				</div>
			</form>
		</div>
	</div>
</section>
<?php Starkers_Utilities::get_template_parts( array( 'parts/shared/footer','parts/shared/html-footer') ); ?>
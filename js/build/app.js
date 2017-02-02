jQuery(document).ready(function($) {
	
	//fetch ajax posts
	var p = parseInt(posts_page);

	function renderArticlesGrid(){
		var articles_list = $('.o-articles__list');
		
		articles_list.isotope({
			 itemSelector: '.o-articles__list__item'
		});

		$('.o-articles').on('click', '.js-fetch-posts', function(e) {
			e.preventDefault();
			var m = $(this);
			var t = m.data('type');
			var c = m.data('cat');
		
			$.ajax({
	           url: ajaxurl,
	           data: {action: 'fetch_posts', post: t, offset: p, cat: c},
	           dataType: 'text',
	           beforeSend: function(){
	           		m.addClass('is-loading');
	           		console.log('love');
	           		console.log('no-delay');
	           		$('body').addClass('no-delay');
	           },
	           success: function(data){
	           		m.removeClass('is-loading');
	           		if(!(data == 'null')){
	           			$('.o-articles__list').append(data);
	           			articles_list.isotope('reloadItems').isotope();
	           			p = p + parseInt(posts_page);
	           		}
	           		else{
	           			m.next('.o-status').html('No more Posts');
	           			$('html, body').animate({scrollTop: 0}, 500);
	           		}
	           } 
	        });
		});
	}

	// lazy images
	function loadLazyImages(){
		$('.js-lazy').each(function() {
	    	var me = $(this);
	    	var thumb_url = me.data('thumb');
	    	me.css('background-image', 'url(' + thumb_url + ')');
	    	// var lazyImg = document.createElement('img');
	    	// lazyImg.src = thumb_url;
	    	// lazyImg.onload = function(){
	    	// 	me.css('background-image', 'url(' + thumb_url + ')');
	    	// }	
	    });
    }

    //scroll to hash
    function scrollToHash(){
	    $(document).on('click', 'a[href*="#"]:not([href="#"])', function(e) {
		    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
		        var target = $(this.hash);
		        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		        if (target.length) {
		            $('html, body').animate({
		                scrollTop: target.offset().top
		            }, 1000);
		            e.preventDefault();
		        }
		    }
		});
	}

	//side menu
	$('.o-menu').on('click', 'a', function() {
		$('.o-menu').find('.is-active').removeClass('is-active');
		$(this).addClass('is-active');
	});

	//menu
	$('.c-menu__toggle').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('is-open');
		$('.c-header').toggleClass('is-open');
	});

	$('.c-logo a').click(function() {
		$('.c-menu').find('.is-active').removeClass('is-active');
	});

	$('.c-menu').on('click', '.c-menu__item a', function() {
		var me = $(this);
		$('body').removeClass('t-dark');
		$('.c-menu').find('.is-active').removeClass('is-active');
		me.closest('.c-menu__item').addClass('is-active');
		$('.o-contacts').removeClass('u-white');
		$('.c-header').removeClass('is-open');
		$('.c-menu__toggle').removeClass('is-open');
	});
	$('.js-show-contact').click(function() {

		$('.o-contacts').addClass('u-white');
	});

	function showSideMenu() {
	    if ($(window).scrollTop() > 200){
	    	$('.c-menu').addClass('s--static');
	    	$('.js-top').show();
	    }
	    else {
	    	$('.c-menu').removeClass('s--static');
	    	$('.js-top').hide();
	    }
	}
	$(window).scroll(function () {
	    showSideMenu();
	});

	$('body').on('click', 'a', function() {
		var me = $(this);
		var t  = me.data('target');
		var d = $('.js-'+t);
		var h = $('.c-header');

		if (t){
			if(!(d.hasClass('is-active'))){
				$('.c-menu').find('.is-active').removeClass('is-active');
				d.addClass('is-active');
			}
			if(t == 'project'){
				alert('year');
				$('.c-line-2').hide();
			}
		}
	});

	//posts
	var posts = Barba.BaseView.extend({
	  namespace: 'posts',
	  onEnter: function() {
	  	renderArticlesGrid();
	  }
	});
	posts.init();

	//home
	var project = Barba.BaseView.extend({
	  namespace: 'project',
	  onEnter: function() {
	  	$('.c-line-2, .c-line-4').hide();
	  	submitContact();
	  },
	  onLeave: function(){
	  	$('.c-line-2, .c-line-4').show();
	  }
	});
	project.init();

	var home = Barba.BaseView.extend({
	  namespace: 'home',
	  onEnter: function() {
	  	$('body').addClass('t-dark');
	    var splashSwiper = new Swiper('.c-slider__wrap', {
	    	loop: true,
	    	speed: 1200,
	    	pagination: '.swiper-pagination',
	    	nextButton: '.swiper-button-next',
	    	prevButton: '.swiper-button-prev',
	    	autoplay: 8000,
	    	autoplayDisableOnInteraction:false,
	    	onTransitionStart: function(){
	    		$('.c-hotspots').find('.is-animating').removeClass('is-animating');
	    	},
	    	onTransitionEnd: function(s){
	    		var i = s.activeIndex - 1;
	    		var a = '.c-hotspots .u-col-'+i.toString();
	    		function activeHospot(c){
	    			$('.c-hotspots').find('.is-active').removeClass('is-active');
	    			$(c).closest('.c-hotspots__item').addClass('is-active');
	    			$(c).find('.o-line--hotspot').addClass('is-animating');
	    		}
	    		if (i != 6) {
	    			activeHospot(a);
	    		}
	    		else {
	    			activeHospot('.c-hotspots .u-col-0');
	    		}
	    	}
	    });
	    
	    $('.swiper-slide .o-button').click(function() {
	    	$('body').removeClass('t-dark');
	    });

	    $('.c-hotspots').on('click', 'a', function(e) {
	    	e.preventDefault();
	    	var me = $(this);
	    	var slideIndex = parseInt(me.data('slide-index'));
	    	
	    	$('.c-hotspots').find('.is-active').removeClass('is-active');
	    	me.closest('.c-hotspots__item').addClass('is-active');
	    	
	    	splashSwiper.slideTo(slideIndex);
	    }); 
	  }
	});
	home.init();

	//contact
	var contact = Barba.BaseView.extend({
	  namespace: 'contact',
	  onEnter: function() {
	    submitContact();
	  }
	});
	contact.init();

	//page-transitions
	Barba.Pjax.start();
	var FadeTransition = Barba.BaseTransition.extend({
	  start: function() {
	    $("html, body").animate({ scrollTop: 0 }, "slow");
	    Promise
	      .all([this.newContainerLoading, this.fadeOut()])
	      .then(this.fadeIn.bind(this));
	    $('.c-loader').addClass('is-visible');
	    $('body').removeClass('no-delay');
	    p = parseInt(posts_page);
	  },

	  fadeOut: function() {
	    return $(this.oldContainer).animate({ opacity: 0 }).promise();
	  },

	  fadeIn: function() {
	    var _this = this;
	    var $el = $(this.newContainer);


	    $(this.oldContainer).hide();

	    $el.css({
	      visibility : 'visible',
	      opacity : 0
	    });
	    
	    $('.c-loader').addClass('is-animating-out');

	    window.setTimeout(function(){
	    	$('.c-loader').removeClass('is-visible is-animating-out');
	    }, 1000);

	    $el.animate({ opacity: 1 }, 400, function() {
	      _this.done();
	      loadLazyImages();
	      scrollToHash();
	      resetImageWrap();
	    });
	  }
	});

	Barba.Pjax.getTransition = function() {
	  return FadeTransition;
	};
	
	//init
	loadLazyImages();
	scrollToHash();
	resetImageWrap();

	$('.o-button--video').click(function(e){
		e.preventDefault();
		$('body').addClass('u-oh');
		$('.c-pop').show();
	    $('.c-pop__box .u-canvas').html('<iframe id=ytplayer type=text/html src=https://www.youtube.com/embed/aixSUf0c7Cc?autoplay=1></iframe>');
	    return false;
	});

	$('.c-pop__close').click(function(e) {
		e.preventDefault();
		closePop();
	});

	function closePop(){
		$('body').removeClass('u-oh');
		$('.c-pop__box .u-canvas').html('');
		$('.c-pop').hide();
	}

	$('.c-pop').click(function() {
		closePop();
	});

	$('.c-pop .c-pop__box').click(function(e) {
		e.stopPropagation();
	});


	$('.js-top').click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});

	function resetImageWrap(){
		$('.alignnone').closest('p').addClass('s--reset');
		$('.highcharts-iframe').closest('p').addClass('s--reset');
	}
	function submitContact(){
		if (!Modernizr.input.placeholder) {
		      $("input[placeholder], textarea[placeholder]").each(function() {
		          var val = $(this).attr("placeholder");
		          if (this.value == "") {
		              this.value = val;
		          }
		          $(this).focus(function() {
		              if (this.value == val) {
		                  this.value = "";
		              }
		          }).blur(function() {
		              if ($.trim(this.value) == "") {
		                  this.value = val;
		              }
		          })
		      });
		      $('#form_contact').submit(function() {
		          $(this).find("input[placeholder], textarea[placeholder]").each(function() {
		              if (this.value == $(this).attr("placeholder")) {
		                  this.value = "";
		              }
		          });
		      });
		  }
		if (!Modernizr.input.required) {
		    $.validator.addMethod("valueNotEquals", function(value, element, arg) {
		            return arg != value;
		        },
		        "Value must not equal arg."
		    );
		    $('#form_contact').validate({
		        rules: {
		            txt_name: {
		                valueNotEquals: "Your Name",
		                required: true
		            },
		            txt_telephone: {
		                valueNotEquals: "Telephone",
		                required: true
		            },
		            txt_email: {
		                valueNotEquals: "Email",
		                required: true
		            },
		            txt_message: {
		                valueNotEquals: "Message",
		                required: true
		            }
		        },
		        errorPlacement: function(error, element) {},
		        invalidHandler: function(event, validator) {
		            $('#form_contact .o-form__status').html('Check the fields in red');
		        },
		        submitHandler: function(form) {
		            $(form).ajaxSubmit({
		                beforeSend: function() {
		                    $('#form_contact .o-form__status').html('Sending...');
		                },
		                success: function() {
		                    $('#form_contact .o-form__status').html('Thank you. Your Message was sent');
		                    $('#form_contact input[name=txt_name]').val($('input[name=txt_name]').attr('placeholder'));
		                    $('#form_contact input[name=txt_email]').val($('input[name=txt_email]').attr('placeholder'));
		                    $('#form_contact input[name=txt_telephone]').val($('input[name=txt_telephone]').attr('placeholder'));
		                    $('#form_contact textarea').val($('textarea').attr('placeholder'));
		                }
		            });
		        }
		    });
		} 
		else {
		    $('#form_contact').ajaxForm({
		        beforeSend: function() {
		            $('#form_contact .o-form__status').html('Sending...');
		        },
		        success: function() {
		            $('#form_contact .o-form__status').html('Thank you. Your Message was sent');
		            $('#form_contact input[type=submit]').val('Send Message');
		            $('#form_contact input[type=text]').val('');
		            $('#form_contact textarea').val('');
		        },
		        resetForm: true
		    });
		}
	}
});
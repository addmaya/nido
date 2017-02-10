jQuery(document).ready(function($) {
	
	if (navigator.appVersion.indexOf("Win")!=-1) {
		$("html").addClass("is-pc");
	}

	//fetch ajax posts
	var p = parseInt(posts_page);
    
    var selectedPlots = [];
    var plotColorNormal = '#BBD8E9';
    var soldPlotColor = '#FFCDD2';
    var plotColorHighlighted = '#3290c7';
    var soldColorHighlighted = '#e05866';

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
		$('.c-menu').find('.is-active').removeClass('is-active');
		me.closest('.c-menu__item').addClass('is-active');
		$('.o-contacts').removeClass('u-white');
		$('.c-header').removeClass('is-open');
		$('.c-menu__toggle').removeClass('is-open');
	});
	$('.js-show-contact').click(function() {
		$('.o-contacts').addClass('u-white');
		$('.c-header').removeClass('is-open');
		$('.c-menu__toggle').removeClass('is-open');
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

	//project
	var project = Barba.BaseView.extend({
	  namespace: 'project',
	  onEnter: function() {
	  	$('body').addClass('t-project');
	  	$('.c-line-2, .c-line-4').addClass('u-hide');
        initializeMapFunctions();
	  	submitContact();
	  },
	  onLeave: function(){
	  	$('body').removeClass('t-project');
	  	$('.c-line-2, .c-line-4').removeClass('u-hide');
	  }
	});
	project.init();

	//home
	var home = Barba.BaseView.extend({
	  namespace: 'home',
	  onEnter: function() {
	  	$('html').addClass('u-height');
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
	  },
	  onLeave: function(){
	  	$('html').addClass('u-height');
	  	$('body').removeClass('t-dark');
	  }
	});
	home.init();

	// contact
	var contact = Barba.BaseView.extend({
	  namespace: 'contact',
	  onEnter: function() {
	    submitContact();
	    $('body').addClass('t-contact');
	    $('.c-line-2, .c-line-4').addClass('u-hide');
	  },
	  onLeave: function(){
	  	$('body').removeClass('t-contact');
	  	$('.c-line-2, .c-line-4').removeClass('u-hide');
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

	$('body').on('click', '.o-button--video', function(event) {
		event.preventDefault();
		var v = $(this).data('video');
		$('body').addClass('u-oh');
		$('.c-pop').show();
	    $('.c-pop__box .u-canvas').html('<iframe id=ytplayer type=text/html src=https://www.youtube.com/embed/'+v+'?autoplay=1></iframe>');
	    return false;
	});

	//video pop
	$('body').on('click', '.c-pop .c-pop__close', function(event) {
		event.preventDefault();
		closePop();
	});

	$('body').on('click', '.c-pop', function() {
		closePop();
	});

	$('body').on('click', '.c-pop .c-pop__box', function() {
		e.stopPropagation();
	});

	function closePop(){
		$('body').removeClass('u-oh');
		$('.c-pop__box .u-canvas').html('');
		$('.c-pop').hide();
	}

	$('.js-top').click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
	});

	function resetImageWrap(){
		$('.alignnone').closest('p').addClass('s--reset');
		//$('.highcharts-iframe').closest('p').addClass('s--reset');
		$('.wp-caption').css({
			width: 'auto',
			height: 'auto'
		});
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

	$('.c-map__meta .o-button').click(function() {
    	var s = '';
        $.each(selectedPlots, function(i, plot){	
    		s += plot.name+',';
    	});
    	$('#list-plots').val(s);
    });
    
    function initializeMapFunctions(){
        refreshPlots();
        
        if($('#map').length){
            $.ajax({
                url: asigma.ajaxurl,
                dataType: 'json',
                data: {action: 'get_plots'},
                success: function(data){
                    loadMap(data);
                }
            });
        }
        
        $('body').on('click', '.c-map .c-pop__close', function(){
            plotIndex = $(this).attr('attr-index');
            removePlot(plotIndex);
            return false;
        });
    }
    
    function loadMap(data){
        console.log('loadMap');
        styles = [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          },
          {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          },
          {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ];
        
        var map = new GMaps({
          div: '#map',
          lat: 0.28139986747911,
          lng: 32.529698989423,
          mapType: 'satellite',
          scrollwheel: false
        });
        
        map.setZoom(16);
        
        map.addStyle({
            styledMapName: 'Styled Map',
            styles: styles,
            mapTypeId: 'asigma_map_style'  
        });
        
        //map.setStyle('asigma_map_style');
        
        $.each(data, function(i, plot){
            path = [];
            $.each(plot.coordinates, function(j, pt){
                path.push(new google.maps.LatLng(pt.lat, pt.lng));
            });
            plot.area = Math.round(google.maps.geometry.spherical.computeArea(path) * 0.02471576866040);
            plot.price = getApproxPlotPrice(plot);
            addPlotOnMap(map.map, path, plot);
        });
    }
    
    function addPlotOnMap(map, path, plot){
        plotColor = plotColorNormal;
        if(plot.sold === true){
            plotColor = soldPlotColor;
        }
        status = plot.sold === true ? 'Sold' : 'Available';
        
        labelContent = '<div class="label-content">';
        labelContent += '<h6 class="c-plot__title">'+plot.name+'</h6>';
        labelContent += '<span>'+status+'</span>';
        labelContent += '<span>'+plot.area+' Decimals</span>';
        if(plot.price !== 0){
            labelContent += '<span>Est. Price: '+plot.price+'</span>';
        }
        labelContent += '</div>';
        
        var marker = new MarkerWithLabel({
            position: new google.maps.LatLng(0,0),
            draggable: false,
            raiseOnDrag: false,
            map: map,
            labelContent: labelContent,
            labelAnchor: new google.maps.Point(150, 20),
            labelClass: "labels", // the CSS class for the label
            labelStyle: {opacity: 1.0},
            icon: "http://placehold.it/1x1",
            visible: false
         });
    
        var poly = new google.maps.Polygon({
            paths: path,
            strokeColor: plotColor,
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: plotColor,
            fillOpacity: 0.35,
            map: map
        });
        
        plot.center = getPolygonCenter(path);
        plot.polygon = poly;
    
        google.maps.event.addListener(poly, "mousemove", function(event) {
            marker.setPosition(event.latLng);
            marker.setVisible(true);
            
            hoverColor = plotColorHighlighted;
            if(plot.sold === true){
                hoverColor = soldColorHighlighted;
            } 
            this.setOptions({
                strokeColor: hoverColor,
                fillColor: hoverColor
            });
        });
        google.maps.event.addListener(poly, "mouseout", function(event) {
            marker.setVisible(false);
            
            plotIndex = getPlotIndex(plot);
            if(plotIndex === -1){
                plotColor = plotColorNormal;
                if(plot.sold === true){
                    plotColor = soldPlotColor;
                }
            
                this.setOptions({
                    strokeColor: plotColor,
                    fillColor: plotColor
                });        
            }
        });
        
        google.maps.event.addListener(poly, "click", function(event) {
            this.getMap().setZoom(18);
            this.getMap().setCenter(event.latLng);
            plotClicked(plot, poly);
        });
    }
    
    function getPlotIndex(plot){
        plotIndex = -1;
        for(var i = 0; i < selectedPlots.length; i++){
            if(plot.id === selectedPlots[i].id){
                plotIndex = i;
                break;
            }
        }
        return plotIndex;
    }
    
    function plotClicked(plot, polygon){
        if(plot.sold === true){
            return;
        }
        
        plotColor = plotColorNormal;
        
        plotIndex = getPlotIndex(plot);
        if(plotIndex != -1){
            selectedPlots.splice(plotIndex, 1);
        }else{
            plotColor = plotColorHighlighted;
            selectedPlots.push(plot);
        }
        
        polygon.setOptions({
            strokeColor: plotColor,
            fillColor: plotColor
        });
        
        refreshPlots();
    }
    
    function removePlot(plotIndex){
        plot = selectedPlots[plotIndex];
        plot.polygon.setOptions({
            strokeColor: plotColorNormal,
            fillColor: plotColorNormal
        });
        selectedPlots.splice(plotIndex, 1);
        refreshPlots();
    }
    
    function refreshPlots(){
        if(selectedPlots.length == 0){
            $('.no-plots').show();
            $('ul.c-plots__list').hide();
            $('.c-map__meta .o-figure').html(selectedPlots.length);
            $('.c-map__meta .o-button').hide();
        }else{
            $('.no-plots').hide();
            $('ul.c-plots__list').empty().show();
            $('.plot-summary').show();
            $('.c-map__meta .o-button').show();
            
            totalArea = 0;
            
            $.each(selectedPlots, function(i, plot){
                $('<li><span class="c-plot__id">'+plot.name+' ('+plot.area+' Decimals)</span><a class="c-pop__close" href="#" class="remove-plot" title="Remove Plot" attr-index="'+i+'"></a></li>').appendTo('ul.c-plots__list');
                totalArea += plot.area;
            });
            
            $('.c-map__meta .o-figure').html(selectedPlots.length);
        }
    }
    
    
    function getPolygonCenter(path){
        var bounds = new google.maps.LatLngBounds();
        for(i = 0; i < path.length; i++){
          bounds.extend(path[i]);
        }
        return bounds.getCenter();
    }
    
    function getApproxPlotPrice(plot){
        price = 0;
        switch(plot.area){
            case 12:
                price = 'UGX 37,000,000';
                break;
            case 13:
                price = 'UGX 43,333,300';
                break;
            case 15:
                price = 'UGX 50,000,000';
                break;
            case 19:
                price = 'UGX 63,333,300';
                break;
            case 20:
                price = 'UGX 66,666,600';
                break;
        }
        return price;
    }
});
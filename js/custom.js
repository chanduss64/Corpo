$(document).ready(function() {


	
		
		$("#style-switcher .bottom a.settings").click(function(e){
			e.preventDefault();
			var div = $("#style-switcher");
			if (div.css("left") === "-400px") {
				$("#style-switcher").animate({
					left: "-200px"
				}); 
			} else {
				$("#style-switcher").animate({
					left: "-400px"
				});
			}
		});




		$(function(){
   
       var $container = $('.portfolio-home');
     
       $container.imagesLoaded( function(){
         $container.masonry({
           itemSelector : '.masonryImage'
         });
       });
     
     });
		
	


	

	
	// ===============================================  STELLAR - PARALLEX BGS

	$.stellar({
		horizontalScrolling: false,
		verticalOffset: 40
	});


	var stickyNavTop = $('.main-navigation').offset().top;  
  
	var stickyNav = function(){  
	var scrollTop = $(window).scrollTop();  
	       
	if (scrollTop > stickyNavTop) {   
	    $('.main-navigation').addClass('sticky');  
	} else {  
	    $('.main-navigation').removeClass('sticky');   
	}  
	};  
	  
	stickyNav();  
	  
	$(window).scroll(function() {  
	    stickyNav();  
	});  



	// ===============================================


	



	// ===============================================  OWL CAROUSEL

    $('.owl-carousel').owlCarousel({
			    loop:true,
			    margin:10,
			    autoplay: 3000,
			    nav: false,
			    responsiveClass:true,
			    responsive:{
			        0:{
			            items:1,
			        },
			        600:{
			            items:3,
			        },
			        1000:{
			            items:5,
			            loop:true
			        }
			    }
		});

 			$('.owl-carousel2').owlCarousel({
			    loop:true,
			    margin:10,
			    autoplay:true,
			    items:3,
			    nav:false,
			    responsiveClass:true,
			    responsive:{
			        0:{
			            items:1,
			        },
			        600:{
			            items:3,
			        },
			        1000:{
			            items:3,
			            loop:true
			        }
			    }
		});
    
    
				$('.owl-carousel3').owlCarousel({
			    loop:true,
			    margin:10,
			    autoplay:true,
			    items:1,
			    nav:false,
			    responsiveClass:true,
			    responsive:{
			        0:{
			            items:1,
			        },
			        600:{
			            items:3,
			        },
			        1000:{
			            items:1,
			            loop:true
			        }
			    }
		});





	// ===============================================  FORM VALIDATION

	$('#defaultForm')
        .bootstrapValidator({
            message: 'This value is not valid',
            //live: 'submitted',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                username: {
                    message: 'The Name is not valid',
                    validators: {
                        notEmpty: {
                            message: 'The Name is required and can\'t be empty'
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'The Name must be more than 6 and less than 30 characters long'
                        },
                        /*remote: {
                            url: 'remote.php',
                            message: 'The username is not available'
                        },*/
                        regexp: {
                            regexp: /^[a-zA-Z0-9_\.]+$/,
                            message: 'The Name can only consist of alphabetical, number, dot and underscore'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email address is required and can\'t be empty'
                        },
                        emailAddress: {
                            message: 'The input is not a valid email address'
                        }
                    }
                },
              
            }
        })
        .on('success.form.bv', function(e) {
            // Prevent submit form
            //e.preventDefault();

            var $form     = $(e.target),
                validator = $form.data('bootstrapValidator');
            //$form.find('.alert').html('Thanks for signing up. Now you can sign in as ' + validator.getFieldElements('username').val()).show();
            $form.find('.alert').html('Thanks you, Your Message have been successfully sent !').show();
        });



        // ===============================================  GOOGLE FORM
         
            // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 15,

                    scrollwheel: false,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(-37.817314, 144.955431), 

                     disableDefaultUI: true,



                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    
                    // GREY STYLE //     styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]}]
                    
                    // BLUE STYLE
                     // styles: [{"featureType":"water","stylers":[{"color":"#6ebeab"}]},{"featureType":"road","stylers":[{"color":"#b5a15b"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f9f9f9"}]},{"featureType":"landscape","elementType":"labels.text.fill","stylers":[{"color":"#808080"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#808080"}]},{"featureType":"landscape.natural.terrain","stylers":[{"color":"#d0d0d0"}]},{}]
                
                     // NUETRAL BLUE STYLE
                	styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1a3541"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]}]

                };


                var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);


				var marker = new google.maps.Marker({
				    position: myLatlng,
				    title:"Hello World!"
				});

				// To add the marker to the map, call setMap();
				marker.setMap(map);

            }






   
      



   

});


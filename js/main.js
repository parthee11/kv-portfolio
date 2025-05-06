(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();



   // testimonial carousel
   $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    items: 1,
    smartSpeed: 1500,
    // dots: true,
    // dotsData: true,
    loop: true,
    margin: 25,
    nav : true,
    navText : [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>'
    ]
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });


   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    
    // Enhanced sticky behavior for section headers
    if ($(window).width() >= 992) {
        $('.container-fluid').each(function() {
            var containerTop = $(this).offset().top;
            var containerBottom = containerTop + $(this).outerHeight();
            var scrollPosition = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            // Check if container is in viewport
            if (scrollPosition < containerBottom && (scrollPosition + windowHeight) > containerTop) {
                // Container is in view, make its header sticky
                $(this).find('.header-content, .about-header, .education-header, .experience-header, .skills-header, .service-header, .portfolio-header, .blog-header, .testimonial-header, .contact-header').addClass('active-sticky');
            } else {
                // Container is out of view, remove sticky
                $(this).find('.header-content, .about-header, .education-header, .experience-header, .skills-header, .service-header, .portfolio-header, .blog-header, .testimonial-header, .contact-header').removeClass('active-sticky');
            }
        });
    }
    });
    
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);


/*=====================================
                Preloader
=======================================*/
$(window).on('load', function() {
    console.log('Inside window');
    $('#status').fadeOut();
    $('#preloader').delay(500).fadeOut('slow');
});

/*=====================================
               Slider 
=======================================*/
$(function() {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: true,
        nav: false,
        dots: true
    });
});
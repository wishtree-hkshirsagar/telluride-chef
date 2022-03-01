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
        autoplay: false,
        smartSpeed: 500,
        loop: true,
        autoplayHoverPause: false,
        nav: true,
        dots: false,
        navText: ["<img src='images/home-page/down-arrow.svg'>", "<img src='images/home-page/down-arrow-1.svg'>"]
    });
});
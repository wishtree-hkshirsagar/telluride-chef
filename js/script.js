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

/*=====================================
            Mobile Navigation
=======================================*/

const navBtn = $("#nav-btn");
const navbar = $("#mobile-navigation");
const navClose = $("#nav-close");

// show nav
navBtn.on("click", () => {
    console.log('inside navbtn');
    navbar.addClass("showNav");
});

// close nav
navClose.on("click", () => {
    console.log('inside closebtn');
    navbar.removeClass("showNav");
});
/*=====================================
                Preloader
=======================================*/
$(window).on('load', function() {
    console.log('Inside window');
    $('#status').fadeOut();
    $('#preloader').delay(500).fadeOut('slow');
});
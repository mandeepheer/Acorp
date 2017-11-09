// Preloader 
jQuery(function (jQuery) {
    //Preloader
    var preloader = jQuery('.preloader');
    jQuery(window).load(function () {
        preloader.remove();
    });
});
// Wow 
wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: false, // default
    live: true // default
})
wow.init();
// Bootstrap Slider 
jQuery('.carousel').carousel({
    interval: 20000
});
/**** owl carousel ****/
jQuery(document).ready(function () {
    var owl = jQuery("#testi-demo");
    owl.owlCarousel({
        itemsCustom: [
                [767, 1]
                , [992, 1]
                , [1200, 1]
                , [1500, 1]]
        , navigation: false
        , pagination: true
        , slideSpeed: 1000
        , scrollPerPage: true
        , autoPlay:true
    });
});


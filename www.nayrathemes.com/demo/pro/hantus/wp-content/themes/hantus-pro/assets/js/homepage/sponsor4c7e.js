jQuery(function($) {
    // partner-carousel
    $(".partner-carousel").owlCarousel({
    	rtl:$("html").attr("dir") == 'rtl' ? true : false,
        loop: true,
        dots: false,
        nav: false,
        margin: 30,
        autoplay: true,
        autoplayTimeout: sponsor_settings.animationSpeed,
        responsive: {
            0: {
                items: 2
            },
            700: {
                items: 4,
            },
            1000: {
                items: sponsor_settings.items
            }
        }
    });
});

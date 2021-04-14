jQuery(function($) {
    // Product Carousel
    $(".product-carousel").owlCarousel({
    	rtl:$("html").attr("dir") == 'rtl' ? true : false,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
        margin: 30,
        autoplay: true,
        autoplayTimeout:  product_settings.animationSpeed,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3
            },
            1200: {
                items: product_settings.items
            }
        }
    });
});
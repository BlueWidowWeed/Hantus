jQuery(function($) {

	// Header Slider
	var owlMainSlider = $('.header-slider');
    owlMainSlider.owlCarousel({
        rtl:$("html").attr("dir") == 'rtl' ? true : false,
        autoWidth:false,
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        singleItem: true,
        transitionStyle: "fade",
        touchDrag: true,
        mouseDrag: false,
        autoplay: true,
		autoplayTimeout: slider_settings.animationSpeed,
		animateIn: slider_settings.animateIn,
        animateOut: slider_settings.animateOut,
    });
    // Header Slide items with animate.css
    owlMainSlider.owlCarousel();
    owlMainSlider.on('translate.owl.carousel', function (event) {
        var data_anim = $("[data-animation]");
        data_anim.each(function() {
            var anim_name = $(this).data('animation');
            $(this).removeClass('animated ' + anim_name).css('opacity', '0');
        });
    });
    $("[data-delay]").each(function() {
        var anim_del = $(this).data('delay');
        $(this).css('animation-delay', anim_del);
    });
    $("[data-duration]").each(function() {
        var anim_dur = $(this).data('duration');
        $(this).css('animation-duration', anim_dur);
    });
    owlMainSlider.on('translated.owl.carousel', function() {
        var data_anim = owlMainSlider.find('.owl-item.active').find("[data-animation]");
        data_anim.each(function() {
            var anim_name = $(this).data('animation');
            $(this).addClass('animated ' + anim_name).css('opacity', '1');
        });
    });

});
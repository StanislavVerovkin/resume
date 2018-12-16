$(function () {

    "use strict";

    $.scrollIt({

        easing: 'swing',
        scrollTime: 900,
        activeClass: 'active',
        onPageChange: null,
        topOffset: -70,
        upKey: 38,
        downKey: 40

    });

    let win = $(window);


    win.on("scroll", function () {
        let wScrollTop = $(window).scrollTop();

        if (wScrollTop > 150) {
            $(".navbar").addClass("navbar-colored");
        } else {
            $(".navbar").removeClass("navbar-colored");
        }
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $('.navbar .bars').click(function () {
        $(this).toggleClass('bars-rotate');
    });

    let scrollButton = $('.scroll-top-btn .fa');
    win.on('scroll', function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });

    scrollButton.on('click', function () {
        $('html,body').animate({scrollTop: 0}, 1200);
    });

    win.on('scroll', function () {
        $(".skills-progress span").each(function () {
            let bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
            let bottom_of_window =
                $(window).scrollTop() + $(window).height();
            let myVal = $(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });
});

$(window).on("load", function () {

    $('.grid').isotope({
        itemSelector: '.items'
    });
});

$('.work-image > a').magnificPopup({
    removalDelay: 300,
    type: 'image',
    gallery: {
        enabled: true
    }
});
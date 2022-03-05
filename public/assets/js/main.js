(function ($) {
    ('use strict');

    /*----------------------------------------*/
    /*  Preloader  
/*----------------------------------------*/
    var windows = $(window);
    windows.on('load', function () {
        $('.preloader-activate').removeClass('preloader-active');
    });
    jQuery(window).on('load', function () {
        setTimeout(function () {
            jQuery('.open_tm_preloader').addClass('loaded');
        }, 1000);
    });

    /*----------------------------------------*/
    /*  Check if element exists
/*----------------------------------------*/
    $.fn.elExists = function () {
        return this.length > 0;
    };

    /*--
        Custom script to call Background
        Image & Color from html data attribute
    -----------------------------------*/
    $('[data-bg-image]').each(function () {
        var $this = $(this),
            $image = $this.data('bg-image');
        $this.css('background-image', 'url(' + $image + ')');
    });
    $('[data-bg-color]').each(function () {
        var $this = $(this),
            $color = $this.data('bg-color');
        $this.css('background-color', $color);
    });

    /*----------------------------------------*/
    /*  WOW
/*----------------------------------------*/
    new WOW().init();

    /*---------------------------------------
		Header Sticky
---------------------------------*/
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 210) {
            $('.header-sticky').addClass('sticky');
        } else {
            $('.header-sticky').removeClass('sticky');
        }
    });

    /*----------------------------------------*/
    /*  HasSub Item
/*----------------------------------------*/
    $('.hassub-item li.hassub a, .frequently-item li.has-sub a').on(
        'click',
        function () {
            $(this).removeAttr('href');
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp();
            } else {
                element.addClass('open');
                element.children('ul').slideDown();
                element.siblings('li').children('ul').slideUp();
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp();
            }
        }
    );

    /*---------------------------------------
		Swiper All Slider
---------------------------------*/

    /* ---Main Slider--- */
    if ($('.main-slider').elExists()) {
        var swiper = new Swiper('.main-slider', {
            loop: true,
            slidesPerView: 1,
            speed: 750,
            autoplay: {
                delay: 4000,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                type: 'bullets',
            },
        });
    }
    $('.main-slider').hover(
        function () {
            this.swiper.autoplay.stop();
        },
        function () {
            this.swiper.autoplay.start();
        }
    );

    /* ---Main Slider Two--- */
    if ($('.main-slider-2').elExists()) {
        var swiper = new Swiper('.main-slider-2', {
            loop: true,
            slidesPerView: 1,
            speed: 750,
            autoplay: {
                delay: 4000,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
            navigation: {
                nextEl: '.slide-button-next',
                prevEl: '.slide-button-prev',
            },
        });
    }
    $('.main-slider-2').hover(
        function () {
            this.swiper.autoplay.stop();
        },
        function () {
            this.swiper.autoplay.start();
        }
    );

    /* --- Product Slider--- */
    if ($('.product-slider').elExists()) {
        var mySwiper = new Swiper('.product-slider', {
            slidesPerView: 4,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '.product-button-next',
                prevEl: '.product-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                480: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                992: {
                    slidesPerView: 4,
                },
            },
        });
    }

    /* --- Product List Slider--- */
    if ($('.product-list-slider').elExists()) {
        var mySwiper = new Swiper('.product-list-slider', {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    slidesPerColumnFill: 'column',
                },
                768: {
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                    slidesPerGroup: 1,
                    slidesPerColumnFill: 'row',
                },
                1200: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                    slidesPerGroup: 1,
                    slidesPerColumnFill: 'row',
                },
            },
        });
    }

    /* --- Product List Slider Two--- */
    if ($('.widgets-list-slider').elExists()) {
        var mySwiper = new Swiper('.widgets-list-slider', {
            slidesPerView: 1,
            loop: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    slidesPerColumnFill: 'column',
                    spaceBetween: 5,
                },
                768: {
                    slidesPerView: 1,
                    slidesPerColumn: 2,
                    slidesPerGroup: 1,
                    slidesPerColumnFill: 'row',
                },
                992: {
                    slidesPerView: 1,
                    slidesPerColumn: 4,
                    slidesPerGroup: 1,
                    slidesPerColumnFill: 'row',
                },
            },
        });
    }
    /*--------------------------------
    Scroll To Top
-------------------------------- */
    function scrollToTop() {
        var $scrollUp = $('.scroll-to-top'),
            $lastScrollTop = 0,
            $window = $(window);

        $window.on('scroll', function () {
            var topPos = $(this).scrollTop();
            if (topPos > $lastScrollTop) {
                $scrollUp.removeClass('show');
            } else {
                if ($window.scrollTop() > 200) {
                    $scrollUp.addClass('show');
                } else {
                    $scrollUp.removeClass('show');
                }
            }
            $lastScrollTop = topPos;
        });

        $scrollUp.on('click', function (evt) {
            $('html, body').animate({
                    scrollTop: 0,
                },
                600
            );
            evt.preventDefault();
        });
    }

    scrollToTop();


})(jQuery);
$(function () {

    $('.header__btn').on('click', function () {
        $('.rightside-menu').removeClass('open-menu');

    });
    $('.rightside-menu__close').on('click', function () {
        $('.rightside-menu').addClass('open-menu');

    });

    $('.top__slider').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true
    });

    $('.contact__slider').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: true,
        arrows: false
    });

    $('.article__slider-box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slide-left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-slide-right.svg" alt="arrow right"></button>',
    });




    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living'
        }
    });



})
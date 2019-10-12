$(function(){

    $('.header__slider').slick({
        fade: true,
        asNavFor: '.header__dots',
        prevArrow: '<img class="header__slider-arrow-left" src="img/arrow-left.svg" alt="arrow">',
        nextArrow: '<img class="header__slider-arrow-right" src="img/arrow-right.svg" alt="arrow">'
    });

    $('.header__dots').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider'
    })
});
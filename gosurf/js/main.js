$(function(){

$('.header__slider').slick({
    infinite: true,
    fade: true,
    asNavFor: '.slider-dots',
    prevArrow: '<img class="slider-arrows slider-arrows-left" src="img/arrows-left.svg" alt="">',
    nextArrow: '<img class="slider-arrows slider-arrows-right" src="img/arrows-right.svg" alt="">',
});
$('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    focusOnSelect: true,
    asNavFor: '.header__slider',
});
  
});
$(function(){
  //MAIN TOP SLIDER
  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="./images/svg/slider-arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="./images/svg/slider-arrow-right.svg" alt=""></button>',
  });
  //PRODUCTS SLIDER
  $('.products-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    prevArrow: '<button class="products-slider__slider-btn products-slider__slider-btnprev"><img src="./images/svg/slider-arrow-left--black.svg" alt=""></button>',
    nextArrow: '<button class="products-slider__slider-btn products-slider__slider-btnnext"><img src="./images/svg/slider-arrow-right--black.svg" alt=""></button>',
  })  
  //TABS
  $('.tab').on('click', function(e){
    e.preventDefault();

    $($(this).siblings()).removeClass('tab--active');
    $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
  });
  $('.product-item__favor-btn').on('click', function() {
    $(this).toggleClass('product-item__favor-btn--active');
  });
  //form styler
  $('.filter-style').styler();

  $('.filter__item-drop, .filter__extra').click(function(e){
    e.preventDefault();
    $(this).toggleClass('filter__item-drop--active');
    $(this).siblings('.aside-filter__content').slideToggle('fast');
  });

  $('#catalogFilterForm').submit(function(e){
    //e.preventDefault();
  });

  /* change product item view (grid or line) */
  $('.catalog__filter-btn--grid').click(function(e){
    $('.catalog__filter-btn').removeClass('catalog__filter-btn--active');
    $(this).addClass('catalog__filter-btn--active');
    $('.catalog__product-list').removeClass('catalog__product-list--list');    
  });

  $('.catalog__filter-btn--line').click(function(e){
    $('.catalog__filter-btn').removeClass('catalog__filter-btn--active');
    $(this).addClass('catalog__filter-btn--active');
    $('.catalog__product-list').addClass('catalog__product-list--list');
  });
  /* range input */  
  $(".js-range-slider").ionRangeSlider({
    skin: "round",
    type: 'double',
    hide_from_to: true,
    grid: false,

  });
    
});

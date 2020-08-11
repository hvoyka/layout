$(function(){
  //MAIN PAGE SLIDER
  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="./images/svg/slider-arrow-left.svg" alt=""></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="./images/svg/slider-arrow-right.svg" alt=""></button>',
  })
  //TABS
  $('.tab').on('click', function(e){
    e.preventDefault();
    $('.tab').removeClass('tab--active');
    $('.tabs-content').removeClass('tabs-content--active');
    $(this).addClass('tab--active');
    $($(this).attr('href')).addClass('tabs-content--active');
  })
  
});

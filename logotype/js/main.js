$(function(){
    //gamburger menu
    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    });
    //SLIDER TOP
    $('.slider__inner').slick({
        nextArrow: '<button type="button" class="slick-next slick-arrow-btn"></button>',
        prevArrow: '<button type="button" class="slick-prev slick-arrow-btn"></button>',
    });
    sliderArrowsPos();
    function sliderArrowsPos () {
        //position for slider arrows, like they in container
        let sliderItemContainer =  $('.slider__inner .slick-active .container');
        let ofl = $(sliderItemContainer).offset().left;
        $('.slider__inner .slick-prev').css("left", ofl+15);
        $('.slider__inner .slick-next').css("right", ofl+15);
    }
    $('select').styler();
    //NEWS SLIDER
    $('.news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-next slick-arrow-btn"></button>',
        prevArrow: '<button type="button" class="slick-prev slick-arrow-btn"></button>',
    });

    window.addEventListener('resize', function(event){
        sliderArrowsPos();
    });

    
});

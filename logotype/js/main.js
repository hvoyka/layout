$(function(){
    $('.slider__inner').slick({
        nextArrow: '<button type="button" class="slick-next slick-arrow-btn"></button>',
        prevArrow: '<button type="button" class="slick-prev slick-arrow-btn"></button>',
    });
    sliderArrowsPos();
    function sliderArrowsPos () {
        //position for slider arrows, like they in container
        let sliderItemContainer =  $('.slick-active .container');
        let ofl = $(sliderItemContainer).offset().left;
        console.log(sliderItemContainer, ofl);
        $('.slick-prev').css("left", ofl+15);
        $('.slick-next').css("right", ofl+15);
        console.log('arrow pos');
    }
    

    window.addEventListener('resize', function(event){
        sliderArrowsPos();
      });
});

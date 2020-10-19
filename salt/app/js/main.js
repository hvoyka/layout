$(function () {


  $('.main-slider__box').slick({
    dots: true,
    infinite: false,
    speed: 300,
    prevArrow: false,
    nextArrow: false
  });
  $('.spotlight__video-preview').magnificPopup({
    items: {
         src: 'https://www.youtube.com/watch?v=YltblC65z8E'
       },
    type: 'iframe',
    iframe: {
          markup: '<div class="mfp-iframe-scaler">'+
                  '<div class="mfp-close"></div>'+
                  '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                  '</div>', 
          patterns: {
              youtube: {
                  index: 'youtube.com/', 
                  id: 'v=', 
                  src: '//www.youtube.com/embed/%id%?autoplay=1' 
              }
           },
           srcAction: 'iframe_src', 
       }
  });
});
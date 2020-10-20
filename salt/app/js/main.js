$(function () {

  /* main slider */
  $('.main-slider__box').slick({
    dots: true,
    infinite: true,
    speed: 300,
    prevArrow: false,
    nextArrow: false
  });
  /* video popup */
  $('.spotlight__video-wrapper').magnificPopup({
    items: {
      src: 'https://www.youtube.com/watch?v=YltblC65z8E'
    },
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
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

  /* burger */
  $('.header__burg').on('click', function () {
    $('.js-nav-list').slideToggle();
  })

  /* to top btn */
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 500) {
      $('.js-to-top').fadeIn();
    } else {
      $('.js-to-top').fadeOut();
    }
  });
  $(".js-to-top").on('click', function () {
    $('html, body').animate({
      scrollTop: $(".header").offset().top
    }, 2000);
  });

  /* findout btn */

  $(".js-findout-btn").on('click', function () {
    $('html, body').animate({
      scrollTop: $(".what__title").offset().top
    }, 2000);
  });
});
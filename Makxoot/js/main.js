window.onload = function () {

  /* TOP MAIN SLIDER */
  var mainSlider = new Swiper('.main-slider__wrapper', {
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  })

  /* CLIENTS SLIDER */
  var clientsSlider = new Swiper('.clients__slider', {
    loop: true,
    /* slidesPerView: 2,
    spaceBetween: 105, */
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      1244: {
        slidesPerView: 2,
        spaceBetween: 105,
      },
    }
  })

  /* RATE */
  const rateBtns = document.querySelector('.rate__btns');
  const priceSums = document.querySelectorAll('.tariff-plans__price-sum');
  rateBtns.addEventListener('click', function (e) {    
    if(e.target.classList.contains('rate__btn--year') && !e.target.classList.contains('rate__btn--active')){
      priceSums.forEach(price => {
        price.textContent = price.textContent * 11;
      })
    }
    if(e.target.classList.contains('rate__btn--month') && !e.target.classList.contains('rate__btn--active')){
      console.log('/11')
      priceSums.forEach(price => {
        price.textContent = price.textContent / 11;
      })
    }
    document.querySelectorAll('.rate__btn').forEach(item => {
      item.classList.remove('rate__btn--active');
    })
    e.target.classList.add('rate__btn--active');    
  })
};
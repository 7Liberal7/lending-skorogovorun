$(function () {
  $('.technique__wrapper-right').slick({
    arrows: true,
    dots: false,
    swipe: false,
    slidesToShow: 1,
    prevArrow: '<button class="slick-next slick__btn" type="button"><svg class="icon slick__svg slick__svg--left" style="width: 30px; height: 30px;"><use xlink:href="images/spriteimages/left.svg#left"></use></svg></button>',
    nextArrow: '<button class="slick-prev slick__btn" type="button"><div class="users__wrapper"></div></button>'
  });
});

$(function () {
  $('.users__wrap').slick({
    arrows: true,
    dots: false,
    swipe: false,
    slidesToShow: 1,
    prevArrow: '<button class="slick-next slick__btn" type="button"><img class="users__slick-img" src="images/arrow-left.png"></button>',
    nextArrow: '<button class="slick-prev slick__btn" type="button"><img class="users__slick-img" src="images/arrow-right.png"></button>'
  });
});

$(function () {
  $('.info__slider-wrapper').slick({
    arrows: true,
    dots: false,
    swipe: false,
    slidesToShow: 1,
    prevArrow: '<button class="slick-next slick__btn" type="button"><img class="info__slick-img" src="images/arrow-left.png"></button>',
    nextArrow: '<button class="slick-prev slick__btn" type="button"><img class="info__slick-img" src="images/arrow-right.png"></button>'
  });
});

// document.querySelector('.technique__wrapper-popup').addEventListener('click', video);

// function video() {
//   document.querySelector('.technique__wrapper-popup').classList.toggle('technique__wrapper-popup--active');
// }
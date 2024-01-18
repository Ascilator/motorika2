$(function () {
  $('.burger').click(function () {
    $('.mobile_menu').toggleClass('_active');
    $('body').toggleClass('_lock');
    $('.burger').toggleClass('_active');
  });

  $('.mobile_menu>.manu_link').click(function () {
    $('.mobile_menu').toggleClass('_active');
    $('body').toggleClass('_lock');
    $('.burger').toggleClass('_active');
  });

  setInterval(() => {
    $('._app').toggleClass('_active');
  }, 4000);

  $('.slider_body').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 1000,
    arrows: true,
    prevArrow: $('.slider_prev'),
    nextArrow: $('.slider_next'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.coaches_slider_body').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 1000,
    arrows: true,
    prevArrow: $('.coaches_slider_prev'),
    nextArrow: $('.coaches_slider_next'),
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

$(function(){

    $('.products__slider').slick({
      arrows: true,
      dots: false,
      infinite: false,
    //   autoplay: true,
    //   autoplaySpeed: 3000,
      prevArrow: '<button class="slick-arrow slick-prev"><svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.86009 2.51076L0.37085 12L9.85841 21.4876L9.86009 14.369L20.631 14.3673L20.631 9.62937L9.86009 9.63104L9.86009 2.51076Z" fill="white"/></svg></button>',
      nextArrow: '<button class="slick-arrow slick-next"><svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1398 2.51076L22.629 12L13.1415 21.4876L13.1398 14.369L2.3689 14.3673L2.3689 9.62937L13.1398 9.63104L13.1398 2.51076Z" fill="white"/></svg></button>',
      responsive: [
        {
          breakpoint: 600,
          settings: {
            arrows: false
          }
        }
      ]
    });

    $('.burger__menu').on('click', function(){
      $('.burger__menu').toggleClass('burger__menu--active');
      $('.header__menu-list').toggleClass('header__menu-list--active');
    });

    $('.header__menu-link').on('click', function(){
        $('.burger__menu').removeClass('burger__menu--active');
        $('.header__menu-list').removeClass('header__menu-list--active');
    });

});
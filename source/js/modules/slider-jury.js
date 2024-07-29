import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const initJurySlider = () => {
  new Swiper('.jury__slider .swiper', {
    loop: true,
    freeMode: true,
    slidesPerView: 1,

    modules: [Navigation],

    navigation: {
      nextEl: '.jury__controls-button--next',
      prevEl: '.jury__controls-button--prev',
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
        allowTouchMove: false,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        allowTouchMove: false,
      },
    },
  });
};

export { initJurySlider };

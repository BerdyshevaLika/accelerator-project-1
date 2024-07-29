import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const initReviewsSlider = () => {
  new Swiper('.reviews__container .swiper', {
    loop: false,
    freeMode: true,
    slidesPerView: 1,
    allowTouchMove: false,

    modules: [Navigation],

    navigation: {
      nextEl: '.reviews__controls-button--next',
      prevEl: '.reviews__controls-button--prev',
    },
  });
};

export { initReviewsSlider };

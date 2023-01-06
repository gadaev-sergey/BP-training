import { auto } from '@popperjs/core';
import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const swiperTruth = new Swiper('.swiper-truth', {
  slidesPerView: 1,
  speed: 400,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperGallery = new Swiper('.gallery__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  speed: 400,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperPrice = new Swiper('.swiper-price', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  autoHeight: true,
  speed: 400,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

let swiperWorker = null,
    isActive = false;

swiperFunc();
window.addEventListener('resize', () => swiperFunc())

function swiperFunc() {
  const initNeeded = window.innerWidth <= 768;

  if(initNeeded && !isActive) {
    swiperWorker = new Swiper('.swiper-worker', {
      slidesPerView: 'auto',
      spaceBetween: 7,
      autoHeight: true,
      speed: 400,
    });
    isActive = true;
  }
  if(!initNeeded && isActive) {
    swiperWorker.destroy(true, true);
    isActive = false;
  }
}

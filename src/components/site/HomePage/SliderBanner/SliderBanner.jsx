import React from 'react';
import styles from './SliderBanner.module.scss';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import SliderBannerItem from '../SliderBannerItem/SliderBannerItem';
import clsx from 'clsx';
const SliderBanner = () => {
  const params = {
    spaceBetween: 16,
    slidesPerView: 'auto',
    slideClass: 'swiper-slide-category',
    // containerClass: 'swiper-category',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  return (
    <div className={clsx(styles.wrap)}>
      <Swiper {...params}>
        <div>
          <SliderBannerItem preview={'./img/banner-1.webp'} text="Снизили комиссию стима до 14% 🔥" />
        </div>
        <div>
          <SliderBannerItem preview={'./img/banner-1.webp'} text="Снизили комиссию стима до 14% 🔥" />
        </div>
        <div>
          <SliderBannerItem preview={'./img/banner-1.webp'} text="Снизили комиссию стима до 14% 🔥" />
        </div>
        <div>
          <SliderBannerItem preview={'./img/banner-1.webp'} text="Снизили комиссию стима до 14% 🔥" />
        </div>
        <div>
          <SliderBannerItem preview={'./img/banner-1.webp'} text="Снизили комиссию стима до 14% 🔥" />
        </div>
        <div>
          <SliderBannerItem preview={'./img/banner-1.webp'} text="Снизили комиссию стима до 14% 🔥" />
        </div>
      </Swiper>
    </div>
  );
};

export default SliderBanner;

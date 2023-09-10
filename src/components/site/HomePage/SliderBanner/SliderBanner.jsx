import React, { useEffect } from 'react';
import styles from './SliderBanner.module.scss';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import SliderBannerItem from '../SliderBannerItem/SliderBannerItem';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { getBannerList } from '../../../../redux/actions/banner/getBannerList';
import { useSelector } from 'react-redux';
import { imgPath } from '../../../../utils/imgPath';
const SliderBanner = () => {
  const params = {
    spaceBetween: 16,
    slidesPerView: 'auto',
    slideClass: 'swiper-slide-category',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  };
  const {
    getBannerList: { data: bannerList },
  } = useSelector((state) => state.banner);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBannerList());
  }, []);

  return (
    <div className={clsx(styles.wrap)}>
      <Swiper {...params}>
        {bannerList?.map((bannerItem) => (
          <div>
            <SliderBannerItem preview={imgPath(bannerItem?.preview)} text={bannerItem?.name} slug={bannerItem?.support ? `/support/${bannerItem?.support?.slug}` : bannerItem?.game ? bannerItem?.game?.slug : bannerItem?.parentGame ? bannerItem?.parentGame?.slug : ''} />
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderBanner;

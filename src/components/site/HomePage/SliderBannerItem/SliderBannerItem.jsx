import React from 'react';
import styles from './SliderBannerItem.module.scss';
import clsx from 'clsx';
const SliderBannerItem = ({ preview, text }) => {
  return (
    <>
      <div className={clsx(styles.wrap)} style={{ backgroundImage: `url(${preview})` }}>
        <div className={clsx(styles.text)}>{text}</div>
      </div>
    </>
  );
};

export default SliderBannerItem;

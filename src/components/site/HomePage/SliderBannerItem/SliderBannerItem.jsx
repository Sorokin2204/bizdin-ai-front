import React from 'react';
import styles from './SliderBannerItem.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
const SliderBannerItem = ({ preview, text, slug }) => {
  return (
    <>
      <Link to={slug} className={clsx(styles.wrap)} style={{ backgroundImage: `url(${preview})` }}>
        <div className={clsx(styles.text)}>{text}</div>
      </Link>
    </>
  );
};

export default SliderBannerItem;

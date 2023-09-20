import React from 'react';
import styles from './MobileNavBar.module.scss';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
const MobileNavBar = () => {
  const data = [
    {
      slug: '/',
      icon: '../img/home.svg',
    },
    {
      slug: '/profile',
      icon: '../img/shop.svg',
    },
    {
      slug: '/order/checkout',
      icon: '../img/account.svg',
    },
  ];
  const location = useLocation();
  return (
    <>
      <div className={clsx(styles.wrap)}>
        {data?.map((item) => (
          <Link to={item?.slug} style={{ WebkitMaskImage: `url(${item?.icon})` }} className={clsx(styles.item, location.pathname == item.slug && styles.itemActive)}></Link>
        ))}
      </div>
    </>
  );
};

export default MobileNavBar;

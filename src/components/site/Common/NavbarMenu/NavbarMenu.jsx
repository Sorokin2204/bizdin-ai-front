import React from 'react';
import styles from './NavbarMenu.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
const NavbarMenu = () => {
  const data = [
    {
      label: 'Каталог',
      slug: '/',
      icon: '../img/catalog.svg',
    },
    {
      label: 'Отзывы',
      slug: '/reviews',
      icon: '../img/heart.svg',
    },
    {
      label: 'Поддержка',
      slug: '/support',
      icon: '../img/support.svg',
    },
  ];
  return (
    <>
      <div className={clsx(styles.list)}>
        {data?.map((item) => (
          <Link to={item.slug} className={clsx(styles.item)}>
            <div style={{ WebkitMaskImage: `url(${item?.icon})` }} alt="" className={clsx(styles.icon)} />
            <div className={clsx(styles.name)}>{item.label}</div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default NavbarMenu;

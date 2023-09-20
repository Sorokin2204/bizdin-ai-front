import React from 'react';
import styles from './NavbarMenu.module.scss';
import clsx from 'clsx';
import { Link, useLocation, useNavigate } from 'react-router-dom';
export const menu = [
  {
    label: 'Каталог',
    slug: '/',
    icon: '../img/catalog.svg',
  },
  {
    label: 'Отзывы',
    slug: '/feedback',
    icon: '../img/heart.svg',
  },
  {
    label: 'Поддержка',
    slug: '/support',
    icon: '../img/support.svg',
  },
];
const NavbarMenu = () => {
  const location = useLocation();
  return (
    <>
      <div className={clsx(styles.list)}>
        {menu?.map((item, index) =>
          location.pathname == '/' && index == 0 ? (
            <></>
          ) : (
            <Link to={item.slug} className={clsx(styles.item)}>
              <div style={{ WebkitMaskImage: `url(${item?.icon})` }} alt="" className={clsx(styles.icon)} />
              <div className={clsx(styles.name)}>{item.label}</div>
            </Link>
          ),
        )}
      </div>
    </>
  );
};

export default NavbarMenu;

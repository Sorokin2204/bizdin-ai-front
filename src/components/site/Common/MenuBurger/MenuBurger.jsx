import React, { useState } from 'react';
import styles from './MenuBurger.module.scss';
import clsx from 'clsx';
import { menu } from '../NavbarMenu/NavbarMenu';
import { Link, useLocation } from 'react-router-dom';
const MenuBurger = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();
  return (
    <>
      {' '}
      <div
        className={clsx(styles.btn, show && styles.btnShow)}
        onClick={() => {
          setShow(!show);
        }}></div>{' '}
      {show && (
        <div className={clsx(styles.wrap)}>
          <div className={clsx(styles.list)}>
            {menu?.map((item, index) =>
              location.pathname == '/' && index == 0 ? (
                <></>
              ) : (
                <Link
                  to={item.slug}
                  onClick={() => {
                    setShow(false);
                  }}
                  className={clsx(styles.item)}>
                  <div style={{ WebkitMaskImage: `url(${item?.icon})` }} alt="" className={clsx(styles.icon)} />
                  <div className={clsx(styles.name)}>{item.label}</div>
                </Link>
              ),
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MenuBurger;

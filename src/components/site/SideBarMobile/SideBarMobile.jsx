import React from 'react';
import styles from './SideBarMobile.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { dataMenu } from '../SideBar/SideBar';
import clsx from 'clsx';
const SideBarMobile = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.list)}>
          {dataMenu
            ?.sort((a, b) => a.mobileOrder - b.mobileOrder)
            ?.map((item) => (
              <Link to={item?.slug} className={clsx(styles.item, pathname == item?.slug && styles.itemActive)}>
                <div className={clsx(styles.icon)} style={{ WebkitMaskImage: `url(${item?.icon})` }}></div>

                <div className={clsx(styles.label)}>{item?.mobileLabel}</div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default SideBarMobile;

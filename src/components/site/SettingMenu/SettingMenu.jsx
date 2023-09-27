import React from 'react';
import styles from './SettingMenu.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setActiveSettingOption } from '../../../redux/slices/app.slice';
const SettingMenu = () => {
  const { activeSettingOption } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const data = [
    {
      icon: './img/account.svg',
      label: 'Edit profile',
    },
    {
      icon: './img/password.svg',
      label: 'Password',
    },
    {
      icon: './img/bell.svg',
      label: 'Notifications',
    },
    {
      icon: './img/setting-2.svg',
      label: 'General',
    },
    {
      icon: './img/database.svg',
      label: 'Data controls',
    },
    {
      icon: './img/data.svg',
      label: 'Data source',
    },
    {
      delete: true,
      icon: './img/close.svg',
      label: 'Delete account',
    },
  ];
  return (
    <>
      <div className={clsx(styles.list)}>
        <div className={clsx(styles.itemActiveBorder, activeSettingOption == 'Delete account' && styles.itemActiveBorderDelete)} style={{ top: `${(activeSettingOption == 'Delete account' ? 47.3 : 40 + 4) * data?.findIndex((item) => item?.label == activeSettingOption) + 1}px` }}></div>
        {data?.map((item) => (
          <>
            {item?.delete && <div className={clsx(styles.divider)}></div>}

            <div
              className={clsx(styles.item, item?.label == activeSettingOption && styles.itemActive, item?.delete && styles.itemDelete)}
              onClick={() => {
                dispatch(setActiveSettingOption(item?.label));
              }}>
              {' '}
              <div className={clsx(styles.icon)} style={{ WebkitMaskImage: `url(${item?.icon})` }}></div>
              {item?.label}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default SettingMenu;

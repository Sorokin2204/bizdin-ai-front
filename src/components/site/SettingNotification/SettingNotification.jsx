import React from 'react';
import styles from './SettingNotification.module.scss';
import clsx from 'clsx';
import Switch from '../Switch/Switch';
import Checkbox from '../Checkbox/Checkbox';
const SettingNotification = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.head)}>
          <div className={clsx(styles.title)}>Notifications</div> <Switch />
        </div>
        <div className={clsx(styles.title2)}>From Bizdin AI</div>
        <Checkbox label={'Mentioned'} />
      </div>
    </>
  );
};

export default SettingNotification;

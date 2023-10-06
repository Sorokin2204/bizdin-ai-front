import React from 'react';
import styles from './SettingAvatar.module.scss';
import clsx from 'clsx';
const SettingAvatar = () => {
  return (
    <div>
      <div className={clsx(styles.label)}>Avatar</div>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.left)}>
          <img src="https://i.pravatar.cc/112" alt="" className={clsx(styles.img)} />
        </div>
        <div className={clsx(styles.right)}>
          <div className={clsx(styles.btn)}>Upload new image</div>
          <div className={clsx(styles.text)}>
            At least 800x800 px recommended. <br /> JPG or PNG and GIF is allowed
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingAvatar;

import React from 'react';
import styles from './SettingDataControl.module.scss';
import Button from '../Button/Button';
import Switch from '../Switch/Switch';
import clsx from 'clsx';
const SettingDataControl = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.title)}>Data controls</div>
        <div className={clsx(styles.line)}>
          <div className={clsx(styles.label)}>Chat history & training</div>
          <Switch />
        </div>
        <div className={clsx(styles.text)}>
          Save new chats on this browser to your history and allow them to be used to improve our models. Unsaved chats will be deleted from our systems within 30 days. This setting does not sync across browsers or devices. <a href="#">Learn more</a>
        </div>
        <div className={clsx(styles.line)}>
          <div className={clsx(styles.label2)}>Export data</div>
          <Button style={{ width: '72px', fontSize: '14px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--bg-3)' }}>Export</Button>
        </div>
      </div>
    </>
  );
};

export default SettingDataControl;

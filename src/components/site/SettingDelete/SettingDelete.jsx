import React from 'react';
import styles from './SettingDelete.module.scss';
import InputMain from '../InputMain/InputMain';
import Button from '../Button/Button';
import clsx from 'clsx';
const SettingDelete = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.title)}>We’re sorry to see you go</div>
        <div className={clsx(styles.text)}>
          Warning: Deleting your account will permanently remove all of your data and cannot be undone. This includes your profile, chats, comments, and any other information associated with your account. Are you sure you want to proceed with deleting your account?
        </div>
        <InputMain label="Your password" placeholder="Password" icon="./img/lock.svg" />
        <Button style={{ marginTop: '24px', borderRadius: '12px', backgroundColor: '#d84c10', opacity: 0.2 }}>Delete account</Button>
      </div>
    </>
  );
};

export default SettingDelete;

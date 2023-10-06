import React from 'react';
import styles from './SettingPassoword.module.scss';
import clsx from 'clsx';
import InputMain from '../InputMain/InputMain';
import Button from '../Button/Button';
import Switch from '../Switch/Switch';
const SettingPassoword = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.title)}>Password</div>
        <InputMain label={'Old password'} placeholder={'Password'} icon={'./img/lock.svg'} />
        <InputMain label={'New password'} placeholder={'New password'} icon={'./img/lock.svg'} helper={'Minimum 8 characters'} /> <InputMain label={'Confirm new password'} placeholder={'Confirm new password'} icon={'./img/lock.svg'} helper={'Minimum 8 characters'} />
        <div className={clsx(styles.btnBox)}>
          {' '}
          <Button style={{ borderRadius: '12px' }}>Change password</Button>
        </div>
      </div>
    </>
  );
};

export default SettingPassoword;

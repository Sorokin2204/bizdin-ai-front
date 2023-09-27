import React from 'react';
import styles from './SettingPassoword.module.scss';
import clsx from 'clsx';
import InputMain from '../InputMain/InputMain';
import Button from '../Button/Button';
import Switch from '../Switch/Switch';
const SettingPassoword = () => {
  return (
    <>
      <div className="wrap">
        <div className={clsx(styles.title)}>Password</div>
        <InputMain label={'Old password'} placeholder={'Password'} icon={'./img/lock.svg'} />
        <InputMain label={'New password'} placeholder={'New password'} icon={'./img/lock.svg'} helper={'Minimum 8 characters'} /> <InputMain label={'Confirm new password'} placeholder={'Confirm new password'} icon={'./img/lock.svg'} helper={'Minimum 8 characters'} />
        <Button style={{ marginTop: '32px', borderRadius: '12px' }}>Change password</Button>
      </div>
    </>
  );
};

export default SettingPassoword;

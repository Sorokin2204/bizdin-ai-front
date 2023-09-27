import React from 'react';
import styles from './SettingEditProfile.module.scss';
import InputMain from '../InputMain/InputMain';
import clsx from 'clsx';
import Button from '../Button/Button';
import SettingAvatar from '../SettingAvatar/SettingAvatar';
const SettingEditProfile = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.title)}>Edit profile </div>
        <SettingAvatar />
        <InputMain label={'Name'} placeholder={'Username or email'} icon={'./img/account.svg'} />
        <InputMain label={'Location'} placeholder={'Location'} icon={'./img/location.svg'} />
        <Button style={{ marginTop: '32px', borderRadius: '12px' }}>Save changes</Button>
      </div>
    </>
  );
};

export default SettingEditProfile;

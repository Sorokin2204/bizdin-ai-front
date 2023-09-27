import React from 'react';
import styles from './AddDataSource.module.scss';
import clsx from 'clsx';
import InputMain from '../InputMain/InputMain';
import Button from '../Button/Button';
import { CSSTransition } from 'react-transition-group';
const AddDataSource = ({ show }) => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <InputMain label={'Base type'} placeholder={'Base type'} icon={'./img/database-2.svg'} />
        <InputMain label={'Login'} placeholder={'Login'} icon={'./img/account.svg'} />
        <InputMain label={'Password'} placeholder={'Password'} icon={'./img/lock.svg'} />
        <Button style={{ marginTop: '32px', borderRadius: '12px' }}>Change password</Button>
      </div>
    </>
  );
};

export default AddDataSource;

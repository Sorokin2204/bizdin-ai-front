import React from 'react';
import styles from './LoginAttempt.module.scss';
import clsx from 'clsx';
import Breadcrumbs from '../../../components/site/Breadcrumbs/Breadcrumbs';
import Thanks from '../../../components/site/Thanks/Thanks';
const LoginAttempt = () => {
  return (
    <>
      <Breadcrumbs list={[{ name: 'Вход' }]} />
      <Thanks title="Ссылка отправлена" text="Ссылка для входа отправлена на daniil.sorokin.228@gmail.com" />
    </>
  );
};

export default LoginAttempt;

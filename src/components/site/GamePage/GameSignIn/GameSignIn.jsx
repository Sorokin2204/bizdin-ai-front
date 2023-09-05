import React from 'react';
import styles from './GameSignIn.module.scss';
import Button from '../../Common/Button/Button';
import clsx from 'clsx';
const GameSignIn = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.text)}>Войдите для получения купона на скидку 5%</div>
        <Button>Войти</Button>
      </div>
    </>
  );
};

export default GameSignIn;

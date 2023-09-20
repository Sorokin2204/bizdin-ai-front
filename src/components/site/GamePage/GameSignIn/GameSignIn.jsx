import React from 'react';
import styles from './GameSignIn.module.scss';
import Button from '../../Common/Button/Button';
import clsx from 'clsx';
import { useNavigate } from 'react-router';
const GameSignIn = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.text)}>Войдите для получения купона на скидку 5%</div>
        <Button
          onClick={() => {
            navigate('/login');
          }}>
          Войти
        </Button>
      </div>
    </>
  );
};

export default GameSignIn;

import React from 'react';
import styles from './Thanks.module.scss';
import clsx from 'clsx';
const Thanks = ({ title, text }) => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <img src="../img/mail.webp" alt="" className={clsx(styles.img)} />
        <div className={clsx(styles.title)}>{title}</div>
        <div className={clsx(styles.text)}>{text}</div>
      </div>
    </>
  );
};

export default Thanks;

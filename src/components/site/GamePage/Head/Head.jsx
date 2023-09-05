import React from 'react';
import styles from './Head.module.scss';
import clsx from 'clsx';
const Head = ({ image, title, text }) => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <img src={image} alt="" className={clsx(styles.image)} />

        <div className={clsx(styles.content)}>
          <div className={clsx(styles.title)}>{title}</div>
          <div className={clsx(styles.offical)}>Официальное пополнение</div>
          <div className={clsx(styles.text)}>{text}</div>
        </div>
      </div>
    </>
  );
};

export default Head;

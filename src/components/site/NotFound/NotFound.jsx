import React from 'react';
import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
const NotFound = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.content)}>
          <Link to="/">
            <img src="../img/logo.svg" alt="" className={clsx(styles.logo)} />
          </Link>
          <img src="../img/not-found.webp" alt="" className={clsx(styles.img)} />
          <div className={clsx(styles.title)}>Страница не найдена</div>
          <div className={clsx(styles.text)}>
            Попробуйте начать с <Link to="/">главной</Link> (code: 404)
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;

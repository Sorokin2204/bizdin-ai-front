import React from 'react';
import styles from './Loading.module.scss';
import clsx from 'clsx';
const Loading = ({ fixed }) => {
  return (
    <>
      <div className={clsx(styles.wrap, fixed && styles.fixed)}>
        <span className={clsx(styles.loader)}></span>
      </div>
    </>
  );
};

export default Loading;

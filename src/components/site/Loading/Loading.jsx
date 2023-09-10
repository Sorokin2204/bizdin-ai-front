import React from 'react';
import styles from './Loading.module.scss';
import clsx from 'clsx';
const Loading = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <span className={clsx(styles.loader)}></span>
      </div>
    </>
  );
};

export default Loading;

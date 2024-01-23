import React from 'react';
import styles from './Loading.module.scss';
import clsx from 'clsx';
const Loading = () => {
  return (
    <>
      <span className={clsx(styles.loader)}></span>
    </>
  );
};

export default Loading;

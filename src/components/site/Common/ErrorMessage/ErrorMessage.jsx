import React from 'react';
import styles from './ErrorMessage.module.scss';
import clsx from 'clsx';
const ErrorMessage = ({ text }) => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.text)}>{text}</div>
      </div>
    </>
  );
};

export default ErrorMessage;

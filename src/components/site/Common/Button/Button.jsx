import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';
const Button = ({ children, lg, onClick }) => {
  return (
    <button onClick={onClick} className={clsx(styles.btn, lg && styles.btnLg)}>
      {children}
    </button>
  );
};

export default Button;

import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';
const Button = ({ children, icon, style, onClick }) => {
  return (
    <button className={clsx(styles.btn)} style={style} onClick={onClick}>
      {icon && <div className={clsx(styles.icon)} style={{ WebkitMaskImage: `url(${icon})` }}></div>}

      {children}
    </button>
  );
};

export default Button;

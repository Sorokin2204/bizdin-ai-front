import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';
const Button = ({ children, icon, style }) => {
  return (
    <button className={clsx(styles.btn)} style={style}>
      {icon && <div className={clsx(styles.icon)} style={{ WebkitMaskImage: `url(${icon})` }}></div>}

      {children}
    </button>
  );
};

export default Button;

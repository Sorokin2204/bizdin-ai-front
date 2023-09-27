import React, { useState } from 'react';
import styles from './Switch.module.scss';
import clsx from 'clsx';
const Switch = ({ label }) => {
  const [active, setActive] = useState(true);
  return (
    <>
      <div className={clsx(styles.wrap)}>
        {label && <div className={clsx(styles.label)}>{label}</div>}
        <div
          className={clsx(styles.switch, active && styles.switchActive)}
          onClick={() => {
            setActive(!active);
          }}></div>
      </div>
    </>
  );
};

export default Switch;

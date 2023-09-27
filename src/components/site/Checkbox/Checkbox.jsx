import React, { useState } from 'react';
import styles from './Checkbox.module.scss';
import clsx from 'clsx';
const Checkbox = ({ label }) => {
  const [value, setValue] = useState(true);
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.label)}>{label}</div>
        <div
          className={clsx(styles.checkbox, value && styles.checkboxActive)}
          onClick={() => {
            setValue(!value);
          }}></div>
      </div>
    </>
  );
};

export default Checkbox;

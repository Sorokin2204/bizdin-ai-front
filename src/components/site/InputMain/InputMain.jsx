import React, { useState } from 'react';
import styles from './InputMain.module.scss';
import clsx from 'clsx';
const InputMain = ({ icon, label, placeholder, helper, type2 }) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('');
  return (
    <>
      <div className={clsx(styles.label, type2 && styles.labelType2)}>{label}</div>
      <div className={clsx(type2 && styles.wrapInput2, styles.wrap, (active || value) && styles.wrapFocus)}>
        {icon && <div className={clsx(styles.icon)} style={{ WebkitMaskImage: `url(${icon})` }}></div>}

        <input
          onFocus={() => {
            setActive(true);
          }}
          onBlur={() => {
            setActive(false);
          }}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type="text"
          placeholder={placeholder}
          className={clsx(styles.input)}
        />
      </div>
      {helper && <div className={clsx(styles.helper)}>{helper}</div>}
    </>
  );
};

export default InputMain;

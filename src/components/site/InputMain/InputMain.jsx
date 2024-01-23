import React, { useState } from 'react';
import styles from './InputMain.module.scss';
import clsx from 'clsx';
import { Logger } from 'sass';
const InputMain = ({ icon, label, placeholder, helper, type2, form, name, rules = { required: true } }) => {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('');
  const error = form?.formState?.errors?.[name]?.message;

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
          {...form?.register(name, rules)}
        />
      </div>
      {helper && <div className={clsx(styles.helper)}>{helper}</div>}
      {error && <div className={clsx(styles.helper, styles.error)}>{error}</div>}
    </>
  );
};

export default InputMain;

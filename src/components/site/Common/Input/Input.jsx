import React from 'react';
import styles from './Input.module.scss';
import clsx from 'clsx';
const Input = ({ label, placeholder, isSelect, grey, lg }) => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.label, grey && styles.labelThin)}>{label}</div>
        {isSelect ? (
          <select className={clsx(styles.input, grey && styles.inputGrey, lg && styles.inputBig)}>
            <option>Global</option>
            <option>Korean</option>
          </select>
        ) : (
          <input type="text" className={clsx(styles.input, grey && styles.inputGrey, lg && styles.inputBig)} placeholder={placeholder} />
        )}
      </div>
    </>
  );
};

export default Input;

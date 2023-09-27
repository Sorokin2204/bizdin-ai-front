import React from 'react';
import styles from './Textarea.module.scss';
import clsx from 'clsx';
const Textarea = ({ label, placeholder }) => {
  return (
    <>
      {' '}
      <div className={clsx(styles.label)}>{label}</div>
      <textarea className={clsx(styles.input)} placeholder={placeholder}></textarea>
    </>
  );
};

export default Textarea;

import React from 'react';
import styles from './FilterGameItem.module.scss';
import clsx from 'clsx';
const FilterGameItem = ({ label, value, icon, color, setValue, active, disabled }) => {
  return (
    <div
      className={clsx(styles.btn, active && styles.active, disabled && styles.disabled)}
      onClick={() => {
        if (active) {
          setValue(null);
        } else {
          setValue(value);
        }
      }}>
      <div className={clsx(styles.icon)} style={{ backgroundColor: color, WebkitMaskImage: `url(${icon})` }}></div>
      <div className={clsx(styles.label)}>{label}</div>
      {active && <div className={clsx(styles.close)} style={{ WebkitMaskImage: `url(/img/close.svg)` }}></div>}
    </div>
  );
};

export default FilterGameItem;

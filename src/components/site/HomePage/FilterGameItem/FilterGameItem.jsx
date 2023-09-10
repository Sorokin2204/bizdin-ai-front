import React from 'react';
import styles from './FilterGameItem.module.scss';
import clsx from 'clsx';
import { imgPath } from '../../../../utils/imgPath';
import { useDispatch } from 'react-redux';
import { setActiveFilter } from '../../../../redux/slices/app.slice';
const FilterGameItem = ({ name, value, icon, color, active, disabled }) => {
  const dispatch = useDispatch();
  return (
    <div
      className={clsx(styles.btn, active && styles.active, disabled && styles.disabled)}
      onClick={() => {
        if (active) {
          dispatch(setActiveFilter(null));
        } else {
          dispatch(setActiveFilter(value));
        }
      }}>
      <div className={clsx(styles.icon)} style={{ backgroundColor: color, WebkitMaskImage: `url(${imgPath(icon)})` }}></div>
      <div className={clsx(styles.label)}>{name}</div>
      {active && <div className={clsx(styles.close)} style={{ WebkitMaskImage: `url(/img/close.svg)` }}></div>}
    </div>
  );
};

export default FilterGameItem;

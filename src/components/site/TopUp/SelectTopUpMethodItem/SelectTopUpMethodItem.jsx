import React, { useState } from 'react';
import styles from './SelectTopUpMethodItem.module.scss';
import clsx from 'clsx';
import { imgPath } from '../../../../utils/imgPath';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setActivePayment } from '../../../../redux/slices/app.slice';
const SelectTopUpMethodItem = ({ disabled, ...item }) => {
  const { activePayment } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={clsx(styles.item, activePayment?.id === item?.id && styles.active, disabled && styles.disabled)}
        onClick={() => {
          dispatch(setActivePayment(item));
        }}>
        <img src={item.icon} alt="" className={clsx(styles.icon)} />
        <div className={clsx(styles.name)}>{item.name}</div>
        <div className={clsx(styles.comission)}>{`${item.comission}% комиссия`}</div>
      </div>
    </>
  );
};

export default SelectTopUpMethodItem;

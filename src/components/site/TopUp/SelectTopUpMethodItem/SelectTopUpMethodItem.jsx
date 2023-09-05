import React, { useState } from 'react';
import styles from './SelectTopUpMethodItem.module.scss';
import clsx from 'clsx';
const SelectTopUpMethodItem = ({ name, comission, icon, disabled }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      <div
        className={clsx(styles.item, active && styles.active, disabled && styles.disabled)}
        onClick={() => {
          setActive(!active);
        }}>
        <img src={icon} alt="" className={clsx(styles.icon)} />
        <div className={clsx(styles.name)}>{name}</div>
        <div className={clsx(styles.comission)}>{`${comission}% комиссия`}</div>
      </div>
    </>
  );
};

export default SelectTopUpMethodItem;

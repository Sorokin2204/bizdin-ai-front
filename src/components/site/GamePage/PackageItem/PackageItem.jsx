import React, { useState } from 'react';
import styles from './PackageItem.module.scss';
import clsx from 'clsx';
import { currencyFormat } from '../../../../utils/currencyFormat';
const PackageItem = ({ price, discountPrice, name, outStock, icon, disabled }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={clsx(styles.item, active && styles.itemActive, disabled && styles.disabled)}
      onClick={() => {
        if (!disabled) setActive(!active);
      }}>
      <img src={icon} alt="" className={clsx(styles.icon)} />
      <div className={clsx(styles.content)}>
        <div className={clsx(styles.name)}>{name}</div>
        <div className={clsx(styles.price)}>
          <div className={clsx(styles.priceCurrent, discountPrice && styles.priceCurrentRed)}>{currencyFormat(price)}</div>
          {discountPrice && <div className={clsx(styles.priceDiscount)}>{currencyFormat(discountPrice)}</div>}
        </div>
      </div>
      {outStock && <div className={clsx(styles.outStock)}>Закончилось</div>}
    </div>
  );
};

export default PackageItem;

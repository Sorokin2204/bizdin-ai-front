import React, { useState } from 'react';
import styles from './PackageItem.module.scss';
import clsx from 'clsx';
import { currencyFormat } from '../../../../utils/currencyFormat';
import { imgPath } from '../../../../utils/imgPath';
const PackageItem = ({ active, disabled, noClick = false, onAdd, onRemove, ...item }) => {
  return (
    <div
      className={clsx(styles.item, active && styles.itemActive, noClick && styles.noClick, disabled && styles.disabled)}
      onClick={() => {
        if (!noClick && !disabled) {
          if (active) {
            onRemove(item.id);
          } else {
            onAdd(item);
          }
        }
      }}>
      <img src={imgPath(item.icon)} alt="" className={clsx(styles.icon)} />
      <div className={clsx(styles.content)}>
        <div className={clsx(styles.name)}>{item.name}</div>
        <div className={clsx(styles.price)}>
          <div className={clsx(styles.priceCurrent, item.discountPrice && styles.priceCurrentRed)}>{currencyFormat(item.price)}</div>
          {item.discountPrice ? <div className={clsx(styles.priceDiscount)}>{currencyFormat(item.discountPrice)}</div> : <></>}
        </div>
      </div>
      {disabled && <div className={clsx(styles.outStock)}>Закончилось</div>}
    </div>
  );
};

export default PackageItem;

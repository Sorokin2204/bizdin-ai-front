import React from 'react';
import styles from './CouponItem.module.scss';
import clsx from 'clsx';
const CouponItem = () => {
  return (
    <>
      <div className={clsx(styles.item)}>
        <div className={clsx(styles.itemContent)}>
          {' '}
          <div className={clsx(styles.itemPercent)}>-5%</div>
          <div className={clsx(styles.itemLeft)}>
            <div className={clsx(styles.itemCode)}>CDXDPRG</div>
            <div className={clsx(styles.itemCodeLabel)}>За регистрацию</div>
          </div>
          <div className={clsx(styles.itemRight)}>
            <div className={clsx(styles.itemTimeLabel)}>Использовать до</div>
            <div className={clsx(styles.itemTime)}>5 сентября 2023 г. в 10:10</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponItem;

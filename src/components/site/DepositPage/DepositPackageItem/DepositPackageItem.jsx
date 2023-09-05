import React from 'react';
import styles from './DepositPackageItem.module.scss';
import { currencyFormat } from '../../../../utils/currencyFormat';
import StatusDeposit from '../StatusDeposit/StatusDeposit';
import clsx from 'clsx';
const DepositPackageItem = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.content)}>
          {' '}
          <img src="../img/pack-1.webp" alt="" className={clsx(styles.icon)} />
          <div className={clsx(styles.box)}>
            <div className={clsx(styles.name)}>60 + 6 печатей</div>
            <div className={clsx(styles.price)}>{currencyFormat(89)}</div>
          </div>
        </div>
        <StatusDeposit status={'delivered'} />
      </div>
    </>
  );
};

export default DepositPackageItem;

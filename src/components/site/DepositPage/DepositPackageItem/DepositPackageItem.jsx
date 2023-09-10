import React from 'react';
import styles from './DepositPackageItem.module.scss';
import { currencyFormat } from '../../../../utils/currencyFormat';
import StatusDeposit from '../StatusDeposit/StatusDeposit';
import clsx from 'clsx';
import { imgPath } from '../../../../utils/imgPath';
const DepositPackageItem = ({ icon, price, name, status }) => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.content)}>
          {' '}
          <img src={imgPath(icon)} alt="" className={clsx(styles.icon)} />
          <div className={clsx(styles.box)}>
            <div className={clsx(styles.name)}>{name}</div>
            <div className={clsx(styles.price)}>{currencyFormat(price)}</div>
          </div>
        </div>
        <StatusDeposit status={status} />
      </div>
    </>
  );
};

export default DepositPackageItem;

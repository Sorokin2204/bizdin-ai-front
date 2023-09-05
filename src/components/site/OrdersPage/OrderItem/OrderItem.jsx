import React from 'react';
import styles from './OrderItem.module.scss';
import StatusDeposit from '../../DepositPage/StatusDeposit/StatusDeposit';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
const OrderItem = () => {
  const data = [];
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.head)}>
          <div className={clsx(styles.headLeft)}>
            <Link to="/deposit" className={clsx(styles.headLink)}>
              Покупка №46439
            </Link>
            <div className={clsx(styles.headDate)}>4 сентября 2023 г. в 17:32</div>
          </div>
          <StatusDeposit status={'wait'} />
        </div>
        <div className={clsx(styles.content)}>
          <div className={clsx(styles.list)}>
            <div className={clsx(styles.item)}>
              <img src="../img/game-1.webp" />
            </div>{' '}
            <div className={clsx(styles.item)}>
              <img src="../img/pack-1.webp" />
              <StatusDeposit status={'delivered'} circle />
            </div>
          </div>
          <div className={clsx(styles.price)}>89 ₽</div>
        </div>
      </div>
    </>
  );
};

export default OrderItem;

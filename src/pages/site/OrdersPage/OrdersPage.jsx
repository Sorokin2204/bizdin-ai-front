import React from 'react';
import styles from './OrdersPage.module.scss';
import clsx from 'clsx';
import OrderItem from '../../../components/site/OrdersPage/OrderItem/OrderItem';
const OrdersPage = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.title)}>Покупки</div>
        <OrderItem />
        <div className={clsx(styles.notFound)}>Вы еще не делали покупок</div>
      </div>
    </>
  );
};

export default OrdersPage;

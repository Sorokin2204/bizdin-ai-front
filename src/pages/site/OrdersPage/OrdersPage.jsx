import React, { useEffect } from 'react';
import styles from './OrdersPage.module.scss';
import clsx from 'clsx';
import OrderItem from '../../../components/site/OrdersPage/OrderItem/OrderItem';
import { useDispatch } from 'react-redux';
import { getOrderList } from '../../../redux/actions/order/getOrderList';
import { useSelector } from 'react-redux';
import Breadcrumbs from '../../../components/site/Breadcrumbs/Breadcrumbs';
const OrdersPage = () => {
  const {
    getOrderList: { data: orderList },
  } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderList());

    const timerRefreshOrderList = setInterval(() => {
      dispatch(getOrderList());
    }, 30000);
    return () => {
      clearInterval(timerRefreshOrderList);
    };
  }, []);

  return (
    <>
      <Breadcrumbs list={[{ name: 'Профиль', path: '/profile' }, { name: 'Покупки' }]} />
      <div class="container">
        <div className={clsx(styles.wrap)}>
          {' '}
          <div className={clsx(styles.title)}>Покупки</div>
          {orderList?.length >= 1 ? orderList?.map((itemOrder) => <OrderItem {...itemOrder} />) : <div className={clsx(styles.notFound)}>Вы еще не делали покупок</div>}
        </div>
      </div>
    </>
  );
};

export default OrdersPage;

import React from 'react';
import styles from './CartPage.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Cart from '../../../components/site/CartPage/Cart/Cart';
const CartPage = () => {
  return (
    <>
      {true ? (
        <>
          <Cart />
          <div className={clsx(styles.clearCart)}>Очистить корзину</div>
        </>
      ) : (
        <>
          {' '}
          <div className={clsx(styles.empty)}>
            <img src="../img/empty-cart.webp" alt="" className={clsx(styles.emptyImage)} />
            <div className={clsx(styles.emptyTitle)}>Пустая корзина</div>
            <div className={clsx(styles.emptyText)}>
              Для добавления в корзину выберите товар на <Link to="/">главной странице</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CartPage;

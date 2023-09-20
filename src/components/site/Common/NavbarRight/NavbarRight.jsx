import React from 'react';
import styles from './NavbarRight.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { currencyFormat } from '../../../../utils/currencyFormat';
import clsx from 'clsx';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import { useSelector } from 'react-redux';
const NavbarRight = () => {
  const navigate = useNavigate();
  const {
    authUser: { data: dataAuth, loading: loadingAuth, error: errorAuth },
  } = useSelector((state) => state.user);
  return (
    <>
      <div className={clsx(styles.wrap)}>
        {loadingAuth ? (
          <></>
        ) : (
          <>
            <Link to="/order/checkout" className={clsx(styles.cart, localStorage.getItem('cart') && styles.cartActive)}>
              <div style={{ WebkitMaskImage: `url(../img/cart.svg)` }} alt="" />
            </Link>
            {dataAuth ? (
              <>
                <Link to="/profile/orders" className={clsx(styles.orders)}>
                  <div style={{ WebkitMaskImage: `url(../img/orders.svg)` }} alt="" />
                </Link>

                <div className={clsx(styles.balance)}>{currencyFormat(dataAuth?.balance)}</div>
                <Link to="/profile" style={{ textDecoration: 'none' }}>
                  {' '}
                  <Avatar color={dataAuth?.color}>{dataAuth?.name?.slice(0, 2)}</Avatar>
                </Link>
                {/* <Link className={clsx(styles.profile)}>DA</Link> */}
              </>
            ) : (
              <div className={clsx(styles.auth)}>
                <Button
                  onClick={() => {
                    navigate('/login');
                  }}>
                  Вход
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default NavbarRight;

import React from 'react';
import styles from './NavbarRight.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { currencyFormat } from '../../../../utils/currencyFormat';
import clsx from 'clsx';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
const NavbarRight = () => {
  const signIn = true;
  const navigate = useNavigate();
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <Link to="/cart" className={clsx(styles.cart, true && styles.cartActive)}>
          <div style={{ WebkitMaskImage: `url(./img/cart.svg)` }} alt="" />
        </Link>
        {signIn ? (
          <>
            <Link to="/orders" className={clsx(styles.orders)}>
              <div style={{ WebkitMaskImage: `url(./img/orders.svg)` }} alt="" />
            </Link>

            <div className={clsx(styles.balance)}>{currencyFormat(0)}</div>
            <Link to="/profile" style={{ textDecoration: 'none' }}>
              {' '}
              <Avatar color={'pumpkin'}>DA</Avatar>
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
      </div>
    </>
  );
};

export default NavbarRight;

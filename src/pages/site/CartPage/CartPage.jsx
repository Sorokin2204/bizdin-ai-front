import React, { useEffect } from 'react';
import styles from './CartPage.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import Cart from '../../../components/site/CartPage/Cart/Cart';
import { useDispatch } from 'react-redux';
import { getSingleGame } from '../../../redux/actions/game/getSingleGame';
import { useSelector } from 'react-redux';
import { resetCreateGame, resetGetSingleGame } from '../../../redux/slices/game.slice';
import Breadcrumbs from '../../../components/site/Breadcrumbs/Breadcrumbs';
import Thanks from '../../../components/site/Thanks/Thanks';
import { resetCreateUser } from '../../../redux/slices/user.slice';
const CartPage = () => {
  const dispatch = useDispatch();
  const {
    createUser: { data: createUserData },
  } = useSelector((state) => state.user);
  const {
    getSingleGame: { data: gameData },
  } = useSelector((state) => state.game);
  useEffect(() => {
    let dataCart = localStorage.getItem('cart');
    if (dataCart) {
      dataCart = JSON.parse(dataCart);
    } else {
    }
    dispatch(getSingleGame({ client: true, id: dataCart?.gameId }));
  }, []);
  const onClearCart = () => {
    dispatch(resetGetSingleGame());
    localStorage.removeItem('cart');
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (createUserData) {
      dispatch(resetGetSingleGame());
      dispatch(resetCreateUser());
      localStorage.removeItem('cart');
      navigate('/order/attempt');
    }
  }, [createUserData]);

  return (
    <>
      <Breadcrumbs list={[{ name: 'Оформление покупки' }]} />
      {gameData && localStorage.getItem('cart') ? (
        <>
          <Cart />
          <div className={clsx(styles.clearCart)} onClick={onClearCart}>
            Очистить корзину
          </div>
        </>
      ) : (
        <div class="container">
          <div className={clsx(styles.empty)}>
            <img src="../img/empty-cart.webp" alt="" className={clsx(styles.emptyImage)} />
            <div className={clsx(styles.emptyTitle)}>Пустая корзина</div>
            <div className={clsx(styles.emptyText)}>
              Для добавления в корзину выберите товар на <Link to="/">главной странице</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartPage;

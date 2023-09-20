import React from 'react';
import styles from './CartAttempt.module.scss';
import Breadcrumbs from '../../../components/site/Breadcrumbs/Breadcrumbs';
import Thanks from '../../../components/site/Thanks/Thanks';
const CartAttempt = () => {
  return (
    <>
      <Breadcrumbs list={[{ name: 'Оформление покупки' }]} />
      <div class="container">
        {' '}
        <Thanks title="Заказ создан" text="Ссылка для входа в созданный аккаунт отправлена на почту" />
      </div>
    </>
  );
};

export default CartAttempt;

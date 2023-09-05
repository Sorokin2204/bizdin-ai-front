import React from 'react';
import styles from './CouponPage.module.scss';
import clsx from 'clsx';
import CouponItem from '../../../components/site/CouponPage/CouponItem/CouponItem';
const CouponPage = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.title)}>Купоны</div>
        <CouponItem />
        <div className={clsx(styles.notFound)}>
          <div className={clsx(styles.notFoundTitle)}>Нет доступных купонов</div>
          <div className={clsx(styles.notFoundText)}>Получайте купоны со скидками за покупки</div>
        </div>
      </div>
    </>
  );
};

export default CouponPage;

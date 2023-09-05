import React from 'react';
import styles from './DepositPage.module.scss';
import Button from '../../../components/site/Common/Button/Button';

import clsx from 'clsx';
import StatusDeposit from '../../../components/site/DepositPage/StatusDeposit/StatusDeposit';
import AccordionMethod from '../../../components/site/DepositPage/AccordionMethod/AccordionMethod';
import DepositPackageItem from '../../../components/site/DepositPage/DepositPackageItem/DepositPackageItem';
const DepositPage = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.title)}>Покупка #46367</div>
        <div className={clsx(styles.price)}>518 ₽</div>
        <StatusDeposit status={'success'} />

        <div className={clsx(styles.game)}>
          <img src="../img/game-1.webp" alt="" className={clsx(styles.gameIcon)} />
          <div className={clsx(styles.gameName)}>Honkai: Star Rail</div>
        </div>
        <div className={clsx(styles.list)}>
          <div className={clsx(styles.tag)}>
            <div className={clsx(styles.tagLabel)}>UID</div>
            <div className={clsx(styles.tagValue)}>626342355</div>
          </div>
          <div className={clsx(styles.tag)}>
            <div className={clsx(styles.tagLabel)}>Сервер</div>
            <div className={clsx(styles.tagValue)}>Америка (UID 6***)</div>
          </div>
        </div>
        <div className={clsx(styles.btnBox)}>
          <Button lg>Перейти к оплате</Button>
        </div>
        <AccordionMethod />
      </div>
      <DepositPackageItem />
      <div className={clsx(styles.review)}>
        <img src="../img/dony-heart.webp" className={clsx(styles.reviewImg)}></img>
        <div className={clsx(styles.reviewText)}>Оставь свой отзыв об этой покупке и получи бонус на следующую в свой DWallet после его публикации!</div>
        <div className={clsx(styles.btnBoxReview)}>
          {' '}
          <Button lg>Оставить отзыв</Button>
        </div>

        <div className={clsx(styles.reviewSubtext)}>Акция действует только по этой кнопке</div>
      </div>
    </>
  );
};

export default DepositPage;

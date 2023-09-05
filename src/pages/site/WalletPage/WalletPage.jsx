import React from 'react';
import styles from './WalletPage.module.scss';
import Button from '../../../components/site/Common/Button/Button';
import { currencyFormat } from '../../../utils/currencyFormat';
import clsx from 'clsx';
const WalletPage = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.title)}>DWallet</div>

        <div className={clsx(styles.block)}>
          <div className={clsx(styles.head)}>
            <div className={clsx(styles.balance)}>
              <div className={clsx(styles.balanceTitle)}>Баланс</div>
              <div className={clsx(styles.balanceCurrent)}>{currencyFormat(0)}</div>
            </div>
            <Button className={clsx(styles.topUpBtn)}>Пополнить</Button>
          </div>
          <div className={clsx(styles.content)}>
            <div className={clsx(styles.empty)}>
              <img src="../img/empty.webp" className={clsx(styles.emtpyImage)} />
              <div className={clsx(styles.emtpyTitle)}>Пусто</div>
              <div className={clsx(styles.emtpyText)}>У вас еще не было ни реферальных отчислений, ни кэшбека, ни бонусов и даже возвратов</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletPage;

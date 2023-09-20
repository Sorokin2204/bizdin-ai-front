import React from 'react';
import styles from './WalletPage.module.scss';
import Button from '../../../components/site/Common/Button/Button';
import { currencyFormat } from '../../../utils/currencyFormat';
import clsx from 'clsx';
import Breadcrumbs from '../../../components/site/Breadcrumbs/Breadcrumbs';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TransactionItem from '../../../components/site/TopUp/TransactionItem/TransactionItem';
const WalletPage = () => {
  const navigate = useNavigate();
  const {
    authUser: { data: authUserData },
  } = useSelector((state) => state.user);
  return (
    <>
      <Breadcrumbs list={[{ name: 'Профиль', path: '/profile' }, { name: 'Dwallet' }]} />
      <div class="container">
        <div className={clsx(styles.wrap)}>
          <div className={clsx(styles.title)}>DWallet</div>

          <div className={clsx(styles.block)}>
            <div className={clsx(styles.head)}>
              <div className={clsx(styles.balance)}>
                <div className={clsx(styles.balanceTitle)}>Баланс</div>
                <div className={clsx(styles.balanceCurrent)}>{currencyFormat(authUserData?.balance)}</div>
              </div>
              <Button
                onClick={() => {
                  navigate('/profile/wallet/topup');
                }}
                className={clsx(styles.topUpBtn)}>
                Пополнить
              </Button>
            </div>
            <div className={clsx(styles.content)}>
              {authUserData?.transactions?.length == 0 ? (
                <div className={clsx(styles.empty)}>
                  <img src="../img/empty.webp" className={clsx(styles.emtpyImage)} />
                  <div className={clsx(styles.emtpyTitle)}>Пусто</div>
                  <div className={clsx(styles.emtpyText)}>У вас еще не было ни реферальных отчислений, ни кэшбека, ни бонусов и даже возвратов</div>
                </div>
              ) : (
                authUserData?.transactions?.map((itemTrans) => <TransactionItem {...itemTrans} />)
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletPage;

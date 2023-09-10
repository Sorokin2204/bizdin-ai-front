import React from 'react';
import styles from './ProfilePage.module.scss';
import { currencyFormat } from '../../../utils/currencyFormat';
import { Link, Navigate } from 'react-router-dom';
import clsx from 'clsx';
import Avatar from '../../../components/site/Common/Avatar/Avatar';
import RequisiteItem from '../../../components/site/ProfilePage/RequisiteItem/RequisiteItem';
import { useSelector } from 'react-redux';
const ProfilePage = () => {
  const {
    authUser: { data: dataAuth, loading: loadingAuth, error: errorAuth },
  } = useSelector((state) => state.user);

  return (
    <>
      {errorAuth ? (
        <Navigate to="/" />
      ) : dataAuth ? (
        <div className={clsx(styles.wrap)}>
          <div className={clsx(styles.account)}>
            <Avatar color={dataAuth?.color} lg authType="google">
              {dataAuth?.name?.slice(0, 2)}
            </Avatar>

            {/* <div className={clsx(styles.avatar)}></div> */}
            <div className={clsx(styles.accountInfo)}>
              <div className={clsx(styles.nick)}>{dataAuth?.name}</div>
              <div className={clsx(styles.email)}>{dataAuth?.email}</div>
            </div>
          </div>
          <div className={clsx(styles.actions)}>
            <Link to="/topup" className={clsx(styles.wallet)}>
              DWallet
              <div className={clsx(styles.walletBalance)}>{currencyFormat(dataAuth?.balance)}</div>
            </Link>
            <Link to="/profile/orders" className={clsx(styles.orders)}>
              Покупки
            </Link>
            <Link to="/coupon" className={clsx(styles.coupons)}>
              Купоны
            </Link>
          </div>
          <div className={clsx(styles.referal)}>
            <div className={clsx(styles.referalText)}>Отправьте свою реферальную ссылку знакомому и получайте отчисления в 1% на свой DWallet со всех его покупок. Накопленный баланс можно тратить на любые покупки</div>
            <div className={clsx(styles.referalLink)}>https://donatov.net/inv/37119</div>
          </div>
          <div className={clsx(styles.requisites)}>
            <div className={clsx(styles.requisitesTitle)}>Мои реквизиты</div>
            <RequisiteItem />
            <div className={clsx(styles.requisitesNotFound)}>Нет покупок по реквизитам</div>
          </div>
          <div className={clsx(styles.exit)}>Выйти</div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProfilePage;

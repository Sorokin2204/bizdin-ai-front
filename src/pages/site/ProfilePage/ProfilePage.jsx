import React, { useEffect } from 'react';
import styles from './ProfilePage.module.scss';
import { currencyFormat } from '../../../utils/currencyFormat';
import { Link, Navigate } from 'react-router-dom';
import clsx from 'clsx';
import Avatar from '../../../components/site/Common/Avatar/Avatar';
import RequisiteItem from '../../../components/site/ProfilePage/RequisiteItem/RequisiteItem';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authUser } from '../../../redux/actions/user/authUser';
import Breadcrumbs from '../../../components/site/Breadcrumbs/Breadcrumbs';
import { getSaveGameInputs } from '../../../redux/actions/order/getSaveGameInputs';
import Loading from '../../../components/site/Loading/Loading';
import { resetRemoveSaveGameInput } from '../../../redux/slices/order.slice';
const ProfilePage = () => {
  const {
    authUser: { data: dataAuth, loading: loadingAuth, error: errorAuth },
  } = useSelector((state) => state.user);
  const {
    removeSaveGameInput: { data: removeData, loading: removeLoading },
    getSaveGameInputs: { data: gameInputs, loading: gameInputsLoading },
  } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSaveGameInputs());
  }, []);
  useEffect(() => {
    if (removeData) {
      dispatch(getSaveGameInputs());
      dispatch(resetRemoveSaveGameInput());
    }
  }, [removeData]);

  const onLogout = () => {
    localStorage.removeItem('auth-token');
    dispatch(authUser());
  };
  return (
    <>
      {dataAuth && (
        <>
          {' '}
          <Breadcrumbs list={[{ name: 'Профиль' }]} />
          <div class="container">
            <div className={clsx(styles.wrap)}>
              <div className={clsx(styles.account)}>
                <Avatar color={dataAuth?.color} lg authType={dataAuth?.type}>
                  {dataAuth?.name?.slice(0, 2)}
                </Avatar>

                {/* <div className={clsx(styles.avatar)}></div> */}
                <div className={clsx(styles.accountInfo)}>
                  <div className={clsx(styles.nick)}>{dataAuth?.name}</div>
                  <div className={clsx(styles.email)}>{dataAuth?.email}</div>
                </div>
              </div>
              <div className={clsx(styles.actions)}>
                <Link to="/profile/wallet" className={clsx(styles.wallet)}>
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
                <div className={clsx(styles.referalLink)}>https://donatov.net/inv/{dataAuth?.id}</div>
              </div>
              <div className={clsx(styles.requisites)}>
                <div className={clsx(styles.requisitesTitle)}>Мои реквизиты</div>
                {gameInputs?.length !== 0 ? gameInputs?.map((input) => <RequisiteItem {...input} />) : <div className={clsx(styles.requisitesNotFound)}>Нет покупок по реквизитам</div>}
              </div>
              <div className={clsx(styles.exit)} onClick={onLogout}>
                Выйти
              </div>
            </div>
          </div>
          {removeLoading && <Loading fixed />}
        </>
      )}
    </>
  );
};

export default ProfilePage;

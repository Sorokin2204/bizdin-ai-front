import React, { useEffect } from 'react';
import styles from './DepositPage.module.scss';
import Button from '../../../components/site/Common/Button/Button';

import clsx from 'clsx';
import StatusDeposit from '../../../components/site/DepositPage/StatusDeposit/StatusDeposit';
import AccordionMethod from '../../../components/site/DepositPage/AccordionMethod/AccordionMethod';
import DepositPackageItem from '../../../components/site/DepositPage/DepositPackageItem/DepositPackageItem';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router';
import { getOrderSingle } from '../../../redux/actions/order/getOrderSingle';
import { useSelector } from 'react-redux';
import NotFound from '../../../components/site/NotFound/NotFound';
import SiteLayout from '../SiteLayout/SiteLayout';
import { imgPath } from '../../../utils/imgPath';
import { setActivePayment } from '../../../redux/slices/app.slice';
import Breadcrumbs from '../../../components/site/Breadcrumbs/Breadcrumbs';
import { currencyFormat } from '../../../utils/currencyFormat';
const DepositPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    getOrderSingle: { data: orderSingle, error: orderError },
  } = useSelector((state) => state.order);
  useEffect(() => {
    dispatch(getOrderSingle(id));
  }, []);
  useEffect(() => {
    if (orderSingle) {
      dispatch(setActivePayment(orderSingle?.typePayment));
    }
  }, [orderSingle]);
  const navigate = useNavigate();
  return (
    <>
      {orderError ? (
        <NotFound />
      ) : (
        <SiteLayout>
          {' '}
          <Breadcrumbs list={[{ name: `Покупка #${orderSingle?.id}` }]} />
          <div className={clsx(styles.wrap)}>
            <div className={clsx(styles.title)}>Покупка #{orderSingle?.id}</div>
            <div className={clsx(styles.price)}>
              {currencyFormat(
                orderSingle?.orderPackages
                  ?.map((itemPack) => itemPack?.package.price)
                  .reduce((accumulator, currentValue) => {
                    return accumulator + currentValue;
                  }, 0),
              )}
            </div>
            <StatusDeposit status={orderSingle?.status} />

            <div className={clsx(styles.game)}>
              <img src={imgPath(orderSingle?.game?.preview)} alt="" className={clsx(styles.gameIcon)} />
              <div className={clsx(styles.gameName)}>{orderSingle?.game?.name}</div>
            </div>
            <div className={clsx(styles.list)}>
              {orderSingle?.orderGameInputs?.map((itemInput) => (
                <div className={clsx(styles.tag)}>
                  <div className={clsx(styles.tagLabel)}>{itemInput?.gameInput?.label}</div>
                  <div className={clsx(styles.tagValue)}>{itemInput?.gameInputOption?.label || itemInput?.value}</div>
                </div>
              ))}
            </div>
            <div className={clsx(styles.btnBox)}>
              <Button lg>Перейти к оплате</Button>
            </div>
            <AccordionMethod />
          </div>
          {orderSingle?.status !== 'wait' && orderSingle?.orderPackages?.map((itemPack) => <DepositPackageItem {...itemPack?.package} status={itemPack?.status} />)}
          <div className={clsx(styles.review)}>
            <img src="../img/dony-heart.webp" className={clsx(styles.reviewImg)}></img>
            <div className={clsx(styles.reviewText)}>Оставь свой отзыв об этой покупке и получи бонус на следующую в свой DWallet после его публикации!</div>
            <div className={clsx(styles.btnBoxReview)}>
              {' '}
              <Button
                lg
                onClick={() => {
                  navigate('/feedback/create');
                }}>
                Оставить отзыв
              </Button>
            </div>

            <div className={clsx(styles.reviewSubtext)}>Акция действует только по этой кнопке</div>
          </div>
        </SiteLayout>
      )}
    </>
  );
};

export default DepositPage;

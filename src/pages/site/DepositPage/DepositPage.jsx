import React, { useEffect, useState } from 'react';
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
import DepositBlock from '../../../components/site/DepositPage/DepositBlock/DepositBlock';
import CreateReviewBlock from '../../../components/site/ReviewsPage/CreateReviewBlock/CreateReviewBlock';
import { useForm } from 'react-hook-form';
import { createComment } from '../../../redux/actions/comment/createComment';
import { resetGetSingleOrder } from '../../../redux/slices/order.slice';
import { resetCreateComment } from '../../../redux/slices/comment.slice';
import ReviewItem from '../../../components/site/ReviewsPage/ReviewItem/ReviewItem';
const DepositPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const feedbackForm = useForm({
    defaultValues: {
      text: '',
      like: true,
    },
  });
  const onSubmit = (data) => {
    dispatch(
      createComment({
        ...data,
        orderId: orderSingle?.id,
      }),
    );
  };

  const {
    getOrderSingle: { data: orderSingle, error: orderError },
  } = useSelector((state) => state.order);
  const {
    authUser: { data: authData },
  } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getOrderSingle(id));

    let timerRefreshOrder = setInterval(() => {
      dispatch(getOrderSingle(id));
    }, 30000);
    return () => {
      clearInterval(timerRefreshOrder);
      dispatch(resetGetSingleOrder());
      dispatch(resetCreateComment());
    };
  }, []);
  useEffect(() => {
    if (orderSingle) {
      dispatch(setActivePayment(orderSingle?.typePayment));
    }
  }, [orderSingle]);
  const navigate = useNavigate();
  const [showCreateReview, setShowCreateReview] = useState(false);
  return (
    <>
      {orderError ? (
        <NotFound />
      ) : orderSingle ? (
        <SiteLayout>
          {' '}
          <Breadcrumbs list={[{ name: `Покупка #${orderSingle?.id}` }]} />
          <div class="container">
            <DepositBlock {...orderSingle} />
            {orderSingle?.status !== 'wait' && orderSingle?.orderPackages?.map((itemPack) => <DepositPackageItem {...itemPack?.package} status={itemPack?.status} />)}
            {orderSingle?.comment ? (
              <div class={styles.wrapComment}>
                <ReviewItem {...orderSingle?.comment} user={authData} order={orderSingle} />
              </div>
            ) : orderSingle?.status !== 'wait' ? (
              <>
                {' '}
                {showCreateReview ? (
                  <div className={clsx(styles.createReview)}>
                    <CreateReviewBlock feedbackForm={feedbackForm} onSubmit={onSubmit} />
                  </div>
                ) : (
                  <div className={clsx(styles.review)}>
                    <img src="../img/dony-heart.webp" className={clsx(styles.reviewImg)}></img>
                    <div className={clsx(styles.reviewText)}>Оставь свой отзыв об этой покупке и получи бонус на следующую в свой DWallet после его публикации!</div>
                    <div className={clsx(styles.btnBoxReview)}>
                      {' '}
                      <Button
                        lg
                        onClick={() => {
                          setShowCreateReview(true);
                        }}>
                        Оставить отзыв
                      </Button>
                    </div>

                    <div className={clsx(styles.reviewSubtext)}>Акция действует только по этой кнопке</div>
                  </div>
                )}
              </>
            ) : (
              <></>
            )}
          </div>
        </SiteLayout>
      ) : (
        <></>
      )}
    </>
  );
};

export default DepositPage;

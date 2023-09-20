import React, { useEffect, useState } from 'react';
import styles from './Cart.module.scss';
import SelectTopUpMethod from '../../TopUp/SelectTopUpMethod/SelectTopUpMethod';
import TopUpResult from '../../TopUp/TopUpResult/TopUpResult';
import Button from '../../Common/Button/Button';
import clsx from 'clsx';
import { data } from '../../GamePage/PackageList/PackageList';
import PackageItem from '../../GamePage/PackageItem/PackageItem';
import { resultData } from '../../../../pages/site/TouUpPage/TouUpPage';
import { useSelector } from 'react-redux';
import { imgPath } from '../../../../utils/imgPath';
import { currencyFormat } from '../../../../utils/currencyFormat';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActivePayment } from '../../../../redux/slices/app.slice';
import Input from '../../Common/Input/Input';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../../Common/ErrorMessage/ErrorMessage';
import Loading from '../../Loading/Loading';
import { createUser } from '../../../../redux/actions/user/createUser';
import { createOrder } from '../../../../redux/actions/order/createOrder';
import { resetCreateOrder } from '../../../../redux/slices/order.slice';
import { resetGetSingleGame } from '../../../../redux/slices/game.slice';
const Cart = () => {
  const emailData = [
    {
      label: 'Ваш Email	',
      value: 'daniil.sorokin.228@gmail.com',
    },
  ];
  const {
    getSingleGame: { data: gameData },
  } = useSelector((state) => state.game);
  const {
    createOrder: { data: createData, loading: createLoading, error: createError },
  } = useSelector((state) => state.order);
  const {
    createUser: { data: createUserData, loading: createUserLoading, error: createUserError },
  } = useSelector((state) => state.user);
  const { activePayment } = useSelector((state) => state.app);
  const {
    authUser: { data: dataAuth, loading: loadingAuth, error: errorAuth },
  } = useSelector((state) => state.user);
  const [infoData, setInfoData] = useState([]);
  const [resultData, setResultData] = useState([]);
  const [packageList, setPackageList] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    let dataCart = localStorage.getItem('cart');
    if (dataCart) {
      let availablePacks = [];
      dataCart = JSON.parse(dataCart);
      availablePacks = gameData?.packages?.filter((pack) => dataCart.packageList.find((packCart) => packCart == pack.id && !pack.disabled));
      setPackageList(availablePacks);
    } else {
    }
  }, []);

  useEffect(() => {
    let arr = [];
    let dataCart = localStorage.getItem('cart');
    dataCart = JSON.parse(dataCart);
    arr = gameData?.gameInputs?.map((inputItem) => {
      let obj = { label: inputItem?.label };
      let val = dataCart?.gameInputList?.find((cartInput) => cartInput.gameInputId == inputItem.id);
      if (inputItem?.type == 'select') {
        val = inputItem.gameInputOptions?.find((itemOpt) => itemOpt.id == val.value);
        obj.value = <div className="text-monospace">{val.label}</div>;
      } else {
        obj.value = <div className="text-monospace">{val.value}</div>;
      }
      return obj;
    });
    setInfoData(arr);
  }, []);
  useEffect(() => {
    let dataCart = localStorage.getItem('cart');
    dataCart = JSON.parse(dataCart);
    if (packageList?.length !== 0 || gameData?.gameInputs?.filter((input) => input?.mainInput)?.length !== 0) {
      let total;
      if (packageList?.length !== 0) {
        total = packageList
          ?.map((item) => item.price)
          .reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
          }, 0);
      } else {
        total = parseInt(dataCart?.gameInputList?.filter((input) => input?.mainInput)?.[0]?.value);
      }

      let totalCommision;
      let commision;
      if (activePayment) {
        commision = activePayment.comission;
        totalCommision = total + Math.ceil((total / 100) * commision);
      } else {
        commision = 0;
        totalCommision = total;
      }
      let dt = [
        { label: 'Сумма пополнения', value: currencyFormat(total) },
        { label: 'Комиссия платежной системы', value: `${commision}%` },
        { label: 'К оплате', value: `~${currencyFormat(totalCommision)}` },
      ];
      setResultData(dt);
    }
  }, [activePayment, packageList]);
  useEffect(() => {
    if (!gameData) {
      setInfoData([]);
      setResultData([]);
      setPackageList(null);
      dispatch(setActivePayment(null));
    }
  }, [gameData]);
  const cartForm = useForm();

  const onSubmit = (data) => {
    let orderData = {
      ...JSON.parse(localStorage.getItem('cart')),
      gameId: gameData.id,
      typePaymentId: activePayment.id,
    };

    if (dataAuth && localStorage.getItem('auth-token')) {
      dispatch(createOrder(orderData));
    } else {
      dispatch(createUser({ email: data.email, order: orderData }));
    }
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (createData) {
      dispatch(resetGetSingleGame());
      dispatch(resetCreateOrder());
      localStorage.removeItem('cart');
      navigate(`/deposit/${createData.orderId}`);
    }
  }, [createData]);

  useEffect(() => {
    cartForm.register('typePayment', { required: { value: true, message: 'Выберите способ оплаты' } });
  }, []);
  useEffect(() => {
    cartForm.setValue('typePayment', activePayment);
    if (activePayment) {
      cartForm.trigger('typePayment');
    }
  }, [activePayment]);

  return (
    <div class="container">
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.game)}>
          <img src={imgPath(gameData.preview)} className={clsx(styles.gameIcon)} />
          <div className={clsx(styles.gameName)}>{gameData?.name}</div>
        </div>
        {packageList?.length !== 0 && (
          <>
            {' '}
            <div className={clsx(styles.title)}>Ваша покупка</div>
            <div className={clsx(styles.packageList)}>
              {packageList?.map((pack) => (
                <PackageItem {...pack} noClick />
              ))}
            </div>
          </>
        )}

        {infoData?.length !== 0 && (
          <>
            {' '}
            <div className={clsx(styles.title)}>Реквизиты доставки</div>
            <div className={clsx(styles.inputInfo)}>
              {' '}
              <TopUpResult data={infoData} />
            </div>
          </>
        )}
        {dataAuth ? (
          <div className={clsx(styles.emailInfo)}>
            {' '}
            <TopUpResult
              data={[
                {
                  label: 'Ваш Email	',
                  value: dataAuth?.email,
                },
              ]}
            />
          </div>
        ) : (
          <div className={clsx(styles.email)}>
            <Input
              label={'Ваш Email'}
              placeholder={'Email'}
              form={cartForm}
              slug="email"
              blue
              rules={{
                required: { value: true, message: 'Укажите свой email' },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Укажите свой email',
                },
              }}
            />
          </div>
        )}

        {/* <div className={clsx(styles.emailInfo)}>
          {' '}
          <TopUpResult data={emailData} />
        </div> */}

        <SelectTopUpMethod cart />
        <TopUpResult data={resultData} />
        {createUserError?.error == 'USER_EXIST' && <ErrorMessage text={'Пользователь с таким email уже существует'} />}
        {Object.keys(cartForm.formState.errors).map((key, index) => {
          if (index == 0) {
            return <ErrorMessage text={cartForm.formState.errors[key].message || 'Заполните поля'} />;
          }
        })}

        <div className={clsx(styles.btn)}>
          <Button lg onClick={cartForm.handleSubmit(onSubmit)}>
            Создать покупку
          </Button>
        </div>
        <Link to={gameData?.parentGame ? `/${gameData?.parentGame?.slug}/${gameData?.slug}` : `/${gameData?.slug}`} className={clsx(styles.changeBtn)}>
          Изменить заказ
        </Link>
        {createLoading && <Loading />}
      </div>
    </div>
  );
};

export default Cart;

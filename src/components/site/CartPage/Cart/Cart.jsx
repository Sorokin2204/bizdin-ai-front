import React from 'react';
import styles from './Cart.module.scss';
import SelectTopUpMethod from '../../TopUp/SelectTopUpMethod/SelectTopUpMethod';
import TopUpResult from '../../TopUp/TopUpResult/TopUpResult';
import Button from '../../Common/Button/Button';
import clsx from 'clsx';
import { data } from '../../GamePage/PackageList/PackageList';
import PackageItem from '../../GamePage/PackageItem/PackageItem';
import { resultData } from '../../../../pages/site/TouUpPage/TouUpPage';
const Cart = () => {
  const infoData = [
    {
      label: 'UID',
      value: <div className="text-monospace">626342355</div>,
    },
    {
      label: 'Сервер',
      value: <div className="text-monospace">Америка (UID 6***)</div>,
    },
  ];
  const emailData = [
    {
      label: 'Ваш Email	',
      value: 'daniil.sorokin.228@gmail.com',
    },
  ];
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.game)}>
          <img src={'../img/game-1.webp'} className={clsx(styles.gameIcon)} />
          <div className={clsx(styles.gameName)}>Honkai: Star Rail</div>
        </div>
        <div className={clsx(styles.title)}>Ваша покупка</div>
        <div className={clsx(styles.packageList)}>
          <PackageItem {...data[0]} disabled />
          <PackageItem {...data[1]} disabled />
        </div>
        <div className={clsx(styles.title)}>Реквизиты доставки</div>
        <div className={clsx(styles.inputInfo)}>
          {' '}
          <TopUpResult data={infoData} />
        </div>
        <div className={clsx(styles.emailInfo)}>
          {' '}
          <TopUpResult data={emailData} />
        </div>

        <SelectTopUpMethod cart />
        <TopUpResult data={resultData} />
        <div className={clsx(styles.btn)}>
          <Button lg>Создать покупку</Button>
        </div>
        <div className={clsx(styles.changeBtn)}>Изменить заказ</div>
      </div>
    </>
  );
};

export default Cart;

import React from 'react';
import styles from './SelectTopUpMethod.module.scss';
import SelectTopUpMethodItem from '../SelectTopUpMethodItem/SelectTopUpMethodItem';
import clsx from 'clsx';
const SelectTopUpMethod = ({ cart }) => {
  const data = [
    { icon: '../img/topup-1.svg', name: 'СБП', comission: 2.5 },
    { icon: '../img/topup-2.svg', name: 'Карты РФ', comission: 4 },
    { icon: '../img/topup-2.svg', name: 'Карты РФ 2', comission: 4.5 },
    { icon: '../img/topup-3.svg', name: 'Карты KZT', comission: 10 },
    { icon: '../img/topup-3.svg', name: 'Карты UAH', comission: 15 },
    { icon: '../img/topup-4.svg', name: 'Qiwi', comission: 2.5 },
    { icon: '../img/topup-4.svg', name: 'Qiwi 2', comission: 2.5 },
    { icon: '../img/topup-5.svg', name: 'ЮMoney', comission: 8 },
    { icon: '../img/topup-6.svg', name: 'TRC20', comission: 0.5 },
    { icon: '../img/topup-7.svg', name: 'TRX', comission: 4 },
  ];
  const itemCart = { icon: '../img/wallet-logo.svg', name: 'DWallet', comission: 0 };
  return (
    <>
      {!cart && <div className={clsx(styles.title)}>Способ пополнения</div>}
      <div className={clsx(styles.list)}>
        {cart && <SelectTopUpMethodItem {...itemCart} disabled />}
        {data?.map((item) => (
          <SelectTopUpMethodItem {...item} />
        ))}
      </div>
    </>
  );
};

export default SelectTopUpMethod;

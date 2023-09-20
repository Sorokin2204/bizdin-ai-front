import React from 'react';
import styles from './TouUpPage.module.scss';
import Input from '../../../components/site/Common/Input/Input';
import SelectPrice from '../../../components/site/TopUp/SelectPrice/SelectPrice';
import SelectTopUpMethod from '../../../components/site/TopUp/SelectTopUpMethod/SelectTopUpMethod';
import TopUpResult from '../../../components/site/TopUp/TopUpResult/TopUpResult';
import Button from '../../../components/site/Common/Button/Button';
import clsx from 'clsx';
import { currencyFormat } from '../../../utils/currencyFormat';
import { useForm } from 'react-hook-form';

export const resultData = [
  { label: 'Сумма пополнения', value: currencyFormat(5000) },
  { label: 'Комиссия платежной системы', value: '0%' },
  { label: 'К оплате', value: `~${currencyFormat(5000)}` },
];

const TouUpPage = () => {
  const topupForm = useForm();
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.title)}>Пополнение DWallet</div>
        <div className={clsx(styles.block)}>
          <Input label="Сумма" lg form={topupForm} slug={'sum'} />
          <SelectPrice />
          <SelectTopUpMethod />
          <TopUpResult data={resultData} />
          <div className={clsx(styles.btn)}>
            <Button lg>Перейти к оплате</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TouUpPage;

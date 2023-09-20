import React from 'react';
import styles from './TransactionItem.module.scss';
import clsx from 'clsx';
import { currencyFormat } from '../../../../utils/currencyFormat';
import moment from 'moment';
const TransactionItem = ({ createdAt, date, sum, type }) => {
  const getTextTransaction = () => {
    switch (type) {
      case 1:
        return 'Бонус за отзыв';
      case 2:
        return 'Пополнение баланса';

      default:
        break;
    }
  };
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.date)}>{moment(createdAt).format('DD.MM.YYYY').toString()}</div>
        <div className={clsx(styles.sum)}>+ {currencyFormat(sum)}</div>
        <div className={clsx(styles.text)}>{getTextTransaction(type)}</div>
      </div>
    </>
  );
};

export default TransactionItem;

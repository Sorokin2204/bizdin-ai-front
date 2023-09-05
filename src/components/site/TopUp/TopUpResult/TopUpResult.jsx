import React from 'react';
import styles from './TopUpResult.module.scss';
import clsx from 'clsx';
import { currencyFormat } from '../../../../utils/currencyFormat';
const TopUpResult = ({ data }) => {
  return (
    <>
      <div className={clsx(styles.list)}>
        {data?.map((item) => (
          <div className={clsx(styles.item)}>
            <div className={clsx(styles.label)}>{item?.label}</div>
            <div className={clsx(styles.value)}>{item?.value}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TopUpResult;

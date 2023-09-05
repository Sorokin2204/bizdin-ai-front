import React, { useState } from 'react';
import styles from './SelectPriceItem.module.scss';
import clsx from 'clsx';
import { currencyFormat } from '../../../../utils/currencyFormat';
const SelectPriceItem = ({ value }) => {
  return (
    <>
      <div className={clsx(styles.item)}>{currencyFormat(value)}</div>
    </>
  );
};

export default SelectPriceItem;

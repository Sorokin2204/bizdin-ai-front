import React from 'react';
import styles from './SelectPrice.module.scss';
import SelectPriceItem from '../SelectPriceItem/SelectPriceItem';
import clsx from 'clsx';
const SelectPrice = () => {
  const data = [500, 1000, 2000, 5000];
  return (
    <>
      <div className={clsx(styles.list)}>
        {data?.map((item, index) => (
          <SelectPriceItem value={item} />
        ))}
      </div>
    </>
  );
};

export default SelectPrice;

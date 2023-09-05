import React, { useState } from 'react';
import styles from './PackageList.module.scss';
import clsx from 'clsx';
import PackageItem from '../PackageItem/PackageItem';
import ShowMore from '../ShowMore/ShowMore';
export const data = [
  {
    price: 419,
    discountPrice: 449,
    name: 'Благословение полой луны',
    outStock: false,
    icon: '../img/pack-1.webp',
  },
  {
    price: 419,
    discountPrice: 449,
    name: 'Благословение полой луны',
    outStock: false,
    icon: '../img/pack-1.webp',
  },
  {
    price: 419,
    discountPrice: 449,
    name: 'Благословение полой луны',
    outStock: false,
    icon: '../img/pack-1.webp',
  },
  {
    price: 419,
    name: 'Благословение полой луны',
    outStock: false,
    icon: '../img/pack-1.webp',
  },
  {
    price: 419,
    discountPrice: 449,
    name: 'Благословение полой луны',
    outStock: false,
    icon: '../img/pack-1.webp',
  },
  {
    price: 419,
    discountPrice: 449,
    name: 'Благословение полой луны',
    outStock: false,
    icon: '../img/pack-1.webp',
  },
  {
    price: 419,
    discountPrice: 449,
    name: 'Благословение полой луны',
    outStock: false,
    icon: '../img/pack-1.webp',
  },
  {
    price: 419,
    name: 'Благословение полой луны',
    outStock: false,
    icon: '../img/pack-1.webp',
  },
  {
    price: 419,
    discountPrice: 449,
    name: 'Благословение полой луны',
    outStock: false,
    icon: '../img/pack-1.webp',
  },
  {
    price: 419,
    discountPrice: 449,
    name: 'Благословение полой луны',
    outStock: false,
    icon: '../img/pack-1.webp',
  },
  {
    price: 419,
    discountPrice: 449,
    name: 'Благословение полой луны',
    outStock: false,
    icon: '../img/pack-1.webp',
  },
  {
    price: 419,
    name: 'Благословение полой луны',
    outStock: false,
    icon: '../img/pack-1.webp',
  },
];
const PackageList = ({ alert }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div className={clsx(styles.wrap)}>
        {alert && <div className={clsx(styles.alert)}>{alert}</div>}
        <div className={clsx(styles.list)}>
          {data?.map((item, index) => {
            if (data?.length > 8) {
              if (!showMore) {
                if (index <= 7) {
                  return <PackageItem {...item} />;
                }
              } else {
                return <PackageItem {...item} />;
              }
            } else {
              return <PackageItem {...item} />;
            }
          })}
        </div>
        {!showMore && (
          <ShowMore
            onClick={() => {
              setShowMore(true);
            }}
          />
        )}
      </div>
    </>
  );
};

export default PackageList;

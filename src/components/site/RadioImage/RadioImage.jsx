import React, { useState } from 'react';
import styles from './RadioImage.module.scss';
import clsx from 'clsx';
import { useMediaQuery } from '../../../utils/useMediaQuery';
const RadioImage = ({ label, list }) => {
  const [active, setActive] = useState(0);
  const isMobile = useMediaQuery('(max-width: 1024px)');
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.label)}>{label}</div>

        <div className={clsx(styles.list)}>
          <div className={clsx(styles.itemActiveBorder)} style={{ left: `${(isMobile ? 169 : 192) * active}px` }}></div>
          {list?.map((item, itemIndex) => (
            <div
              className={clsx(styles.item, active == itemIndex && styles.itemActive)}
              onClick={() => {
                setActive(itemIndex);
              }}>
              <img src={item?.image} alt="" className={clsx(styles.itemImg)} />
              <div className={clsx(styles.itemName)}>{item?.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RadioImage;

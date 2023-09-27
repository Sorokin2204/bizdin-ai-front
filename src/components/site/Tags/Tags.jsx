import React, { useState } from 'react';
import styles from './Tags.module.scss';
import clsx from 'clsx';
const Tags = ({ list, long }) => {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className={clsx(styles.list)}>
        {list?.map((item, indexItem) => (
          <div
            className={clsx(styles.item, active == indexItem && styles.itemActive, long && styles.itemLong)}
            onClick={() => {
              setActive(indexItem);
            }}>
            {item}
          </div>
        ))}{' '}
        <div className={clsx(styles.all)}>All</div>
      </div>
    </>
  );
};

export default Tags;

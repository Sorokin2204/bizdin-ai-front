import React, { useEffect, useState } from 'react';
import styles from './Slider.module.scss';
import clsx from 'clsx';
const Slider = ({ list }) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setActive((prevTime) => (prevTime == 2 ? 0 : prevTime + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  console.log(active);
  return (
    <>
      <div className={clsx(styles.list)}>
        <div className={clsx(styles.dots)}>
          {list?.map((item, indexItem) => (
            <div
              className={clsx(styles.dot, active == indexItem && styles.dotActive)}
              onClick={() => {
                setActive(indexItem);
              }}></div>
          ))}
        </div>
        {list?.map((item, itemIndex) => (
          <div className={clsx(styles.item, active == itemIndex && styles.itemActive)}>
            <div className={clsx(styles.title)}>{item?.title}</div>
            <img src={item?.image} alt="" className={clsx(styles.image)} />
            <div className={clsx(styles.label)}>
              <img src={item?.image} alt="" className={clsx(styles.labelImage)} />
              {item?.label}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Slider;

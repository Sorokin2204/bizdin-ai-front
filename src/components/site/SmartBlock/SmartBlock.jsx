import React from 'react';
import styles from './SmartBlock.module.scss';
import clsx from 'clsx';
const SmartBlock = ({ title, height, gridColumn }) => {
  return (
    <>
      <div className={clsx(styles.wrap)} style={{ ...(gridColumn && { gridColumn }) }}>
        <div className={clsx(styles.head)}>{title}</div>
        <div className={clsx(styles.content)} style={{ minHeight: height }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, ut.
        </div>
      </div>
    </>
  );
};

export default SmartBlock;

import React from 'react';
import styles from './Tips.module.scss';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
const Tips = ({ tipsStyle, children, text, frameStyle, top = true, left, right = true, bottom, style }) => {
  const { showTips } = useSelector((state) => state.app);
  return (
    <>
      {text ? (
        <div className={clsx(styles.wrap, showTips && styles.wrapActive)} style={style}>
          <div className={clsx(styles.frame)} style={frameStyle}></div>
          {children}
          <div className={clsx(styles.tips, showTips && styles.tipsActive, bottom && styles.tipsBottom)} style={tipsStyle}>
            {text}
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Tips;

import React from 'react';
import styles from './ContentSideBarHead.module.scss';
import clsx from 'clsx';
const ContentSideBarHead = ({ title }) => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.title)}>{title}</div>
        <div className={clsx(styles.icon)}></div>
      </div>
    </>
  );
};

export default ContentSideBarHead;

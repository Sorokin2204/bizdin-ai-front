import React from 'react';
import styles from './ContentPage.module.scss';
import clsx from 'clsx';
const ContentPage = ({ title, children }) => {
  return (
    <>
      <div class="container">
        {' '}
        <div className={clsx(styles.title)}>{title}</div> <div className={clsx(styles.block)}>{children}</div>
      </div>
    </>
  );
};

export default ContentPage;

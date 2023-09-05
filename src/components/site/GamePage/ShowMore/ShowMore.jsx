import React from 'react';
import styles from './ShowMore.module.scss';
import clsx from 'clsx';
const ShowMore = ({ onClick }) => {
  return (
    <>
      <div className={clsx(styles.wrap)} onClick={onClick}>
        <div className={clsx(styles.btn)}>Показать все</div>
      </div>
    </>
  );
};

export default ShowMore;

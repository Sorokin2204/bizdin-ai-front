import React from 'react';
import styles from './GameReviews.module.scss';
import clsx from 'clsx';
const GameReviews = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.left)}>
          <div className={clsx(styles.stars)}>
            <div className={clsx(styles.star, styles.starEmpty)}></div>
            <div className={clsx(styles.star, styles.starHalf)}></div>
            <div className={clsx(styles.star, styles.starFull)}></div>
            <div className={clsx(styles.star, styles.starFull)}></div>
            <div className={clsx(styles.star, styles.starFull)}></div>
          </div>
          <div className={clsx(styles.box)}>
            <div className={clsx(styles.rating)}>
              <b>4.8 </b>средний рейтинг
            </div>
            <div className={clsx(styles.count)}>146 шт</div>
          </div>
        </div>
        <div className={clsx(styles.link)}>Все отзывы</div>
      </div>
    </>
  );
};

export default GameReviews;

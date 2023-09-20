import React from 'react';
import styles from './GameReviews.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
const GameReviews = ({ rating, commentsCount }) => {
  function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
  }
  const getStart = () => {
    let arr = [1, 2, 3, 4, 5];
    return arr?.map((item, index) => {
      return <div className={clsx(styles.star, index + 1 <= rating ? (parseInt(rating) == index + 1 && isFloat(rating) ? styles.starHalf : styles.starFull) : styles.starEmpty)}></div>;
    });
  };

  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.left)}>
          <div className={clsx(styles.stars)}>{getStart()}</div>
          <div className={clsx(styles.box)}>
            <div className={clsx(styles.rating)}>
              {rating || 0} <span>средний рейтинг</span>
            </div>
            <div className={clsx(styles.count)}>{commentsCount} шт</div>
          </div>
        </div>
        <Link to="/feedback" className={clsx(styles.link)}>
          Все отзывы
        </Link>
      </div>
    </>
  );
};

export default GameReviews;

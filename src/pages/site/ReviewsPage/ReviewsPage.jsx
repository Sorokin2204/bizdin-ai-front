import React from 'react';
import styles from './ReviewsPage.module.scss';
import Button from '../../../components/site/Common/Button/Button';
import clsx from 'clsx';
import ReviewItem from '../../../components/site/ReviewsPage/ReviewItem/ReviewItem';
const ReviewsPage = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.title)}>Отзывы о Donatov.net</div>
        <div className={clsx(styles.createReview)}>
          <div className={clsx(styles.createReviewText)}>
            Нам бесконечно важно мнение клиентов нашего сервиса пополнения для игр. Мы регулярно работаем над качеством и улучшением вашего опыта использования магазина, поэтому мы будем очень рады, если вы поделитесь своим отзывом с другими пользователями (´｡• ᵕ •｡`)
          </div>
          <Button>Оставить свой отзыв</Button>
        </div>
        <div className={clsx(styles.list)}>
          <ReviewItem />
        </div>
      </div>
    </>
  );
};

export default ReviewsPage;

import React from 'react';
import styles from './ThankComment.module.scss';
import clsx from 'clsx';
import Breadcrumbs from '../../../components/site/Breadcrumbs/Breadcrumbs';
const ThankComment = () => {
  return (
    <>
      <Breadcrumbs list={[{ name: 'Отзывы', path: '/feedback' }, { name: 'Спасибо за отзыв' }]} />
      <div className={clsx(styles.wrap)}>
        <img src="../img/thanks.webp" alt="" className={clsx(styles.img)} />
        <div className={clsx(styles.title)}>Спасибо за отзыв</div>
        <div className={clsx(styles.text)}>Пожалуйста, дождитесь его публикации</div>
      </div>
    </>
  );
};

export default ThankComment;

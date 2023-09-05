import React from 'react';
import styles from './SupportPage.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
const SupportPage = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.title)}>Поддержка</div>
        <div className={clsx(styles.block)}>
          <div className={clsx(styles.text)}>Здесь можно найти частые вопросы и ответы на них. Если вам нужна личная поддержка от админа, напишите в Live-чат.</div>
        </div>
        <div className={clsx(styles.subtitle)}>Частые вопросы и ответы на них</div>
        <div className={clsx(styles.list)}>
          <Link to="/support-single" className={clsx(styles.item)}>
            Как происходит пополнение в игры/сервисы? ⬆️
          </Link>{' '}
          <div className={clsx(styles.item)}>Почему у нас дешевле разработчика? 📉</div> <div className={clsx(styles.item)}>Безопасен ли Донат в игры через вас? 🛡️</div> <div className={clsx(styles.item)}>Что такое Купоны? 🎟️</div>
          <div className={clsx(styles.item)}>Ничего не пришло! Что делать? 😱</div>
        </div>
        <div className={clsx(styles.coop)}>По вопросам сотрудничества netdonatov@gmail.com</div>
      </div>
    </>
  );
};

export default SupportPage;

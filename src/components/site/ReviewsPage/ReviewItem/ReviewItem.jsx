import React from 'react';
import styles from './ReviewItem.module.scss';
import Avatar from '../../Common/Avatar/Avatar';
import clsx from 'clsx';
const ReviewItem = () => {
  return (
    <>
      <div className={clsx(styles.item)}>
        <div className={clsx(styles.head)}>
          <div className={clsx(styles.left)}>
            <Avatar color={'red'} sm>
              Sl
            </Avatar>
            <div className={clsx(styles.user)}>Sitdikov</div>
          </div>
          <div className={clsx(styles.date)}>4 сентября 2023 г. в 14:42</div>
        </div>
        <div className={clsx(styles.content)}>
          <div className={clsx(styles.like)}></div>
          <div className={clsx(styles.text)}>Здравствуйте! Донат пришел через часа 2 только. А так сайт хороший. Удивлён его работе)</div>
        </div>
        <div className={clsx(styles.game)}>
          <img src="../img/game-1.webp" alt="" className={clsx(styles.gameIcon)} />
          <div className={clsx(styles.gameName)}>Mobile Legends: Bang Bang (Россия)</div>
        </div>
        <div className={clsx(styles.answer)}>
          <div className={clsx(styles.answerTitle)}>Ответ</div>
          <div className={clsx(styles.answerText)}>Если вы про то, что ваш заказ не прошел - выберите Mobile Legends Global, у вас регион на аккаунте Не Россия.</div>
        </div>
      </div>
    </>
  );
};

export default ReviewItem;

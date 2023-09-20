import React from 'react';
import styles from './ReviewItem.module.scss';
import Avatar from '../../Common/Avatar/Avatar';
import clsx from 'clsx';
import moment from 'moment';
import 'moment/locale/ru';
import { imgPath } from '../../../../utils/imgPath';
moment.locale('ru');
const ReviewItem = ({ user, text, createdAt, order, answer, like }) => {
  return (
    <>
      <div className={clsx(styles.item, !like && styles.itemDislike)}>
        <div className={clsx(styles.head)}>
          <div className={clsx(styles.left)}>
            <Avatar color={user.color} sm>
              {user?.name?.slice(0, 2)}
            </Avatar>
            <div className={clsx(styles.user)}>{user?.name}</div>
          </div>
          <div className={clsx(styles.date)}>{moment(createdAt).format('DD MMMM YYYY г. в HH:mm')}</div>
        </div>
        <div className={clsx(styles.content)}>
          <div className={clsx(styles.like)}></div>
          <div className={clsx(styles.text)}>{text}</div>
        </div>
        {order?.game && (
          <div className={clsx(styles.game)}>
            <img src={imgPath(order?.game?.preview)} alt="" className={clsx(styles.gameIcon)} />
            <div className={clsx(styles.gameName)}>{order?.game?.name}</div>
          </div>
        )}
        {answer && (
          <div className={clsx(styles.answer)}>
            <div className={clsx(styles.answerTitle)}>Ответ</div>
            <div className={clsx(styles.answerText)}>{answer}</div>
          </div>
        )}
      </div>
    </>
  );
};

export default ReviewItem;

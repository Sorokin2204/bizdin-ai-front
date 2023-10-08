import React, { useState } from 'react';
import styles from './HistoryChat.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import Tips from '../Tips/Tips';
import { useLocation } from 'react-router';
const dataHistory = [
  {
    group: 'June',
    list: ['New chat', 'New chat', 'New chat'],
  },
  {
    group: 'May',
    list: ['New chat', 'New chat', 'New chat'],
  },
  {
    group: 'September',
    list: ['New chat', 'New chat', 'New chat'],
  },
];

const HistoryChat = ({ list = dataHistory }) => {
  const [active, setActive] = useState(null);
  const { pathname } = useLocation();
  return (
    <>
      <div className={clsx(styles.list)}>
        {list?.map((itemHistory, indexHistory) => (
          <>
            <div className={clsx(styles.group)}>{itemHistory?.group}</div>
            {itemHistory?.list?.map((item, indexItem) =>
              itemHistory?.group == 'June' && indexItem == 0 && pathname == '/chats' ? (
                <Tips text={'Click Chats to talk to our AI'} style={{ height: 'auto' }} frameStyle={{ borderRadius: '12px' }} bottom>
                  <div
                    className={clsx(styles.item, active?.group == indexHistory && active?.item == indexItem && styles.itemActive)}
                    onClick={() => {
                      setActive({ group: indexHistory, item: indexItem });
                    }}>
                    {item}
                  </div>
                </Tips>
              ) : (
                <div
                  className={clsx(styles.item, active?.group == indexHistory && active?.item == indexItem && styles.itemActive)}
                  onClick={() => {
                    setActive({ group: indexHistory, item: indexItem });
                  }}>
                  {item}
                </div>
              ),
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default HistoryChat;

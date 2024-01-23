import React, { useState } from 'react';
import styles from './HistoryChat.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import Tips from '../Tips/Tips';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { setActiveConversation } from '../../../redux/slices/chat.slice';
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
  const dispatch = useDispatch();
  const { activeConversation } = useSelector((state) => state.chat);
  const { pathname } = useLocation();
  return (
    <>
      <div className={clsx(styles.list)}>
        {list?.map((itemHistory, indexHistory) => (
          <>
            <div className={clsx(styles.group)}>{itemHistory?.group}</div>
            {itemHistory?.list?.map((item, indexItem) =>
              indexItem == 0 && pathname == '/chats' ? (
                <Tips text={'Click Chats to talk to our AI'} style={{ height: 'auto' }} frameStyle={{ borderRadius: '12px' }} bottom>
                  <div
                    className={clsx(styles.item, activeConversation?.id == item?.id && styles.itemActive)}
                    onClick={() => {
                      if (item?.id) {
                        dispatch(setActiveConversation(item));
                      }
                    }}>
                    <div> {item?.label || 'Безымянный'}</div>
                  </div>
                </Tips>
              ) : (
                <div
                  className={clsx(styles.item, activeConversation?.id == item?.id && styles.itemActive, item?.label?.length >= 14 && styles.itemSmall)}
                  onClick={() => {
                    if (item?.id) {
                      dispatch(setActiveConversation(item));
                    }
                    // setActive({ group: indexHistory, item: indexItem });
                  }}>
                  <div>{item?.label || 'Безымянный'}</div>
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

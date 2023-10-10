import React, { useEffect, useRef } from 'react';
import styles from './ChatMessages.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
const ChatMessages = ({ data = [], typing }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const { theme } = useSelector((state) => state.app);
  useEffect(() => {
    if (data?.length !== 0) {
      scrollToBottom();
    }
  }, [data]);
  return (
    <>
      <div className={clsx(styles.wrap)}>
        {data?.map((item) => (
          <div className={clsx(styles.message, item?.self && styles.messageSelf)}>
            {!item?.self && <img src={item?.self ? item?.avatar : theme ? '../img/logo-icon.svg' : '../img/logo-icon-gold.svg'} alt="" className={clsx(styles.avatar)} />}
            <div className={clsx(styles.text)}>{item?.text}</div>
          </div>
        ))}
        {typing && (
          <div className={clsx(styles.message)}>
            {' '}
            <img src={theme ? '../img/logo-icon.svg' : '../img/logo-icon-gold.svg'} alt="" className={clsx(styles.avatar)} />
            <div className={clsx(styles.text)}>
              <div className={clsx(styles.typing)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}{' '}
        <div ref={messagesEndRef} />
      </div>
    </>
  );
};

export default ChatMessages;

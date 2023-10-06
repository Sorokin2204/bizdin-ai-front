import React, { useEffect, useRef } from 'react';
import styles from './ChatMessages.module.scss';
import clsx from 'clsx';
const ChatMessages = ({ data = [], typing }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
            {item?.avatar && <img src={item?.avatar} alt="" className={clsx(styles.avatar)} />}

            <div className={clsx(styles.text)}>{item?.text}</div>
          </div>
        ))}
        {typing && (
          <div className={clsx(styles.message)}>
            {' '}
            <img src={'../img/logo-icon.svg'} alt="" className={clsx(styles.avatar)} />
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

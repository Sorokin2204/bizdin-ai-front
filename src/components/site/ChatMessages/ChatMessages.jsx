import React from 'react';
import styles from './ChatMessages.module.scss';
import clsx from 'clsx';
const ChatMessages = () => {
  const data = [
    {
      self: false,
      text: 'Hi, what is your question?',
      avatar: 'https://i.pravatar.cc/48',
    },
    {
      self: true,
      text: 'Lorem ipsum dolor sit amet consectetur. Orci diam vestibulum facilisis nec neque laoreet.',
    },
  ];
  return (
    <>
      <div className={clsx(styles.wrap)}>
        {data?.map((item) => (
          <div className={clsx(styles.message, item?.self && styles.messageSelf)}>
            {item.avatar && <img src={item.avatar} alt="" className={clsx(styles.avatar)} />}

            <div className={clsx(styles.text)}>{item.text}</div>
          </div>
        ))}
        <div className={clsx(styles.message)}>
          {' '}
          <img src={data[0].avatar} alt="" className={clsx(styles.avatar)} />
          <div className={clsx(styles.text)}>
            <div className={clsx(styles.typing)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatMessages;

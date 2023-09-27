import React from 'react';
import styles from './ChatPreview.module.scss';
import clsx from 'clsx';
const ChatPreview = () => {
  const dataList = [
    {
      icon: '../img/dashboard.svg',
      text: 'Make dashboard',
    },
    {
      icon: '../img/chat.svg',
      text: 'Chat with AI',
    },
    {
      icon: '../img/file-search.svg',
      text: 'AI file viewer',
    },
    {
      icon: '../img/road-finish.svg',
      text: 'Brainstorming with specialists in 1 AI',
    },
    {
      icon: '../img/table-setting.svg',
      text: 'Use smart tools with AI',
    },
  ];
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.title)}>Unlock the power of Bizdin AI</div>
        <div className={clsx(styles.text)}>Chat with the smartest AI - Experience the power of AI with us</div>
        <div className={clsx(styles.list)}>
          {dataList?.map((itemList) => (
            <div className={clsx(styles.item)}>
              <div className={clsx(styles.itemIconWrap)}>
                {' '}
                <div className={clsx(styles.itemIcon)} style={{ WebkitMaskImage: `url(${itemList?.icon})` }}></div>
              </div>

              <div className={clsx(styles.itemText)}>{itemList?.text}</div>
              <div className={clsx(styles.itemNavigate)}></div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatPreview;

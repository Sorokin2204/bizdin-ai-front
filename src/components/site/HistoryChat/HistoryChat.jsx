import React, { useState } from 'react';
import styles from './HistoryChat.module.scss';
import clsx from 'clsx';
const HistoryChat = () => {
  const [active, setActive] = useState(null);
  const dataHistory = [
    {
      group: 'June',
      list: ['New chat', 'New chat', 'New chat'],
    },
    {
      group: 'May',
      list: ['New chat', 'New chat', 'New chat'],
    },
  ];
  return (
    <>
      <div className={clsx(styles.list)}>
        {dataHistory?.map((itemHistory, indexHistory) => (
          <>
            <div className={clsx(styles.group)}>{itemHistory?.group}</div>
            {itemHistory?.list?.map((item, indexItem) => (
              <div
                className={clsx(styles.item, active?.group == indexHistory && active?.item == indexItem && styles.itemActive)}
                onClick={() => {
                  setActive({ group: indexHistory, item: indexItem });
                }}>
                {item}
              </div>
            ))}
          </>
        ))}
      </div>
    </>
  );
};

export default HistoryChat;

import React from 'react';
import styles from './Chat.module.scss';
import clsx from 'clsx';
import ChatPreview from '../ChatPreview/ChatPreview';
import ChatMessages from '../ChatMessages/ChatMessages';
import ChatPreview2 from '../ChatPreview2/ChatPreview2';
const Chat = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.content)}>
          <ChatPreview2 />
          <ChatMessages />
        </div>
        <div className={clsx(styles.inputBlock)}>
          <div className={clsx(styles.attach)}></div>
          <input type="text" className={clsx(styles.input)} placeholder="/Prompt" />
          <div className={clsx(styles.atom)}></div>
        </div>
      </div>
    </>
  );
};

export default Chat;

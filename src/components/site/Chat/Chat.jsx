import React, { useState } from 'react';
import styles from './Chat.module.scss';
import clsx from 'clsx';
import ChatPreview from '../ChatPreview/ChatPreview';
import ChatMessages from '../ChatMessages/ChatMessages';
import ChatPreview2 from '../ChatPreview2/ChatPreview2';
import { useLocation } from 'react-router';
import ChatPreview3 from '../ChatPreview3/ChatPreview3';
import axios from 'axios';
const Chat = () => {
  const { pathname } = useLocation();
  const [typingText, setTypingText] = useState('');
  const [listMessage, setListMessage] = useState([]);
  const [loadTyping, setLoadTyping] = useState(false);
  const sendMessage = () => {
    let list = [
      ...listMessage,
      {
        self: true,
        text: typingText,
      },
    ];
    setListMessage(list);
    setTypingText('');
    setLoadTyping(true);
    axios.get('https://baconipsum.com/api/?type=meat-and-filler').then((dt) => {
      setTimeout(() => {
        setLoadTyping(false);
        setListMessage([
          ...list,
          {
            avatar: '../img/logo-icon.svg',
            self: false,
            text: dt.data[0],
          },
        ]);
      }, 1000);
    });
  };
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.content, pathname == '/files' && styles.contentFile)}>
          <ChatPreview3 show={listMessage?.length == 0} />

          <ChatMessages data={listMessage} typing={loadTyping} />
        </div>
        <div className={clsx(styles.inputBlock)}>
          <div className={clsx(styles.attach)}></div>
          <input
            disabled={loadTyping}
            value={typingText}
            onChange={(e) => {
              setTypingText(e.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                sendMessage();
              }
            }}
            type="text"
            className={clsx(styles.input)}
            placeholder="/Prompt"
          />
          <div className={clsx(styles.atom)}></div>
        </div>
      </div>
    </>
  );
};

export default Chat;

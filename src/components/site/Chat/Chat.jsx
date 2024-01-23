import React, { useEffect, useState } from 'react';
import styles from './Chat.module.scss';
import clsx from 'clsx';
import ChatPreview from '../ChatPreview/ChatPreview';
import ChatMessages from '../ChatMessages/ChatMessages';
import ChatPreview2 from '../ChatPreview2/ChatPreview2';
import { useLocation } from 'react-router';
import ChatPreview3 from '../ChatPreview3/ChatPreview3';
import axios from 'axios';
import Tips from '../Tips/Tips';
import { useDispatch } from 'react-redux';
import { chatSendMessage } from '../../../redux/actions/chat/chatSendMessage';
import { useSelector } from 'react-redux';
const Chat = ({ listMessage, setListMessage }) => {
  const { pathname } = useLocation();
  const [typingText, setTypingText] = useState('');
  const dispatch = useDispatch();
  const {
    chatSendMessage: { data: sendMessageData, loading: sendMessageLoading },
    activeConversation,
  } = useSelector((state) => state.chat);
  const sendMessage = () => {
    if (typingText) {
      let list = [
        ...listMessage,
        {
          self: true,
          text: typingText,
        },
      ];
      setListMessage(list);
      setTypingText('');
      dispatch(chatSendMessage({ message: typingText, conversationId: activeConversation?.id }));
    }
  };

  useEffect(() => {
    if (sendMessageData) {
      setListMessage([
        ...listMessage,
        {
          self: false,
          text: sendMessageData?.result?.message,
        },
      ]);
    }
  }, [sendMessageData]);

  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.content, pathname == '/files' && styles.contentFile)}>
          <ChatPreview3 show={listMessage?.length == 0} />

          <ChatMessages data={listMessage} typing={sendMessageLoading} />
        </div>
        <Tips text={'Write here your question'} frameStyle={{ top: 0, left: 0, width: '100%', height: '100%', borderRadius: '17px' }}>
          <div className={clsx(styles.inputBlock)}>
            <div className={clsx(styles.attach)}></div>
            <input
              disabled={sendMessageLoading}
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
            <div
              className={clsx(styles.atom)}
              onClick={() => {
                sendMessage();
              }}></div>
          </div>{' '}
        </Tips>
      </div>
    </>
  );
};

export default Chat;

import React from 'react';
import styles from './ChatPage.module.scss';
import HistoryChat from '../../../components/site/HistoryChat/HistoryChat';
import Chat from '../../../components/site/Chat/Chat';
import clsx from 'clsx';
import ContentBlock from '../../../components/site/ContentBlock/ContentBlock';
const ChatPage = () => {
  return (
    <>
      <ContentBlock
        leftTitle={'Chats'}
        title={'Hello'}
        left={<Chat />}
        right={<HistoryChat />}
        buttonProps={{
          icon: '../img/add.svg',
          text: 'New chat',
          onClick: () => {},
        }}
      />
    </>
  );
};

export default ChatPage;

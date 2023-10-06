import React from 'react';
import styles from './ChatPage.module.scss';
import HistoryChat from '../../../components/site/HistoryChat/HistoryChat';
import Chat from '../../../components/site/Chat/Chat';
import clsx from 'clsx';
import ContentBlock from '../../../components/site/ContentBlock/ContentBlock';
import { setShowLeftMenu } from '../../../redux/slices/app.slice';
import { useDispatch } from 'react-redux';
const ChatPage = () => {
  const dispatch = useDispatch();
  return (
    <>
      <ContentBlock
        onAddMobile={() => {}}
        leftMenu={<HistoryChat />}
        leftTitle={'Chats'}
        title={'New chat'}
        left={<Chat />}
        right={<HistoryChat />}
        buttonProps={{
          inLeftMenu: true,
          icon: '../img/add.svg',
          text: 'New chat',
          onClick: () => {},
          onClickLeftMenu: () => {
            dispatch(setShowLeftMenu(false));
          },
        }}
      />
    </>
  );
};

export default ChatPage;

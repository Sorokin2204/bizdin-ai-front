import React, { useEffect, useState } from 'react';
import styles from './ChatPage.module.scss';
import HistoryChat from '../../../components/site/HistoryChat/HistoryChat';
import Chat from '../../../components/site/Chat/Chat';
import clsx from 'clsx';
import ContentBlock from '../../../components/site/ContentBlock/ContentBlock';
import { setShowLeftMenu } from '../../../redux/slices/app.slice';
import { useDispatch } from 'react-redux';
import { chatGetList } from '../../../redux/actions/chat/chatGetList';
import { useSelector } from 'react-redux';
import { chatGetMessages } from '../../../redux/actions/chat/chatGetMessages';
import { setActiveConversation } from '../../../redux/slices/chat.slice';
import { groupChatByMonth } from '../../../utils/groupChatByMonth';
const ChatPage = () => {
  const dispatch = useDispatch();
  const {
    chatGetList: { data: chatGetListData },
    chatGetMessages: { data: chatGetMessagesData },
    activeConversation,
  } = useSelector((state) => state.chat);
  useEffect(() => {
    dispatch(chatGetList());
  }, []);
  useEffect(() => {
    if (activeConversation) {
      dispatch(chatGetMessages(activeConversation?.id));
      if (activeConversation?.label) {
      }
    }
  }, [activeConversation]);

  const [listMessage, setListMessage] = useState([]);
  const [listChat, setListChat] = useState([]);
  useEffect(() => {
    if (chatGetMessagesData) {
      const messageList = chatGetMessagesData?.map((itemMessage) => ({ text: itemMessage?.message, self: !itemMessage?.is_bot }));
      setListMessage(messageList);
    }
  }, [chatGetMessagesData]);
  useEffect(() => {
    if (chatGetListData?.length >= 1) {
      setListChat(groupChatByMonth(chatGetListData));
    }
  }, [chatGetListData]);

  return (
    <>
      <ContentBlock
        onAddMobile={() => {}}
        leftMenu={<HistoryChat list={listChat} />}
        leftTitle={'Chats'}
        title={activeConversation == null ? 'New chat' : activeConversation?.label == '' ? 'Безымянный' : activeConversation?.label}
        left={<Chat listMessage={listMessage} setListMessage={setListMessage} />}
        right={<HistoryChat list={listChat} />}
        buttonProps={{
          inLeftMenu: true,
          icon: '../img/add.svg',
          text: 'New chat',
          onClick: () => {
            setListMessage([]);
            dispatch(setActiveConversation(null));
          },
          onClickLeftMenu: () => {
            dispatch(setShowLeftMenu(false));
          },
        }}
      />
    </>
  );
};

export default ChatPage;

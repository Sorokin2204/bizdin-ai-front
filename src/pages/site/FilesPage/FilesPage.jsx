import React from 'react';
import styles from './FilesPage.module.scss';
import ContentBlock from '../../../components/site/ContentBlock/ContentBlock';
import FileSideBar from '../../../components/site/FileSideBar/FileSideBar';
import Chat from '../../../components/site/Chat/Chat';
import { useMediaQuery } from '../../../utils/useMediaQuery';
import Tabs from '../../../components/site/Tabs/Tabs';
import HistoryChat from '../../../components/site/HistoryChat/HistoryChat';
import { useDispatch } from 'react-redux';
import { setShowLeftMenu } from '../../../redux/slices/app.slice';
const FilesPage = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const dataHistory = [
    {
      group: 'June',
      list: ['New file', 'New file', 'New file'],
    },
    {
      group: 'May',
      list: ['New file', 'New file', 'New file'],
    },
    {
      group: 'September',
      list: ['New file', 'New file', 'New file'],
    },
  ];
  const dispatch = useDispatch();
  return (
    <>
      {' '}
      <ContentBlock
        onAddMobile={() => {}}
        leftTitle={'Chats'}
        title={'File'}
        leftMenu={<HistoryChat list={dataHistory} />}
        left={
          isMobile ? (
            <Tabs
              list={[
                {
                  label: 'Chat',
                  content: <Chat />,
                },
                {
                  label: 'File',
                  content: <FileSideBar />,
                },
              ]}
            />
          ) : (
            <Chat />
          )
        }
        right={<FileSideBar />}
        buttonProps={{
          inLeftMenu: true,
          icon: '../img/pdf.svg',
          text: 'Add a pdf file',
          onClick: () => {},
          onClickLeftMenu: () => {
            dispatch(setShowLeftMenu(false));
          },
        }}
      />
    </>
  );
};

export default FilesPage;

import React from 'react';
import styles from './FilesPage.module.scss';
import ContentBlock from '../../../components/site/ContentBlock/ContentBlock';
import FileSideBar from '../../../components/site/FileSideBar/FileSideBar';
import Chat from '../../../components/site/Chat/Chat';
const FilesPage = () => {
  return (
    <>
      {' '}
      <ContentBlock
        leftTitle={'Chats'}
        title={'Hello'}
        left={<Chat />}
        right={<FileSideBar />}
        buttonProps={{
          icon: '../img/pdf.svg',
          text: 'Add a pdf file',
          onClick: () => {},
        }}
      />
    </>
  );
};

export default FilesPage;

import React from 'react';
import styles from './BrainstormingPage.module.scss';
import ContentBlock from '../../../components/site/ContentBlock/ContentBlock';
import HistoryChat from '../../../components/site/HistoryChat/HistoryChat';
import Chat from '../../../components/site/Chat/Chat';
import Select from '../../../components/site/Select/Select';
import clsx from 'clsx';
const BrainstormingPage = () => {
  return (
    <>
      <ContentBlock
        leftTitle={'Atomic habit'}
        title={'Brainstorming'}
        left={<Chat />}
        right={
          <>
            <div className={clsx(styles.selectBox)}>
              <Select multi label={'Choose your specialist'} list={['Designer', 'Developer', 'Finansist', 'Marketologue', 'SMM Specialist']} />
            </div>

            <HistoryChat />
          </>
        }
        buttonProps={{
          icon: '../img/add.svg',
          text: 'Add a new brainstorming',
          onClick: () => {},
        }}
      />
    </>
  );
};

export default BrainstormingPage;

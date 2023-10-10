import React from 'react';
import styles from './BrainstormingPage.module.scss';
import ContentBlock from '../../../components/site/ContentBlock/ContentBlock';
import HistoryChat from '../../../components/site/HistoryChat/HistoryChat';
import Chat from '../../../components/site/Chat/Chat';
import Select from '../../../components/site/Select/Select';
import clsx from 'clsx';
import { useMediaQuery } from '../../../utils/useMediaQuery';
import { useDispatch } from 'react-redux';
import { setShowLeftMenu, setShowSwipeBottom } from '../../../redux/slices/app.slice';
const BrainstormingPage = () => {
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const dispatch = useDispatch();
  return (
    <>
      <ContentBlock
        leftTitle={'Atomic habit'}
        title={'Brainstorming'}
        left={<Chat />}
        leftMenu={<HistoryChat />}
        right={
          <div>
            <div className={clsx(styles.selectBox, isMobile && styles.selectBoxMobile)}>
              <Select multi label={'Choose your specialist'} list={['Designer', 'Developer', 'Finansist', 'Marketologue', 'SMM Specialist']} />
            </div>
            {!isMobile && <HistoryChat />}
          </div>
        }
        buttonProps={{
          inLeftMenu: true,
          icon: '../img/add.svg',
          text: 'Add a new brainstorming',
          onClick: () => {},
          onClickLeftMenu: () => {
            dispatch(setShowLeftMenu(false));
            dispatch(setShowSwipeBottom(true));
          },
        }}
      />
    </>
  );
};

export default BrainstormingPage;

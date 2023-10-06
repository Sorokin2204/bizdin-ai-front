import React from 'react';
import styles from './SmartToolsPage.module.scss';
import ContentBlock from '../../../components/site/ContentBlock/ContentBlock';
import Chat from '../../../components/site/Chat/Chat';
import Select from '../../../components/site/Select/Select';
import clsx from 'clsx';
import SmartBlockList from '../../../components/site/SmartBlockList/SmartBlockList';
import Tags from '../../../components/site/Tags/Tags';
import { useDispatch } from 'react-redux';
import { setActiveSmartBlock, setShowLeftMenu, setShowSwipeBottom } from '../../../redux/slices/app.slice';
import Textarea from '../../../components/site/Textarea/Textarea';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '../../../utils/useMediaQuery';
import HistoryChat from '../../../components/site/HistoryChat/HistoryChat';
const SmartToolsPage = () => {
  const dispatch = useDispatch();
  const { activeSmartBlock } = useSelector((state) => state.app);
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const dataHistory = [
    {
      group: 'June',
      list: ['New analyze', 'New analyze', 'New analyze'],
    },
    {
      group: 'May',
      list: ['New analyze', 'New analyze', 'New analyze'],
    },
    {
      group: 'September',
      list: ['New analyze', 'New analyze', 'New analyze'],
    },
  ];
  return (
    <>
      <ContentBlock
        leftTitle={'Adding analyze'}
        title={'Smart tools'}
        leftMenu={<HistoryChat list={dataHistory} />}
        left={
          <>
            <div className={clsx(styles.wrap)}>
              {!isMobile && (
                <div className={clsx(styles.tagsBox)}>
                  <Tags long list={['Analyze', 'Analyze', 'Analyze', 'Analyze']} />
                </div>
              )}

              <SmartBlockList />
            </div>
          </>
        }
        right={
          <>
            <div className={clsx(styles.sidebarWrap)}>
              <div className={clsx(styles.selectWrap)}>
                <Select
                  value={activeSmartBlock}
                  onChange={(opt) => {
                    dispatch(setActiveSmartBlock(opt));
                  }}
                  label={'Choose your specialist'}
                  list={['SWOT', 'PESTEL', 'LEAN CANVAS', 'CATWOE', '5 WHYS']}
                />
              </div>

              <Textarea label={'What would you like to visualize?'} placeholder={'Show me a bar chart with COVID-19 cases in London in Mrach 2020...'} />
            </div>
          </>
        }
        buttonProps={{
          inLeftMenu: true,
          icon: '../img/dashboard.svg',
          leftMenuIcon: '../img/add.svg',
          text: 'Show analyze',
          leftMenuText: 'Add analyze',
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

export default SmartToolsPage;

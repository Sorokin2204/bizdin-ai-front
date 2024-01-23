import React, { useEffect } from 'react';
import styles from './ContentHead.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { setActiveSmartView, setCollapseRightSideBar, setShowLeftMenu, setShowStepModal, setShowSwipeBottom, setShowTips } from '../../../redux/slices/app.slice';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useMediaQuery } from '../../../utils/useMediaQuery';
import Tips from '../Tips/Tips';
import { chatFavorite } from '../../../redux/actions/chat/chatFavorite';
import { chatGetList } from '../../../redux/actions/chat/chatGetList';
import { setActiveConversation } from '../../../redux/slices/chat.slice';
const ContentHead = ({ title, onAddMobile }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const { activeSmartView, showTips, collapseRightSideBar } = useSelector((state) => state.app);
  const {
    activeConversation,
    chatFavorite: { data: chatFavoriteData, loading: chatFavoriteLoading },
  } = useSelector((state) => state.chat);
  useEffect(() => {
    if (typeof chatFavoriteData == 'string') {
      dispatch(chatGetList());
    }
  }, [chatFavoriteData]);

  return (
    <>
      <div className={clsx(styles.wrap, collapseRightSideBar && styles.wrapRightHide)}>
        {isMobile && (
          <div className={clsx(styles.burgerWrap)}>
            {' '}
            <div
              className={clsx(styles.iconItem, styles.iconBurger)}
              onClick={() => {
                dispatch(setShowLeftMenu(true));
              }}></div>
          </div>
        )}
        <div className={clsx(styles.left)}>
          <div className={clsx(styles.leftTitle)}> {title}</div>
          {pathname == '/smart-tools' && !isMobile && (
            <div className={clsx(styles.smartView)}>
              <div
                className={clsx(styles.smartViewItem, styles.smartViewGrid, activeSmartView == 'grid' && styles.smartViewActive)}
                onClick={() => {
                  dispatch(setActiveSmartView('grid'));
                }}></div>
              <div
                className={clsx(styles.smartViewItem, styles.smartViewList, activeSmartView == 'list' && styles.smartViewActive)}
                onClick={() => {
                  dispatch(setActiveSmartView('list'));
                }}></div>
            </div>
          )}
          {pathname == '/dashboard' && !isMobile && (
            <Tips text={'Add a new dashboard'} frameStyle={{ zIndex: 1, border: '2px solid #fff', top: '1.4px', left: '11.5px', width: 'calc(100% - 13px)', height: 'calc(100% - 3px)', borderRadius: '50%' }} bottom tipsStyle={{ right: '-10%' }}>
              <div className={clsx(styles.addDashboard)}></div>
            </Tips>
          )}
        </div>
        <div className={clsx(styles.icons)}>
          {isMobile && (
            <div
              className={clsx(styles.iconItem, styles.iconAdd)}
              onClick={() => {
                if (onAddMobile) {
                  onAddMobile();
                } else {
                  dispatch(setShowSwipeBottom(true));
                }
              }}></div>
          )}
          <div
            className={clsx(styles.iconItem, styles.iconHelp)}
            onClick={() => {
              dispatch(setShowTips(!showTips));
            }}></div>
          <div
            className={clsx(styles.iconItem, styles.iconLamp)}
            onClick={() => {
              dispatch(setShowStepModal(true));
            }}></div>
          {activeConversation && (
            <div
              className={clsx(styles.iconItem, styles.iconFavorite, activeConversation?.favorite && styles.iconFavoriteActive)}
              onClick={() => {
                if (activeConversation && !chatFavoriteLoading) {
                  const switchFavorite = !activeConversation?.favorite;
                  dispatch(setActiveConversation({ ...activeConversation, favorite: switchFavorite }));
                  dispatch(
                    chatFavorite({
                      conversationId: activeConversation?.id,
                      favorite: switchFavorite,
                    }),
                  );
                }

                // dispatch(setShowStepModal(true));
              }}></div>
          )}

          {/* <div className={clsx(styles.iconItem, styles.iconBookmark)}></div>
          <div className={clsx(styles.iconItem, styles.iconOther)}></div> */}
        </div>
      </div>
    </>
  );
};

export default ContentHead;

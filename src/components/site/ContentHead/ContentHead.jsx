import React from 'react';
import styles from './ContentHead.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { setActiveSmartView, setCollapseRightSideBar, setShowLeftMenu, setShowStepModal, setShowSwipeBottom, setShowTips } from '../../../redux/slices/app.slice';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useMediaQuery } from '../../../utils/useMediaQuery';
import Tips from '../Tips/Tips';
const ContentHead = ({ title, onAddMobile }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const { activeSmartView, showTips, collapseRightSideBar } = useSelector((state) => state.app);
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
          {title}
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
            className={clsx(styles.iconItem, styles.iconLamp)}
            onClick={() => {
              dispatch(setShowStepModal(true));
            }}></div>

          <div
            className={clsx(styles.iconItem, styles.iconFavorite)}
            onClick={() => {
              dispatch(setShowTips(!showTips));
            }}></div>
          {/* <div className={clsx(styles.iconItem, styles.iconBookmark)}></div>
          <div className={clsx(styles.iconItem, styles.iconOther)}></div> */}
        </div>
      </div>
    </>
  );
};

export default ContentHead;

import React from 'react';
import styles from './ContentHead.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { setActiveSmartView, setCollapseRightSideBar, setShowLeftMenu, setShowStepModal, setShowSwipeBottom } from '../../../redux/slices/app.slice';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useMediaQuery } from '../../../utils/useMediaQuery';
const ContentHead = ({ title, onAddMobile }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const { activeSmartView } = useSelector((state) => state.app);
  return (
    <>
      <div className={clsx(styles.wrap)}>
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
        </div>
        <div className={clsx(styles.icons)}>
          <div
            className={clsx(styles.iconItem, styles.iconAdd)}
            onClick={() => {
              if (onAddMobile) {
                onAddMobile();
              } else {
                dispatch(setShowSwipeBottom(true));
              }
            }}></div>
          <div
            className={clsx(styles.iconItem, styles.iconLamp)}
            onClick={() => {
              dispatch(setShowStepModal(true));
            }}></div>

          <div className={clsx(styles.iconItem, styles.iconFavorite)}></div>
          {/* <div className={clsx(styles.iconItem, styles.iconBookmark)}></div>
          <div className={clsx(styles.iconItem, styles.iconOther)}></div> */}
        </div>
      </div>
    </>
  );
};

export default ContentHead;

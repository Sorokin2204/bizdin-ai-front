import React from 'react';
import styles from './ContentHead.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { setActiveSmartView } from '../../../redux/slices/app.slice';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
const ContentHead = ({ title }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { activeSmartView } = useSelector((state) => state.app);
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.left)}>
          {title}
          {pathname == '/smart-tools' && (
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
          <div className={clsx(styles.iconItem, styles.iconLamp)}></div>
          <div className={clsx(styles.iconItem, styles.iconFavorite)}></div>
          <div className={clsx(styles.iconItem, styles.iconBookmark)}></div>
          <div className={clsx(styles.iconItem, styles.iconOther)}></div>
        </div>
      </div>
    </>
  );
};

export default ContentHead;

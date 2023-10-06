import React from 'react';
import styles from './SwipeBottom.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setShowSwipeBottom } from '../../../redux/slices/app.slice';
const SwipeBottom = ({ children }) => {
  const dispatch = useDispatch();
  const { showSwipeBottom } = useSelector((state) => state.app);
  return (
    <>
      <div
        className={clsx(styles.wrap, showSwipeBottom && styles.wrapActive)}
        onClick={() => {
          dispatch(setShowSwipeBottom(false));
        }}>
        <div
          className={clsx(styles.content, showSwipeBottom && styles.contentActive)}
          onClick={(e) => {
            e.stopPropagation();
          }}>
          <div
            className={clsx(styles.topLine)}
            onClick={() => {
              dispatch(setShowSwipeBottom(false));
            }}></div>
          <div className={clsx(styles.box)}> {children}</div>
        </div>
      </div>
    </>
  );
};

export default SwipeBottom;

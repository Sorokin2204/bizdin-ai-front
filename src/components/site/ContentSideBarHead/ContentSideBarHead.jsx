import React from 'react';
import styles from './ContentSideBarHead.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { setCollapseRightSideBar } from '../../../redux/slices/app.slice';
import { useSelector } from 'react-redux';
const ContentSideBarHead = ({ title }) => {
  const dispatch = useDispatch();
  const { collapseRightSideBar } = useSelector((state) => state.app);
  return (
    <>
      <div className={clsx(styles.wrap, collapseRightSideBar && styles.wrapHide)}>
        <div className={clsx(styles.title)}>{title}</div>
        {/* <div className={clsx(styles.icon)}></div> */}
      </div>
    </>
  );
};

export default ContentSideBarHead;

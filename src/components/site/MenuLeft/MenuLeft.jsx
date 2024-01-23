import React from 'react';
import styles from './MenuLeft.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setShowLeftMenu, setShowUserModal } from '../../../redux/slices/app.slice';
const MenuLeft = ({ children, button }) => {
  const dispatch = useDispatch();
  const { showLeftMenu } = useSelector((state) => state.app);
  return (
    <>
      <div
        className={clsx(styles.wrap, showLeftMenu && styles.wrapActive)}
        onClick={() => {
          dispatch(setShowLeftMenu(false));
        }}>
        {' '}
        <div
          className={clsx(styles.close)}
          onClick={() => {
            dispatch(setShowLeftMenu(false));
          }}></div>
        <div
          className={clsx(styles.content, showLeftMenu && styles.contentActive)}
          onClick={(e) => {
            e.stopPropagation();
          }}>
          {button && <div className={clsx(styles.btnBox)}>{button}</div>}
          <div className={clsx(styles.box, button && styles.boxWithBtn)}> {children}</div>{' '}
          <div className={clsx(styles.profile)}>
            <div className={clsx(styles.profileWrap)}>
              <div alt="" className={clsx(styles.avatar)}></div>
              <div className={clsx(styles.name)}>Ulday Turganbayeva</div>
            </div>

            <div
              className={clsx(styles.setting)}
              onClick={() => {
                dispatch(setShowLeftMenu(false));
                dispatch(setShowUserModal(true));
              }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuLeft;

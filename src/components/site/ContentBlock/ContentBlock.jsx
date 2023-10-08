import React from 'react';
import styles from './ContentBlock.module.scss';
import ContentHead from '../ContentHead/ContentHead';
import ContentSideBarHead from '../ContentSideBarHead/ContentSideBarHead';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '../../../utils/useMediaQuery';
import SwipeBottom from '../SwipeBottom/SwipeBottom';
import MenuLeft from '../MenuLeft/MenuLeft';
import { setCollapseRightSideBar, setShowTips } from '../../../redux/slices/app.slice';
import { useDispatch } from 'react-redux';
import Tips from '../Tips/Tips';
import { useLocation } from 'react-router';
const ContentBlock = ({ onAddMobile, leftMenu, left, right, title, leftTitle, buttonProps }) => {
  const { collapseRightSideBar, showTips } = useSelector((state) => state.app);
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  return (
    <>
      <div className={clsx(styles.wrap, collapseRightSideBar && styles.wrapCollapseRight)}>
        <div className={clsx(styles.left)}>
          <ContentHead title={title} onAddMobile={onAddMobile} />
          {left}
        </div>
        {!isMobile && (
          <div
            className={clsx(styles.collapseIcon, collapseRightSideBar && styles.collapseIconHide)}
            onClick={() => {
              dispatch(setCollapseRightSideBar(!collapseRightSideBar));
            }}></div>
        )}

        {isMobile ? (
          <>
            <SwipeBottom>
              {' '}
              {right}
              <div className={clsx(styles.btnBox)}>
                <Button icon={buttonProps.icon} onClick={buttonProps.onClick}>
                  {buttonProps.text}
                </Button>
              </div>
            </SwipeBottom>
            <MenuLeft
              button={
                buttonProps.inLeftMenu && (
                  <Button icon={buttonProps.leftMenuIcon || buttonProps.icon} onClick={buttonProps.onClickLeftMenu}>
                    {buttonProps.leftMenuText || buttonProps.text}
                  </Button>
                )
              }>
              {leftMenu}
            </MenuLeft>
          </>
        ) : (
          <div className={clsx(styles.right, collapseRightSideBar && styles.rightHide)}>
            <>
              <ContentSideBarHead title={leftTitle} />

              <> {right}</>
              <div className={clsx(styles.btnBox)}>
                <Tips
                  text={pathname == '/chats' ? 'Here you can craete new chat' : pathname == '/files' ? 'Add a new file' : pathname == '/smart-tools' ? 'Analyze your business' : ''}
                  style={{ width: '100%' }}
                  frameStyle={{
                    top: '2.5px',
                    left: '2.5px',
                    width: 'calc(100% - 5px)',
                    height: 'calc(100% - 5px)',
                    borderColor: '#fff',
                  }}>
                  <Button icon={buttonProps.icon} onClick={buttonProps.onClick} style={{ width: '100%' }}>
                    {buttonProps.text}
                  </Button>
                </Tips>
              </div>
            </>{' '}
          </div>
        )}
        <div
          className={clsx(styles.overlay, showTips && styles.overlayActive)}
          onClick={() => {
            dispatch(setShowTips(false));
          }}></div>
      </div>
    </>
  );
};

export default ContentBlock;

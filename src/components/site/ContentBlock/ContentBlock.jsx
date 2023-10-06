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
const ContentBlock = ({ onAddMobile, leftMenu, left, right, title, leftTitle, buttonProps }) => {
  const { collapseLeftSideBar } = useSelector((state) => state.app);
  const isMobile = useMediaQuery('(max-width: 1024px)');
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.left)}>
          <ContentHead title={title} onAddMobile={onAddMobile} />
          {left}
        </div>

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
          <div className={clsx(styles.right)}>
            <>
              <ContentSideBarHead title={leftTitle} />

              {right}
              <div className={clsx(styles.btnBox)}>
                <Button icon={buttonProps.icon} onClick={buttonProps.onClick}>
                  {buttonProps.text}
                </Button>
              </div>
            </>{' '}
          </div>
        )}
      </div>
    </>
  );
};

export default ContentBlock;

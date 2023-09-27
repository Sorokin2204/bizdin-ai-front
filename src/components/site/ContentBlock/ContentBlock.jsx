import React from 'react';
import styles from './ContentBlock.module.scss';
import ContentHead from '../ContentHead/ContentHead';
import ContentSideBarHead from '../ContentSideBarHead/ContentSideBarHead';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useSelector } from 'react-redux';
const ContentBlock = ({ left, right, title, leftTitle, buttonProps }) => {
  const { collapseLeftSideBar } = useSelector((state) => state.app);
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.left)}>
          <ContentHead title={title} />
          {left}
        </div>
        <div className={clsx(styles.right)}>
          <ContentSideBarHead title={leftTitle} />

          {right}
          <div className={clsx(styles.btnBox)}>
            <Button icon={buttonProps.icon} onClick={buttonProps.onClick}>
              {buttonProps.text}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentBlock;

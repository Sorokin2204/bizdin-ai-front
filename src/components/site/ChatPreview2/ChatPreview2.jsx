import React from 'react';
import styles from './ChatPreview2.module.scss';
import clsx from 'clsx';
const ChatPreview2 = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.text)}>
          Welcome to this helpful PDF file! In this guide, you will learn about the power of atomic habits and how to build better habits in just four simple steps. By following the advice in this book, you can make positive changes in your life and achieve your goals.
        </div>
        <div className={clsx(styles.title)}>Example questions</div>
        <div className={clsx(styles.list)}>
          <div className={clsx(styles.item)}>What are the four simple steps to building better habits?</div>
          <div className={clsx(styles.item)}> How can habits shape our identity?</div>
          <div className={clsx(styles.item)}>What is the first law of atomic habits and how can it help us make positive changes?</div>
        </div>
      </div>
    </>
  );
};

export default ChatPreview2;

import React from 'react';
import styles from './ChatPreview3.module.scss';
import clsx from 'clsx';
import { useMediaQuery } from '../../../utils/useMediaQuery';
import AnimateHeight from 'react-animate-height';
const ChatPreview3 = ({ show }) => {
  const dataList = [
    {
      icon: '../img/road-finish-fill.svg',
      text: 'Brainstorm content ideas',
      color: '#F3540F',
    },
    {
      icon: '../img/star-fill.svg',
      text: 'Explain the concept of bias in AI',
      color: '#3877B7',
    },
    {
      icon: '../img/dimond.svg',
      text: 'Discuss your approach to maintaining a healthy work-life balance.',
      mobText: 'Discuss your approach to maintaining a healthy balance.',
      color: '#3EDC78',
    },
    {
      icon: '../img/export.svg',
      text: 'Share a personal anecdote or experience',
      color: '#8A6381',
    },
    {
      icon: '../img/world-2.svg',
      text: 'Create a story about a world without spoken language.',
      color: '#fff',
      white: true,
    },
    {
      icon: '../img/world.svg',
      text: 'Invent a new, imaginative species of creatures that could exist on a distant, undiscovered planet.',
      mobText: 'Invent a new, imaginative species of creatures',
      color: '#AD00FF',
    },
  ];
  const isMobile = useMediaQuery('(max-width: 1024px)');
  return (
    <>
      <AnimateHeight duration={300} height={show ? 'auto' : 0} delay={100}>
        <div className={clsx(styles.wrap, show && styles.wrapActive)}>
          <div className={clsx(styles.title)}>{isMobile ? 'Unlock the power of AI' : 'Unlock the power of Bizdin AI'} </div>
          <div className={clsx(styles.text)}>Chat with the smartest AI - Experience the power of AI with us</div>
          <div className={clsx(styles.list)}>
            {dataList?.map((itemList) => (
              <div className={clsx(styles.item, itemList?.white && styles.itemWhite)} style={{ backgroundColor: itemList?.color }}>
                <div className={clsx(styles.itemIconWrap)}>
                  {' '}
                  <div className={clsx(styles.itemIcon)} style={{ backgroundImage: `url(${itemList?.icon})` }}></div>
                </div>

                <div className={clsx(styles.itemText)}>{isMobile ? itemList?.mobText || itemList?.text : itemList?.text}</div>
              </div>
            ))}
          </div>
        </div>
      </AnimateHeight>
    </>
  );
};

export default ChatPreview3;

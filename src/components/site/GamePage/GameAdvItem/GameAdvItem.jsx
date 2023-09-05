import React from 'react';
import styles from './GameAdvItem.module.scss';
import clsx from 'clsx';
const GameAdvItem = ({ children, isMomentDelivary }) => {
  return <div className={clsx(styles.item, isMomentDelivary && styles.itemMoment)}>{children}</div>;
};

export default GameAdvItem;

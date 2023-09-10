import React from 'react';
import styles from './GameAdvItem.module.scss';
import clsx from 'clsx';
const GameAdvItem = ({ children, isMomentDelivery }) => {
  return <div className={clsx(styles.item, isMomentDelivery && styles.itemMoment)}>{children}</div>;
};

export default GameAdvItem;

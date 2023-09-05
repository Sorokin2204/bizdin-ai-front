import React from 'react';
import styles from './GameAdvList.module.scss';
import GameAdvItem from '../GameAdvItem/GameAdvItem';
import clsx from 'clsx';
const GameAdvList = ({ list, isMomentDelivary }) => {
  return (
    <>
      <div className={clsx(styles.list)}>
        {list?.map((item) => (
          <GameAdvItem>{item}</GameAdvItem>
        ))}
        {isMomentDelivary && <GameAdvItem isMomentDelivary={isMomentDelivary}>Моментальная доставка</GameAdvItem>}
      </div>
    </>
  );
};

export default GameAdvList;

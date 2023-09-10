import React from 'react';
import styles from './GameAdvList.module.scss';
import GameAdvItem from '../GameAdvItem/GameAdvItem';
import clsx from 'clsx';
const GameAdvList = ({ list, isMomentDelivery }) => {
  return (
    <>
      <div className={clsx(styles.list)}>
        {list?.map((item) => (
          <GameAdvItem>{item}</GameAdvItem>
        ))}
        {isMomentDelivery && <GameAdvItem isMomentDelivery={isMomentDelivery}>Моментальная доставка</GameAdvItem>}
      </div>
    </>
  );
};

export default GameAdvList;

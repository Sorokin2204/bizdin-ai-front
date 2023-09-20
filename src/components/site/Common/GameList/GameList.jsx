import React from 'react';
import styles from './GameList.module.scss';
import clsx from 'clsx';
import GameItem from '../GameItem/GameItem';
const GameList = ({ list, filter }) => {
  return (
    <>
      <div className={clsx(styles.list)}>
        {list?.map((item) => {
          return filter ? <>{item?.filterGameId == filter && <GameItem {...item} />}</> : <GameItem {...item} />;
        })}
      </div>
    </>
  );
};

export default GameList;

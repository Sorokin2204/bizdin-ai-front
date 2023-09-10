import React from 'react';
import styles from './GameList.module.scss';
import clsx from 'clsx';
import GameItem from '../GameItem/GameItem';
const GameList = ({ list, filter }) => {
  const data = [
    { preview: './img/game-1.webp', tagIcon: './img/game-1-icon.webp', tagName: 'Сущности', name: 'Honkai: Star Rail', slug: 'honkai-star-rail-gems' },
    { preview: './img/game-1.webp', tagIcon: './img/game-1-icon.webp', tagName: 'Сущности', name: 'Honkai: Star Rail', slug: 'honkai-star-rail-gems' },
    ,
    { preview: './img/game-1.webp', tagIcon: './img/game-1-icon.webp', tagName: 'Сущности', name: 'Honkai: Star Rail', slug: 'honkai-star-rail-gems' },
    { preview: './img/game-1.webp', tagIcon: './img/game-1-icon.webp', tagName: 'Сущности', name: 'Honkai: Star Rail', slug: 'honkai-star-rail-gems' },
  ];
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

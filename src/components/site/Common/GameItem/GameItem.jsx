import React from 'react';
import styles from './GameItem.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
const GameItem = ({ preview, tagIcon, tagName, name, slug }) => {
  return (
    <>
      <Link to={`/game/` + slug} className={clsx(styles.item)}>
        <div className={clsx(styles.box)} style={{ backgroundImage: `url(${preview})` }}>
          <div className={clsx(styles.icon)}></div>
          <div className={clsx(styles.country)}>
            <div className={clsx(styles.countryIcon)}></div>
            <div className={clsx(styles.countryName)}></div>
          </div>
          <div className={clsx(styles.tag)}>
            <img src={tagIcon} alt="" className={clsx(styles.tagIcon)} />
            <div className={clsx(styles.tagName)}>{tagName}</div>
          </div>
        </div>
        <div className={clsx(styles.name)}>{name}</div>
      </Link>
    </>
  );
};

export default GameItem;

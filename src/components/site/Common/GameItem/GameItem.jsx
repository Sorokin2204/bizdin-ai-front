import React from 'react';
import styles from './GameItem.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { imgPath } from '../../../../utils/imgPath';
const GameItem = ({ preview, iconValute, nameValute, name, slug, isMomentDelivery }) => {
  return (
    <>
      <Link to={slug} className={clsx(styles.item)}>
        <div className={clsx(styles.box)} style={{ backgroundImage: `url(${imgPath(preview)})` }}>
          {isMomentDelivery ? <div className={clsx(styles.icon)}></div> : <></>}

          <div className={clsx(styles.country)}>
            <div className={clsx(styles.countryIcon)}></div>
            <div className={clsx(styles.countryName)}></div>
          </div>
          {iconValute && nameValute && (
            <div className={clsx(styles.tag)}>
              <img src={imgPath(iconValute)} alt="" className={clsx(styles.tagIcon)} />
              <div className={clsx(styles.tagName)}>{nameValute}</div>
            </div>
          )}
        </div>
        <div className={clsx(styles.name)}>{name}</div>
      </Link>
    </>
  );
};

export default GameItem;

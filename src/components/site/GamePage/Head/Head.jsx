import React from 'react';
import styles from './Head.module.scss';
import clsx from 'clsx';
import { imgPath } from '../../../../utils/imgPath';
import { Interweave } from 'interweave';
const Head = ({ preview, name, shortDesc }) => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <img src={imgPath(preview)} alt="" className={clsx(styles.image)} />

        <div className={clsx(styles.content)}>
          <div className={clsx(styles.title)}>{name}</div>
          <div className={clsx(styles.offical)}>Официальное пополнение</div>
          <div className={clsx(styles.text)}>{<Interweave content={shortDesc} />}</div>
        </div>
      </div>
    </>
  );
};

export default Head;

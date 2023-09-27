import React from 'react';
import styles from './FileSideBar.module.scss';
import Tags from '../Tags/Tags';
import clsx from 'clsx';
const FileSideBar = () => {
  const list = ['File 2', 'File 2', 'File 2'];

  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.tags)}>
          <Tags list={list} />
        </div>

        <div className={clsx(styles.imgList)}>
          {' '}
          <img src="../img/file-1.png" alt="" className={clsx(styles.img)} />
          <img src="../img/file-2.png" alt="" className={clsx(styles.img)} />
        </div>

        <div className={clsx(styles.bottom)}>
          <div className={clsx(styles.reset)}>Reset</div>
          <div className={clsx(styles.inputs)}>
            <input type="text" value={2} className={clsx(styles.input)} />
            <input type="text" value={300} className={clsx(styles.input)} disabled />
          </div>
        </div>
      </div>
    </>
  );
};

export default FileSideBar;

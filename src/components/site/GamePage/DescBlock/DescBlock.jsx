import React from 'react';
import styles from './DescBlock.module.scss';
import clsx from 'clsx';
import { Interweave } from 'interweave';

const DescBlock = ({ label, content }) => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.head)}>{label}</div>
        <div className={clsx(styles.content)}>
          <Interweave content={content} />
        </div>
      </div>
    </>
  );
};

export default DescBlock;

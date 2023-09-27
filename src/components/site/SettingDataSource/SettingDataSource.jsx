import React, { useState } from 'react';
import styles from './SettingDataSource.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import AddDataSource from '../AddDataSource/AddDataSource';
const SettingDataSource = () => {
  const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  const [showAdd, setShowAdd] = useState(false);
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.head)}>
          <div className={clsx(styles.title)}>Data source</div>
          <div
            className={clsx(styles.add, showAdd && styles.close)}
            onClick={() => {
              setShowAdd(!showAdd);
            }}></div>
        </div>

        {showAdd ? (
          <AddDataSource />
        ) : (
          <div className={clsx(styles.list)}>
            {data?.map((item) => (
              <div className={clsx(styles.item)}>
                <div className={clsx(styles.itemLeft)}>
                  {' '}
                  <div className={clsx(styles.itemTitle)}>Title key</div>
                  <div className={clsx(styles.itemDate)}>03.03.2023</div>
                </div>
                <div className={clsx(styles.itemRight)}>
                  <Button style={{ width: '72px', fontSize: '14px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--bg-3)' }}>Revoke</Button>{' '}
                  <Button style={{ marginLeft: '12px', width: '48px', fontSize: '14px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--bg-3)' }}>
                    <div className={clsx(styles.trash)}></div>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SettingDataSource;

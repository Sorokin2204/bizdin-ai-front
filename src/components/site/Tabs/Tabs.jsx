import React, { useState } from 'react';
import styles from './Tabs.module.scss';
import clsx from 'clsx';
const Tabs = ({ list }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.list)}>
          {list?.map((item, itemIndex) => (
            <div
              className={clsx(styles.tab, activeTab == itemIndex && styles.tabActive)}
              onClick={() => {
                setActiveTab(itemIndex);
              }}>
              {item?.label}
            </div>
          ))}
        </div>
        {list?.[activeTab]?.content}
      </div>
    </>
  );
};

export default Tabs;

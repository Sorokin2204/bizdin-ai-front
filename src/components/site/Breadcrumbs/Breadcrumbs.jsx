import React from 'react';
import styles from './Breadcrumbs.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
const Breadcrumbs = ({ list = [] }) => {
  return (
    <>
      <div class="container">
        <div className={clsx(styles.wrap)}>
          <div className={clsx(styles.list)}>
            <Link to="/" className={clsx(styles.home)}></Link>
            {list?.map((item) => (
              <>
                {item?.path ? (
                  <Link to={item?.path} className={clsx(styles.itemLink)}>
                    {item?.name}
                  </Link>
                ) : (
                  <div className={clsx(styles.item)}>{item?.name}</div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;

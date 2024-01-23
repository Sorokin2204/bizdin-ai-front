import React, { useState } from 'react';
import styles from './RadioImage.module.scss';
import clsx from 'clsx';
import { useMediaQuery } from '../../../utils/useMediaQuery';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../../redux/slices/app.slice';
import { useSelector } from 'react-redux';
const RadioImage = ({ label, list }) => {
  const { theme } = useSelector((state) => state.app);
  const [active, setActive] = useState(0);
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const dispatch = useDispatch();
  return (
    <>
      <div className={clsx(styles.wrap, !theme && styles.wrapLight)}>
        <div className={clsx(styles.label)}>{label}</div>

        <div className={clsx(styles.list)}>
          <div className={clsx(styles.itemActiveBorder)} style={{ left: `${(isMobile ? 169 : 192) * theme}px` }}></div>
          {list?.map((item, itemIndex) => (
            <div
              className={clsx(styles.item, theme == itemIndex && styles.itemActive)}
              onClick={() => {
                dispatch(setTheme(itemIndex));
                // setActive(itemIndex);
              }}>
              <img src={item?.image} alt="" className={clsx(styles.itemImg)} />
              <div className={clsx(styles.itemName)}>{item?.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RadioImage;

import React, { useEffect, useState } from 'react';
import styles from './PackageList.module.scss';
import clsx from 'clsx';
import PackageItem from '../PackageItem/PackageItem';
import ShowMore from '../ShowMore/ShowMore';
import { useDispatch } from 'react-redux';
import { setActivePackages } from '../../../../redux/slices/game.slice';
import { useSelector } from 'react-redux';

const PackageList = ({ packages, textWarning }) => {
  const { activePackages } = useSelector((state) => state.game);
  const [showMore, setShowMore] = useState(false);
  const [activeLocalPackages, setActiveLocalPackages] = useState([]);
  const onAddPackage = (pack) => {
    const activeLocalPackagesAdd = [...activeLocalPackages, pack];

    setActiveLocalPackages(activeLocalPackagesAdd);
  };
  const onRemovePackage = (removeId) => {
    const activeLocalPackagesRemove = activeLocalPackages?.filter((activePack) => activePack.id !== removeId);
    setActiveLocalPackages(activeLocalPackagesRemove);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(activeLocalPackages);
    dispatch(setActivePackages(activeLocalPackages));
  }, [activeLocalPackages]);

  return (
    <>
      <div className={clsx(styles.wrap)}>
        {textWarning && <div className={clsx(styles.alert)}>{textWarning}</div>}
        <div className={clsx(styles.list)}>
          {packages?.map((item, index) => {
            if (packages?.length > 8) {
              if (!showMore) {
                if (index <= 7) {
                  return <PackageItem {...item} onAdd={onAddPackage} onRemove={onRemovePackage} active={activePackages?.find((activePack) => activePack.id == item.id)} />;
                }
              } else {
                return <PackageItem {...item} onAdd={onAddPackage} onRemove={onRemovePackage} active={activePackages?.find((activePack) => activePack.id == item.id)} />;
              }
            } else {
              return <PackageItem {...item} onAdd={onAddPackage} onRemove={onRemovePackage} active={activePackages?.find((activePack) => activePack.id == item.id)} />;
            }
          })}
        </div>
        {!showMore && packages?.length > 8 && (
          <ShowMore
            onClick={() => {
              setShowMore(true);
            }}
          />
        )}
      </div>
    </>
  );
};

export default PackageList;

import React, { useEffect, useState } from 'react';
import styles from './FilterGame.module.scss';
import FilterGameItem from '../FilterGameItem/FilterGameItem';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { getFilterGameList } from '../../../../redux/actions/app/getFilterGameList';
import { useSelector } from 'react-redux';
const FilterGame = () => {
  const { activeFilter } = useSelector((state) => state.app);
  // const [activeFilter, setActiveFilter] = useState(null);
  const {
    getFilterGameList: { data: filterList },
  } = useSelector((state) => state.app);
  const disaptch = useDispatch();
  useEffect(() => {
    disaptch(getFilterGameList());
  }, []);

  const data = [
    {
      label: 'Игры',
      icon: './img/star.svg',
      color: '#0d6efd',
      value: 'game',
    },
    {
      label: 'Сервисы',
      icon: './img/service.svg',
      color: '#dc3545',
      value: 'service',
    },
    {
      label: 'Софт и VPN',
      icon: './img/catalog.svg',
      color: '#ffc107',
      value: 'soft',
    },
  ];
  return (
    <>
      <div className={clsx(styles.wrap)}>
        {filterList?.map((item) => (
          <FilterGameItem {...item} value={item.id} active={item.id == activeFilter} disabled={item.id != activeFilter && activeFilter} />
        ))}
      </div>
    </>
  );
};

export default FilterGame;

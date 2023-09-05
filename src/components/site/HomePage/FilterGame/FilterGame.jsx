import React, { useState } from 'react';
import styles from './FilterGame.module.scss';
import FilterGameItem from '../FilterGameItem/FilterGameItem';
import clsx from 'clsx';
const FilterGame = () => {
  const [activeFilter, setActiveFilter] = useState(null);
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
        {data?.map((item) => (
          <FilterGameItem {...item} setValue={setActiveFilter} active={item.value == activeFilter} disabled={item.value != activeFilter && activeFilter} />
        ))}
      </div>
    </>
  );
};

export default FilterGame;

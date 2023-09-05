import React from 'react';
import styles from './HomePage.module.scss';
import SliderBanner from '../../../components/site/HomePage/SliderBanner/SliderBanner';
import FilterGame from '../../../components/site/HomePage/FilterGame/FilterGame';
import GameList from '../../../components/site/Common/GameList/GameList';
import Footer from '../../../components/site/Common/Footer/Footer';
const HomePage = () => {
  return (
    <>
      <div className="container">
        {' '}
        <SliderBanner />
        <FilterGame />
        <GameList />
      </div>
    </>
  );
};

export default HomePage;

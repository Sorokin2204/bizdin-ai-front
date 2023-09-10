import React, { useEffect } from 'react';
import styles from './HomePage.module.scss';
import SliderBanner from '../../../components/site/HomePage/SliderBanner/SliderBanner';
import FilterGame from '../../../components/site/HomePage/FilterGame/FilterGame';
import GameList from '../../../components/site/Common/GameList/GameList';
import Footer from '../../../components/site/Common/Footer/Footer';
import { useDispatch } from 'react-redux';
import { getGameList } from '../../../redux/actions/game/getGameList';
import { useSelector } from 'react-redux';
const HomePage = () => {
  const {
    getGameList: { data: gameList },
  } = useSelector((state) => state.game);
  const { activeFilter } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGameList(true));
  }, []);

  return (
    <>
      <div className="container">
        {' '}
        <SliderBanner />
        <FilterGame />
        <GameList list={gameList} filter={activeFilter} />
      </div>
    </>
  );
};

export default HomePage;

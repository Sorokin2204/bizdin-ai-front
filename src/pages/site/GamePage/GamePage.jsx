import React, { useEffect } from 'react';
import styles from './GamePage.module.scss';
import Head from '../../../components/site/GamePage/Head/Head';
import PackageList from '../../../components/site/GamePage/PackageList/PackageList';
import GameInput from '../../../components/site/GamePage/GameInput/GameInput';
import DescBlock from '../../../components/site/GamePage/DescBlock/DescBlock';
import GameReviews from '../../../components/site/GamePage/GameReviews/GameReviews';
import clsx from 'clsx';
import GameSignIn from '../../../components/site/GamePage/GameSignIn/GameSignIn';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { getSingleGame } from '../../../redux/actions/game/getSingleGame';
import { useSelector } from 'react-redux';
import GameList from '../../../components/site/Common/GameList/GameList';
import SiteLayout from '../SiteLayout/SiteLayout';
import NotFound from '../../../components/site/NotFound/NotFound';
import Breadcrumbs from '../../../components/site/Breadcrumbs/Breadcrumbs';
import { getSaveGameInputs } from '../../../redux/actions/order/getSaveGameInputs';
const GamePage = () => {
  const { parentSlug, slug } = useParams();
  const dispatch = useDispatch();
  const {
    getSingleGame: { data: gameData, error: gameError },
  } = useSelector((state) => state.game);

  const {
    authUser: { data: userData },
  } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getSingleGame({ parentSlug, slug, client: true }));
  }, [slug]);

  useEffect(() => {
    if (userData && gameData) {
      dispatch(getSaveGameInputs(gameData?.id));
    }
  }, [userData, gameData]);

  return (
    <>
      {gameError ? (
        <NotFound />
      ) : gameData ? (
        <SiteLayout>
          {gameData && gameData?.type == 'game' ? (
            <>
              <Breadcrumbs list={gameData?.parentGame ? [{ name: gameData?.parentGame?.name, path: `/${gameData?.parentGame?.slug}` }, { name: gameData?.name }] : [{ name: gameData?.name }]} />
              <div className={clsx(styles.wrap)}>
                <div className={clsx(styles.container)}>
                  <Head {...gameData} />
                  {}
                  {!userData && <GameSignIn />}

                  <PackageList {...gameData} alert={'Перед заказом, пожалуйста, прочтите Инструкцию к товару (особенно если ваш заказ возвращается)'} />
                  <GameInput {...gameData} />
                  <DescBlock content={gameData.instruction} label={'Инструкция'} />
                  <DescBlock content={gameData.desc} label={'Описание'} />
                  <GameReviews {...gameData} />
                </div>
              </div>
            </>
          ) : gameData?.type == 'parentGame' ? (
            <>
              <Breadcrumbs list={[{ name: gameData?.name }]} />
              <div className={clsx(styles.wrapParent)}>
                <div className={clsx(styles.container)}>
                  {' '}
                  <div className={clsx(styles.titleParent)}>{gameData?.name}</div>
                  <div className={clsx(styles.textParent)}>{gameData?.shortDesc}</div>
                  <GameList list={gameData?.games} />
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </SiteLayout>
      ) : (
        <></>
      )}
    </>
  );
};

export default GamePage;

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
const GamePage = () => {
  const { parentSlug, slug } = useParams();
  const dispatch = useDispatch();
  const {
    getSingleGame: { data: gameData, error: gameError },
  } = useSelector((state) => state.game);
  useEffect(() => {
    dispatch(getSingleGame({ parentSlug, slug, client: true }));
  }, [slug]);

  const data = {
    image: '../img/game-1.webp',
    title: 'Сущности и пропуск Honkai: Star Rail',
    text: 'Забирай звездный нефрит!',
    isMomentDelivary: true,
    advList: ['Полностью безопасно 🛡️', 'Без передачи аккаунта 👥', 'Выгодные цены 💸'],
    desc: `
  <div class="good-data-item_text"><p><strong>Genshin impact - это игра, запавшая в сердечко миллионам игроков по всему миру!</strong> Невероятно интересные персонажи, красивейшая графика, при том НА ЛЮБЫХ ПЛАТФОРМАХ! И конечно же постоянные обновления, которые продолжают сюжет по всему Тейвату! Главной валютой в игре служат примогемы, которые можно получить почти за любое действие в игре. Вот только, их всегда будет не хватить, а время для получения персонажей всегда ограничено! Но мы предоставляем вам самый выгодный донат примогемами (кристаллами сотворения) и покупку благословления полой луны в Genshin impact, чтобы вы всегда могли получить желанного персонажа!</p> <p><img src="https://donatov.net/storage/images/donatov.net-16828262544642.webp" alt="Иконка Лестница"> <strong>Покори самые высокие этажи Бездны, вместе с Donatov.net!</strong></p> <p>🌐 <a href="https://genshin.hoyoverse.com/ru/home">Официальный сайт игры</a> <br>
📱 Скачать Genshin Impact на: <a href="https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact">Android</a> / <a href="https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact">iOS</a> / <a href="https://sg-public-api.hoyoverse.com/event/download_porter/link/ys_global/genshinimpactpc/default">Компьютер</a></p></div>  


  `,
    instruction: `<div class="good-data-item_text"><p><strong>Как пополнить кристаллы сотворения на ваш аккаунт Геншин Импакт в России и СНГ</strong></p> <ul><li>Выберите необходимое количество примогемов (или луну)</li> <li>Затем введите или скопируйте UID из профиля игры в поле UID (не переживайте, это открытые данные)
<a href="https://donatov.net/storage/images/donatov.net-16827151151644.webp" data-fancybox=""><img src="https://donatov.net/storage/images/donatov.net-16827151151644.webp" alt="Как найти свой UID в Геншине" class="w-100 rounded"></a></li> <li>После этого проверяем все данные, чтобы нигде не было ошибки и нажимаем "Купить" &lt;(￣︶￣)&gt;</li> <li>Оплачиваем заказ любым доступным вам способом 💳</li> <li>После оплаты заказа он отобразится у вас в личном кабинете и через несколько минут ваш донат придет вам в игру! ✨
<img src="https://donatov.net/storage/images/donatov.net-16825295747725.webp" alt="Процесс покупки примогемов в Геншин Импакте" class="max-400 w-100 rounded"></li></ul> <p><img src="https://donatov.net/storage/images/donatov.net-16827301559428.webp" alt="Иконка Playstation Genshin Impact"> <strong>Как получить свои примогемы на Playstation?</strong></p> <p><em>Обратите внимание, что для получения кристаллов сотворения в Genshin Impact на Playstation, необходимо будет зайти через ПК или Смартфон в игру, и обменять кристаллы на примогемы, после чего молитвы можно будет совершать прямо на вашей консоли Playstation. Это ограничение компании Sony.</em></p></div>`,
  };
  return (
    <>
      {gameError ? (
        <NotFound />
      ) : (
        <SiteLayout>
          {gameData && gameData?.type == 'game' ? (
            <div className={clsx(styles.wrap)}>
              <div className={clsx(styles.container)}>
                <Head {...gameData} />
                <GameSignIn />
                <PackageList {...gameData} alert={'Перед заказом, пожалуйста, прочтите Инструкцию к товару (особенно если ваш заказ возвращается)'} />
                <GameInput {...gameData} />
                <DescBlock content={gameData.instruction} label={'Инструкция'} />
                <DescBlock content={gameData.desc} label={'Описание'} />
                <GameReviews {...gameData} />
              </div>
            </div>
          ) : gameData?.type == 'parentGame' ? (
            <div className={clsx(styles.wrapParent)}>
              <div className={clsx(styles.container)}>
                {' '}
                <div className={clsx(styles.titleParent)}>{gameData?.name}</div>
                <div className={clsx(styles.textParent)}>{gameData?.shortDesc}</div>
                <GameList list={gameData?.games} />
              </div>
            </div>
          ) : (
            <></>
          )}
        </SiteLayout>
      )}
    </>
  );
};

export default GamePage;

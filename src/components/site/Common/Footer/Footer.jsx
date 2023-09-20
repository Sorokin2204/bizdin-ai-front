import React from 'react';
import styles from './Footer.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.top)}>
          <div className={clsx(styles.listList)}>
            <Link to="/" className={clsx(styles.link)}>
              Главная
            </Link>
            <Link to="/feedback" className={clsx(styles.link)}>
              Отзывы
            </Link>
            <Link to="/support" className={clsx(styles.link)}>
              Поддержка
            </Link>
          </div>
          <div className={clsx(styles.listSocial)}>
            <div className={clsx(styles.social)}>
              <img src="../img/telegram.svg" />
            </div>
            <div className={clsx(styles.social)}>
              <img src="../img/vkontakte.svg" />
            </div>
            <div className={clsx(styles.social)}>
              <img src="../img/youtube.svg" />
            </div>
          </div>
        </div>
        <div className={clsx(styles.text)}>
          Donatov.net - это магазин игрового доната, который позволяет легко и безопасно пополнить баланс в различных онлайн играх и площадках. Мы предлагаем пополнение баланса в таких играх, как Genshin Impact, Valorant, а также популярных сервисах, таких как Steam, Blizzard и Warcraft. Мы
          используем только безопасные способы пополнения, поэтому вы можете быть уверены в безопасности своих данных и средств. Мы гарантируем качественное выполнение заказов и трудимся круглосуточно, чтобы обеспечить максимальный комфорт для наших клиентов. Пополнить баланс или купить игровую
          валюту? Легко с Donatov.net.
        </div>
        <div className={clsx(styles.copy)}>
          <img src="../img/wallet-logo.svg" />
          Donatov.net 2023
        </div>
        <div className={clsx(styles.bottomLinkList)}>
          <Link to="/privacy" className={clsx(styles.bottomLink)}>
            Политика обработки данных{' '}
          </Link>
          <Link to="/eula" className={clsx(styles.bottomLink)}>
            Пользовательское соглашение{' '}
          </Link>
          <Link to="/refund" className={clsx(styles.bottomLink)}>
            {' '}
            Политика возврата{' '}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;

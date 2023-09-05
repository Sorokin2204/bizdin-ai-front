import React from 'react';
import styles from './AuthPage.module.scss';
import Input from '../../../components/site/Common/Input/Input';
import Button from '../../../components/site/Common/Button/Button';
import clsx from 'clsx';
const AuthPage = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.head)}>Вход</div>
        <div className={clsx(styles.body)}>
          <div className={clsx(styles.text)}>Укажите свой Email, на который будет отправлена ссылка входа, либо воспользуйтесь сторонними сервисами. Ваш профиль будет привязан к выбранному способу</div>
          <Input label={'Электронная почта'} placeholder={'Email'} grey />
          <div className={clsx(styles.btnBox)}>
            {' '}
            <Button lg>Войти</Button>
          </div>
          <div className={styles.or}>Или через</div>
          <div className={clsx(styles.btn, styles.discord)}>
            <img src="./img/discord.svg" />
            Discord
          </div>
          <div className={clsx(styles.btn, styles.vk)}>
            {' '}
            <img src="./img/vkontakte.svg" />
            Вконтакте
          </div>
          <div className={clsx(styles.btn, styles.telegram)}>
            {' '}
            <img src="./img/telegram.svg" />
            Телеграм
          </div>
          <div className={clsx(styles.btn, styles.google)}>
            {' '}
            <img src="./img/google.svg" />
            Google
          </div>
        </div>
        <div className={clsx(styles.footer)}></div>
      </div>
    </>
  );
};

export default AuthPage;

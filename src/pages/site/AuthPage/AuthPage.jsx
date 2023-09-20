import React, { useEffect } from 'react';
import styles from './AuthPage.module.scss';
import Input from '../../../components/site/Common/Input/Input';
import Button from '../../../components/site/Common/Button/Button';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { createUser } from '../../../redux/actions/user/createUser';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ErrorMessage from '../../../components/site/Common/ErrorMessage/ErrorMessage';
import { resetGetSingleGame } from '../../../redux/slices/game.slice';
import { useNavigate } from 'react-router';
import Breadcrumbs from '../../../components/site/Breadcrumbs/Breadcrumbs';
const AuthPage = () => {
  const authForm = useForm();
  const dispatch = useDispatch();
  const {
    createUser: { data: createData, loading: createLoading, error: createError },
  } = useSelector((state) => state.user);
  const onSubmit = (data) => {
    dispatch(createUser({ email: data.email }));
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (createData) {
      dispatch(resetGetSingleGame());
      navigate('/login/attempt');
    }
  }, [createData]);
  return (
    <>
      <Breadcrumbs list={[{ name: 'Вход' }]} />
      <div class="container">
        <div className={clsx(styles.wrap)}>
          <div className={clsx(styles.head)}>Вход</div>
          <div className={clsx(styles.body)}>
            <div className={clsx(styles.text)}>Укажите свой Email, на который будет отправлена ссылка входа, либо воспользуйтесь сторонними сервисами. Ваш профиль будет привязан к выбранному способу</div>
            <Input label={'Электронная почта'} placeholder={'Email'} grey form={authForm} slug="email" />
            <div className={clsx(styles.btnBox)}>
              {createError?.error == 'USER_EXIST' && <ErrorMessage text={'Пользователь с таким email уже существует'} />}
              <Button lg onClick={authForm.handleSubmit(onSubmit)}>
                Войти
              </Button>
            </div>
          </div>
          <div className={clsx(styles.box)}>
            {' '}
            <div className={styles.or}>Или через</div>
            <div className={clsx(styles.btn, styles.discord)}>
              <img src="../img/discord.svg" />
              Discord
            </div>
            <div className={clsx(styles.btn, styles.vk)}>
              {' '}
              <img src="../img/vkontakte.svg" />
              Вконтакте
            </div>
            <div className={clsx(styles.btn, styles.telegram)}>
              {' '}
              <img src="../img/telegram.svg" />
              Телеграм
            </div>
            <div className={clsx(styles.btn, styles.google)}>
              {' '}
              <img src="../img/google.svg" />
              Google
            </div>
          </div>
          <div className={clsx(styles.footer)}></div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;

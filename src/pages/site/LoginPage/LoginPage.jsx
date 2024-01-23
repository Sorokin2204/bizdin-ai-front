import React, { useState } from 'react';
import styles from './LoginPage.module.scss';
import Slider from '../../../components/site/Slider/Slider';
import InputMain from '../../../components/site/InputMain/InputMain';
import Button from '../../../components/site/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userSignUp } from '../../../redux/actions/user/userSignUp';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userSignIn } from '../../../redux/actions/user/userSignIn';
import { resetUserSignIn, resetUserSignUp } from '../../../redux/slices/user.slice';
const LoginPage = () => {
  const signInForm = useForm();
  const signUpForm = useForm();
  const dispatch = useDispatch();
  const [tabActive, setTabActive] = useState('sign-in');
  const {
    userSignUp: { data: userSignUpData, error: userSignUpError },
  } = useSelector((state) => state.user);
  const {
    userSignIn: { data: userSignInData, error: userSignInError },
  } = useSelector((state) => state.user);
  const onSubmitSignUp = (data) => {
    dispatch(
      userSignUp({
        email: data.email,
        password1: data.password1,
        password2: data.password2,
      }),
    );
  };
  const onSubmitSignIn = (data) => {
    dispatch(
      userSignIn({
        username: data.email,
        password: data.password,
      }),
    );
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (userSignInData) {
      localStorage.setItem('token-access', userSignInData?.access_token);

      dispatch(resetUserSignIn());
      navigate('/');
    }
  }, [userSignInData]);
  useEffect(() => {
    if (userSignUpData) {
      localStorage.setItem('token-access', userSignInData?.access_token);

      dispatch(resetUserSignUp());
      navigate('/');
    }
  }, [userSignUpData]);
  useEffect(() => {
    if (userSignUpError) {
      Object.keys(userSignUpError).forEach(function (key, index) {
        let errorMessageFull = userSignUpError[key].join(' ');
        signUpForm.setError(key, { type: 'custom', message: errorMessageFull });
      });

      console.log(userSignUpError);
    }
  }, [userSignUpError]);

  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.left)}>
          <Slider
            list={[
              { title: 'Plan your business', image: '../img/slider-1.svg', label: `I'll write you a detailed plan of your business in 5 minutes` },
              { title: 'Consult with specialists', image: '../img/slider-2.svg', label: 'Consult with experts in your field and gain experience in all industries' },

              { title: 'Explore your files quickly', image: '../img/slider-3.svg', label: 'Study your files quickly and efficiently without any problems' },
            ]}
          />
        </div>
        <div className={clsx(styles.right)}>
          <div className={clsx(styles.title)}>Get started</div>
          {tabActive == 'sign-up' ? (
            <>
              <InputMain type2 label={'Email address'} placeholder={'Email address'} form={signUpForm} name="email" />
              <InputMain type2 label={'Password'} placeholder={'Password'} form={signUpForm} name="password1" />
              <InputMain type2 label={'Repeat password'} placeholder={'Repeat password'} form={signUpForm} name="password2" />
            </>
          ) : (
            <>
              <InputMain type2 label={'Email address'} placeholder={'Email address'} form={signInForm} name="email" />
              <InputMain type2 label={'Password'} placeholder={'Password'} form={signInForm} name="password" />
            </>
          )}

          <Button
            style={{ transition: 'all 0.5s', height: '60px', fontSize: '20px', marginTop: '80px', borderRadius: '7px', ...(tabActive == 'sign-up' && { border: '1px solid var(--text)', background: 'transparent' }) }}
            onClick={() => {
              if (tabActive == 'sign-in') {
                signInForm.handleSubmit(onSubmitSignIn)();
              } else {
                setTabActive('sign-in');
              }
            }}>
            Login
          </Button>
          <Button
            style={{ transition: 'all 0.5s', height: '60px', fontSize: '20px', marginTop: '20px', borderRadius: '7px', ...(tabActive == 'sign-in' && { border: '1px solid var(--text)', background: 'transparent' }) }}
            onClick={() => {
              if (tabActive == 'sign-up') {
                signUpForm.handleSubmit(onSubmitSignUp)();
              } else {
                setTabActive('sign-up');
              }
            }}>
            Registration
          </Button>
          <img src="./img/logo-2.svg" alt="" className={clsx(styles.logo)} />
          <div className={clsx(styles.links)}>
            <Link to="/" className={clsx(styles.link)}>
              Terms of use
            </Link>
            <Link to="/" className={clsx(styles.link)}>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

import React from 'react';
import styles from './LoginPage.module.scss';
import Slider from '../../../components/site/Slider/Slider';
import InputMain from '../../../components/site/InputMain/InputMain';
import Button from '../../../components/site/Button/Button';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
const LoginPage = () => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.left)}>
          <Slider
            list={[
              { title: 'Plan your business', image: '../img/slider-1.svg', label: `I'll write you a detailed plan of your business in 5 minutes` },
              { title: 'Consult with specialists', image: '../img/slider-2.svg', label: 'Consult with experts in your field and gain experience in all industries' },
              ,
              { title: 'Explore your files quickly', image: '../img/slider-3.svg', label: 'Study your files quickly and efficiently without any problems' },
            ]}
          />
        </div>
        <div className={clsx(styles.right)}>
          <div className={clsx(styles.title)}>Get started</div>
          <InputMain type2 label={'Email address'} placeholder={'Email address'} />
          <InputMain type2 label={'Password'} placeholder={'Password'} />
          <Button style={{ height: '70px', fontSize: '24px', marginTop: '80px', borderRadius: '7px' }}>Login</Button>
          <Button style={{ height: '70px', fontSize: '24px', marginTop: '24px', borderRadius: '7px', border: '1px solid var(--text)', background: 'transparent' }}>Registration</Button>
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

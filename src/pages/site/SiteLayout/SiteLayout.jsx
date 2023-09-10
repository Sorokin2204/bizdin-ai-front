import React, { useEffect } from 'react';
import styles from './SiteLayout.module.scss';
import Navbar from '../../../components/site/Common/Navbar/Navbar';
import clsx from 'clsx';
import Footer from '../../../components/site/Common/Footer/Footer';
import { useDispatch } from 'react-redux';
import { authUser } from '../../../redux/actions/user/authUser';
const SiteLayout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('auth-token')) {
      dispatch(authUser());
    }
  }, []);

  return (
    <div>
      <div className={clsx(styles.wrap)}>
        <Navbar />
        {children}
        <div className="container">
          {' '}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SiteLayout;

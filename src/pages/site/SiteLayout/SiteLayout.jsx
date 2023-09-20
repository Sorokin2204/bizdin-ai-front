import React, { useEffect } from 'react';
import styles from './SiteLayout.module.scss';
import Navbar from '../../../components/site/Common/Navbar/Navbar';
import clsx from 'clsx';
import Footer from '../../../components/site/Common/Footer/Footer';
import { useDispatch } from 'react-redux';
import { authUser } from '../../../redux/actions/user/authUser';
import MobileNavBar from '../../../components/site/Common/MobileNavBar/MobileNavBar';
import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
const SiteLayout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const {
    authUser: { data: authData, error: authError, loading: authLoading },
  } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(authUser());
  }, []);
  useEffect(() => {
    if (!authData && authError && !authLoading && (pathname == '/profile' || pathname == '/profile/orders' || pathname == '/coupon' || pathname == '/profile/wallet' || pathname == '/profile/wallet/topup')) {
      navigate('/');
    }
  }, [pathname, authData, authError]);

  return (
    <div>
      <div className={clsx(styles.wrap)}>
        <Navbar />
        {children}
        <div className="container">
          {' '}
          <Footer />
          <MobileNavBar />
        </div>
      </div>
    </div>
  );
};

export default SiteLayout;

import React, { useEffect, useState } from 'react';
import styles from './SiteLayout.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { setTheme } from '../../../redux/slices/app.slice';
import SideBar from '../../../components/site/SideBar/SideBar';
import UserModal from '../../../components/site/UserModal/UserModal';
import { useMediaQuery } from '../../../utils/useMediaQuery';
import SideBarMobile from '../../../components/site/SideBarMobile/SideBarMobile';
import StepModal from '../../../components/site/StepModal/StepModal';
import { useSearchParams } from 'react-router-dom';
import StartPreview from '../../../components/site/StartPreview/StartPreview';
import { userAuth } from '../../../redux/actions/user/userAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SiteLayout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { theme, showUserModal } = useSelector((state) => state.app);
  const isMobile = useMediaQuery('(max-width: 1024px)');
  let [searchParams] = useSearchParams();

  const [startPrev, setStartPrev] = useState(false);
  useEffect(() => {
    console.log(searchParams.get('start'));
  }, [searchParams]);
  useEffect(() => {
    dispatch(userAuth());
  }, []);

  return (
    <div>
      {' '}
      <ToastContainer style={{ zIndex: '10000000000000', fontSize: '14px' }} theme="colored" position="bottom-right" autoClose={2000} />
      <UserModal />
      <StepModal />
      {startPrev && <StartPreview />}
      <div className={clsx(styles.wrap)}>
        {isMobile ? (
          <SideBarMobile />
        ) : (
          <div className={clsx(styles.left)}>
            <SideBar />
          </div>
        )}
        <div className={clsx(styles.right)}> {children}</div>
      </div>
    </div>
  );
};

export default SiteLayout;

import React, { useEffect } from 'react';
import styles from './SiteLayout.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { setTheme } from '../../../redux/slices/app.slice';
import SideBar from '../../../components/site/SideBar/SideBar';
import UserModal from '../../../components/site/UserModal/UserModal';
import { useMediaQuery } from '../../../utils/useMediaQuery';
import SideBarMobile from '../../../components/site/SideBarMobile/SideBarMobile';
import StepModal from '../../../components/site/StepModal/StepModal';
const SiteLayout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { theme, showUserModal } = useSelector((state) => state.app);
  const isMobile = useMediaQuery('(max-width: 1024px)');
  return (
    <div>
      <UserModal />
      <StepModal />
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

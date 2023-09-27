import React, { useEffect } from 'react';
import styles from './SiteLayout.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { setTheme } from '../../../redux/slices/app.slice';
import SideBar from '../../../components/site/SideBar/SideBar';
import UserModal from '../../../components/site/UserModal/UserModal';
const SiteLayout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { theme, showUserModal } = useSelector((state) => state.app);

  return (
    <div>
      <UserModal />
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.left)}>
          <SideBar />
        </div>
        <div className={clsx(styles.right)}> {children}</div>
      </div>
    </div>
  );
};

export default SiteLayout;

import React, { useEffect } from 'react';
import styles from './UserModal.module.scss';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import SettingMenu from '../SettingMenu/SettingMenu';
import { useDispatch } from 'react-redux';
import { setActiveSettingOption, setShowUserModal } from '../../../redux/slices/app.slice';
import SettingEditProfile from '../SettingEditProfile/SettingEditProfile';
import SettingPassoword from '../SettingPassoword/SettingPassoword';
import SettingNotification from '../SettingNotification/SettingNotification';
import SettingGeneral from '../SettingGeneral/SettingGeneral';
import SettingDataControl from '../SettingDataControl/SettingDataControl';
import SettingDataSource from '../SettingDataSource/SettingDataSource';
import SettingDelete from '../SettingDelete/SettingDelete';
import { useMediaQuery } from '../../../utils/useMediaQuery';
import SettingMobHome from '../SettingMobHome/SettingMobHome';
import { ToastContainer } from 'react-toastify';
const UserModal = () => {
  const { showUserModal, activeSettingOption, theme } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 1024px)');
  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [theme]);
  return (
    <>
      <div
        className={clsx(styles.overlay, showUserModal && styles.overlayActive)}
        onClick={() => {
          dispatch(setShowUserModal(false));
        }}>
        {' '}
      </div>
      <div className={clsx(styles.modal, showUserModal && styles.modalActive)}>
        {isMobile && (
          <div className={clsx(styles.modalHead)}>
            <div
              className={clsx(styles.modalBack, !activeSettingOption && styles.modalClose)}
              onClick={() => {
                if (activeSettingOption) {
                  dispatch(setActiveSettingOption(''));
                } else {
                  dispatch(setShowUserModal(false));
                }
              }}></div>
            <div className={clsx(styles.modalHeadTitle)}>{activeSettingOption ? activeSettingOption : 'Settings'}</div>
          </div>
        )}
        {!isMobile && <SettingMenu />}

        <div className={clsx(styles.content)}>
          {activeSettingOption == 'Edit profile' ? (
            <SettingEditProfile />
          ) : activeSettingOption == 'Password' ? (
            <SettingPassoword />
          ) : activeSettingOption == 'Notifications' ? (
            <SettingNotification />
          ) : activeSettingOption == 'General' ? (
            <SettingGeneral />
          ) : activeSettingOption == 'Data controls' ? (
            <SettingDataControl />
          ) : activeSettingOption == 'Data source' ? (
            <SettingDataSource />
          ) : activeSettingOption == 'Delete account' ? (
            <SettingDelete />
          ) : (
            <SettingMobHome />
          )}
        </div>
      </div>
    </>
  );
};

export default UserModal;

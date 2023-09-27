import React from 'react';
import styles from './UserModal.module.scss';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import SettingMenu from '../SettingMenu/SettingMenu';
import { useDispatch } from 'react-redux';
import { setShowUserModal } from '../../../redux/slices/app.slice';
import SettingEditProfile from '../SettingEditProfile/SettingEditProfile';
import SettingPassoword from '../SettingPassoword/SettingPassoword';
import SettingNotification from '../SettingNotification/SettingNotification';
import SettingGeneral from '../SettingGeneral/SettingGeneral';
import SettingDataControl from '../SettingDataControl/SettingDataControl';
import SettingDataSource from '../SettingDataSource/SettingDataSource';
import SettingDelete from '../SettingDelete/SettingDelete';
const UserModal = () => {
  const { showUserModal, activeSettingOption } = useSelector((state) => state.app);
  const dispatch = useDispatch();
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
        <SettingMenu />
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
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default UserModal;

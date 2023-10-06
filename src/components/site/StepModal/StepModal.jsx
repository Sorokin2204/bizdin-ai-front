import React, { useState } from 'react';
import styles from './StepModal.module.scss';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import SettingMenu from '../SettingMenu/SettingMenu';
import { useDispatch } from 'react-redux';
import { setActiveSettingOption, setShowStepModal } from '../../../redux/slices/app.slice';
import SettingEditProfile from '../SettingEditProfile/SettingEditProfile';
import SettingPassoword from '../SettingPassoword/SettingPassoword';
import SettingNotification from '../SettingNotification/SettingNotification';
import SettingGeneral from '../SettingGeneral/SettingGeneral';
import SettingDataControl from '../SettingDataControl/SettingDataControl';
import SettingDataSource from '../SettingDataSource/SettingDataSource';
import SettingDelete from '../SettingDelete/SettingDelete';
import { useMediaQuery } from '../../../utils/useMediaQuery';
import SettingMobHome from '../SettingMobHome/SettingMobHome';
const StepModal = () => {
  const { showStepModal, activeSettingOption } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const list = [1, 1, 1];
  const [active, setActive] = useState(0);
  return (
    <>
      <div
        className={clsx(styles.overlay, showStepModal && styles.overlayActive)}
        onClick={() => {
          dispatch(setShowStepModal(false));
        }}></div>
      <div className={clsx(styles.modal, showStepModal && styles.modalActive)}>
        {' '}
        <div
          className={clsx(styles.close)}
          onClick={() => {
            dispatch(setShowStepModal(false));
          }}></div>{' '}
        <div className={clsx(styles.content)}>
          <div className={clsx(styles.head)}>
            <div className={clsx(styles.title)}>Brainstorming</div>
            <div className={clsx(styles.step)}>Step - {active + 1}</div>
          </div>
          <div className={clsx(styles.frame)}></div>{' '}
          <div className={clsx(styles.dots)}>
            {list?.map((item, indexItem) => (
              <div
                className={clsx(styles.dot, active == indexItem && styles.dotActive)}
                onClick={() => {
                  setActive(indexItem);
                }}></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StepModal;

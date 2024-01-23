import React, { useEffect } from 'react';
import styles from './SettingEditProfile.module.scss';
import InputMain from '../InputMain/InputMain';
import clsx from 'clsx';
import Button from '../Button/Button';
import SettingAvatar from '../SettingAvatar/SettingAvatar';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userUpdate } from '../../../redux/actions/user/userUpdate';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loading from '../Loading/Loading';
const SettingEditProfile = () => {
  const {
    userUpdate: { data: userUpdateData, error: userUpdateError, loading: userUpdateLoading },
  } = useSelector((state) => state.user);
  useEffect(() => {
    if (userUpdateError) {
      toast.error('Произошла ошибка при обновлении данных');
    }
  }, [userUpdateError]);

  const dispatch = useDispatch();
  const updateUserForm = useForm();
  const onSubmit = (data) => {
    dispatch(userUpdate({ first_name: data?.firstName, last_name: data?.lastName, username: 'test' }));
  };
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.title)}>Edit profile </div>
        {/* <SettingAvatar /> */}
        <InputMain label={'First name'} name={'firstName'} form={updateUserForm} icon={'./img/account.svg'} />
        <InputMain name={'lastName'} label={'Last name'} icon={'./img/account.svg'} form={updateUserForm} />
        {/* <InputMain label={'Location'} placeholder={'Location'} icon={'./img/location.svg'} /> */}
        <div className={clsx(styles.btnBox)}>
          <Button style={{ borderRadius: '12px' }} onClick={updateUserForm.handleSubmit(onSubmit)}>
            Save changes
          </Button>
        </div>
        {userUpdateLoading && <Loading />}
      </div>
    </>
  );
};

export default SettingEditProfile;

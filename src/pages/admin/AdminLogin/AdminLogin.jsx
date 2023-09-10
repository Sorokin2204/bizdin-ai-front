import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import InfoAlert from '../../../components/admin/InfoAlert/InfoAlert';
import Loading from '../../../components/admin/Loading/Loading';
import { apiUrl } from '../../../utils/apiUrl';
import styles from './AdminLogin.module.scss';
const AdminLogin = () => {
  const loginForm = useForm({ login: '', password: '' });
  const errors = loginForm?.formState?.errors;
  const [loginRequest, setloginRequest] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const onSubmit = (data) => {
    setloginRequest({ loading: true });
    axios
      .post(apiUrl('login'), data)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        setloginRequest({ loading: false, data: true });
        navigate('/admin/pages');
      })

      .catch(() => {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 2000);
        setloginRequest({ loading: false, data: null, error: true });
      });
    console.log(data);
  };

  const navigate = useNavigate();
  return (
    <>
      <img
        onClick={() => {
          navigate('/');
        }}
        src="/img/logo.png"
        style={{ margin: '0 auto', display: 'block', marginTop: '20px' }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', alignItems: 'center', justifyContent: 'center', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
        <Box sx={{ fontSize: '20px', mb: 2 }}>Вход</Box>
        <Controller name="login" control={loginForm.control} rules={{ required: true }} render={({ field }) => <TextField sx={{ mb: 2 }} size="small" error={errors?.login} helperText={errors?.login && 'Заполните поле'} label={'Логин'} {...field} />} />
        <Controller name="password" control={loginForm.control} rules={{ required: true }} render={({ field }) => <TextField sx={{ mb: 2 }} size="small" error={errors?.password} label={'Пароль'} helperText={errors?.password && 'Заполните поле'} {...field} />} />
        <Button onClick={loginForm.handleSubmit(onSubmit)} variant="outlined" sx={{ width: '100%' }}>
          Войти
        </Button>
      </Box>
      {loginRequest?.loading && <Loading />}

      <InfoAlert error show={showAlert} text={'Неправильный логин или пароль'} />
    </>
  );
};

export default AdminLogin;

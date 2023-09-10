import { Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import SupportAddEdit from '../../../components/admin/SupportAddEdit/SupportAddEdit';
import { apiUrl } from '../../../utils/apiUrl';
import styles from './AdminSupportUpdate.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSingleSupport } from '../../../redux/actions/support/getSingleSupport';

const AdminSupportUpdate = () => {
  let { slug } = useParams();

  const {
    getSingleSupport: { data, loading, error },
  } = useSelector((state) => state.support);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleSupport(slug));
  }, []);
  return loading ? <CircularProgress sx={{ display: 'block', margin: '0 auto', mt: 10 }} /> : error ? <Box sx={{ fontSize: ' 24px', fontWeight: '600', margin: '0 auto', textAlign: 'center', mt: 40, opacity: '0.6' }}>Игра не найден</Box> : <SupportAddEdit data={data} />;
};

export default AdminSupportUpdate;

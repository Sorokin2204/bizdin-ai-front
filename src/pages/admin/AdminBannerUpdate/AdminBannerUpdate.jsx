import { Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BannerAddEdit from '../../../components/admin/BannerAddEdit/BannerAddEdit';
import { apiUrl } from '../../../utils/apiUrl';
import styles from './AdminBannerUpdate.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSingleBanner } from '../../../redux/actions/banner/getSingleBanner';
import SupportAddEdit from '../../../components/admin/SupportAddEdit/SupportAddEdit';
const AdminBannerUpdate = () => {
  let { slug } = useParams();

  const {
    getSingleBanner: { data, loading, error },
  } = useSelector((state) => state.banner);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleBanner(slug));
  }, []);
  return loading ? <CircularProgress sx={{ display: 'block', margin: '0 auto', mt: 10 }} /> : error ? <Box sx={{ fontSize: ' 24px', fontWeight: '600', margin: '0 auto', textAlign: 'center', mt: 40, opacity: '0.6' }}>Баннер не найден</Box> : <BannerAddEdit data={data} />;
};

export default AdminBannerUpdate;

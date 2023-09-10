import { Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import GameAddEdit from '../../../components/admin/GameAddEdit/GameAddEdit';
import { apiUrl } from '../../../utils/apiUrl';
import styles from './AdminGameUpdate.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSingleGame } from '../../../redux/actions/game/getSingleGame';
const AdminGameUpdate = () => {
  let { slug } = useParams();

  const {
    getSingleGame: { data, loading, error },
  } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleGame({ slug }));
  }, []);
  return loading ? <CircularProgress sx={{ display: 'block', margin: '0 auto', mt: 10 }} /> : error ? <Box sx={{ fontSize: ' 24px', fontWeight: '600', margin: '0 auto', textAlign: 'center', mt: 40, opacity: '0.6' }}>Игра не найден</Box> : <GameAddEdit data={data} />;
};

export default AdminGameUpdate;

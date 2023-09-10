import { Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import GameAddEdit from '../../../components/admin/GameAddEdit/GameAddEdit';
import { apiUrl } from '../../../utils/apiUrl';
import styles from './AdminParentGameUpdate.module.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getSingleGame } from '../../../redux/actions/game/getSingleGame';
import { getSingleParentGame } from '../../../redux/actions/parentGame/getSingleParentGame';
import ParentGameAddEdit from '../../../components/admin/ParentGameAddEdit/ParentGameAddEdit';
const AdminParentGameUpdate = () => {
  let { slug } = useParams();

  const {
    getSingleParentGame: { data, loading, error },
  } = useSelector((state) => state.parentGame);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleParentGame(slug));
  }, []);
  return loading ? <CircularProgress sx={{ display: 'block', margin: '0 auto', mt: 10 }} /> : error ? <Box sx={{ fontSize: ' 24px', fontWeight: '600', margin: '0 auto', textAlign: 'center', mt: 40, opacity: '0.6' }}>Игра не найден</Box> : <ParentGameAddEdit data={data} />;
};

export default AdminParentGameUpdate;

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminTableList from '../../../components/admin/AdminTableList/AdminTableList';
import { apiUrl } from '../../../utils/apiUrl';
import styles from './AdminGameList.module.scss';
import { useDispatch } from 'react-redux';
import { getGameList } from '../../../redux/actions/game/getGameList';
import { useSelector } from 'react-redux';
const AdminGameList = () => {
  const {
    getGameList: { data: gameList, loading },
  } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGameList());
    // getGameListRequest();
  }, []);

  return (
    <div>
      <AdminTableList
        data={gameList}
        loading={loading}
        textAddButton={'игру'}
        pathAdd="/admin/game/create"
        pathEdit="/admin/game/update"
        getTableListRequest={() => {
          dispatch(getGameList());
        }}
        textEmpty={'Игр нет'}
      />
    </div>
  );
};

export default AdminGameList;

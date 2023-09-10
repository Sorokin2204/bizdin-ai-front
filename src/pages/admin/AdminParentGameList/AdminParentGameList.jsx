import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminTableList from '../../../components/admin/AdminTableList/AdminTableList';
import { apiUrl } from '../../../utils/apiUrl';
import styles from './AdminParentGameList.module.scss';
import { useDispatch } from 'react-redux';
import { getGameList } from '../../../redux/actions/game/getGameList';
import { useSelector } from 'react-redux';
import { getParentGameList } from '../../../redux/actions/parentGame/getParentGameList';

const AdminParentGameList = () => {
  const {
    getParentGameList: { data: gameList, loading },
  } = useSelector((state) => state.parentGame);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getParentGameList());
  }, []);

  return (
    <div>
      <AdminTableList
        data={gameList}
        loading={loading}
        textAddButton={'вложенную игру'}
        pathAdd="/admin/parent-game/create"
        pathEdit="/admin/parent-game/update"
        getTableListRequest={() => {
          dispatch(getParentGameList());
        }}
        textEmpty={'Вложенных игр нет'}
      />
    </div>
  );
};

export default AdminParentGameList;

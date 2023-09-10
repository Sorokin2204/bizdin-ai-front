import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminTableList from '../../../components/admin/AdminTableList/AdminTableList';
import { apiUrl } from '../../../utils/apiUrl';
import styles from './AdminSupportList.module.scss';
import { useDispatch } from 'react-redux';
import { getSupportList } from '../../../redux/actions/support/getSupportList';
import { useSelector } from 'react-redux';
const AdminSupportList = () => {
  const {
    getSupportList: { data: supportList, loading },
  } = useSelector((state) => state.support);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSupportList());
  }, []);

  return (
    <div>
      <AdminTableList
        data={supportList}
        loading={loading}
        textAddButton={'Поддержку'}
        pathAdd="/admin/support/create"
        pathEdit="/admin/support/update"
        getTableListRequest={() => {
          dispatch(getSupportList());
        }}
        textEmpty={'Поддержки нет'}
      />
    </div>
  );
};

export default AdminSupportList;

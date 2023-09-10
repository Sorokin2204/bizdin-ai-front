import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminTableList from '../../../components/admin/AdminTableList/AdminTableList';
import { apiUrl } from '../../../utils/apiUrl';
import styles from './AdminBannerList.module.scss';
import { useDispatch } from 'react-redux';
import { getBannerList } from '../../../redux/actions/banner/getBannerList';
import { useSelector } from 'react-redux';
const AdminBannerList = () => {
  const {
    getBannerList: { data: bannerList, loading },
  } = useSelector((state) => state.banner);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBannerList());
  }, []);

  return (
    <div>
      <AdminTableList
        data={bannerList}
        loading={loading}
        textAddButton={'Баннеры'}
        pathAdd="/admin/banner/create"
        pathEdit="/admin/banner/update"
        getTableListRequest={() => {
          dispatch(getBannerList());
        }}
        textEmpty={'Баннеров нет'}
      />
    </div>
  );
};

export default AdminBannerList;

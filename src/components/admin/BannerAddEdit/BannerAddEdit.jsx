import { Box, Button, Checkbox, CircularProgress, FormControl, FormControlLabel, IconButton, InputLabel, LinearProgress, ListSubheader, MenuItem, Select, TextField, Typography } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';

import styles from './BannerAddEdit.module.scss';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Geocode from 'react-geocode';

import axios from 'axios';
import { Add, AddCircle, AddCircleOutline, AddOutlined, Delete } from '@mui/icons-material';
import { apiUrl } from '../../../utils/apiUrl';
import { useNavigate } from 'react-router';
import Loading from '../Loading/Loading';
import InfoAlert from '../InfoAlert/InfoAlert';
import UploadEditorFile from '../AdminTableList/UploadEditorFile/UploadEditorFile';
import UploadImage from '../UploadImage/UploadImage';
import CodeEditor from '../CodeEditor/CodeEditor';
import InputCustom from '../InputCustom/InputCustom';
import { useDispatch } from 'react-redux';
import { createBanner } from '../../../redux/actions/banner/createBanner';
import { useSelector } from 'react-redux';
import { resetCreateBanner, resetUpdateBanner } from '../../../redux/slices/banner.slice';

import { updateBanner } from '../../../redux/actions/banner/updateBanner';
import { getParentGameList } from '../../../redux/actions/parentGame/getParentGameList';
import { getGameList } from '../../../redux/actions/game/getGameList';
import { getSupportList } from '../../../redux/actions/support/getSupportList';

const BannerAddEdit = ({ data = null }) => {
  const [showAlert, setShowAlert] = useState(false);
  const defaultValues = data
    ? data
    : {
        name: '',
        slug: '',
        desc: '',
      };

  const contentForm = useForm({ defaultValues });
  const { fields, append, remove } = useFieldArray({
    control: contentForm.control,
    name: 'advList',
  });
  const {
    fields: packages,
    append: appendPack,
    remove: removePack,
  } = useFieldArray({
    control: contentForm.control,
    name: 'packages',
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    createBanner: { data: createData, loading: createLoading },
    updateBanner: { data: updateData, loading: updateLoading },
  } = useSelector((state) => state.banner);

  const {
    getSupportList: { data: supportList, loading: supportLoading },
  } = useSelector((state) => state.support);
  const {
    getGameList: { data: gameList, loading: gameLoading },
  } = useSelector((state) => state.game);
  const {
    getParentGameList: { data: parentGameList, loading: parentGameLoading },
  } = useSelector((state) => state.parentGame);
  const onSubmit = (dt) => {
    if (data) {
      dispatch(updateBanner({ ...dt, id: data.id }));
    } else {
      dispatch(createBanner(dt));
    }
  };
  useEffect(() => {
    if (createData) {
      setShowAlert(true);
      dispatch(resetCreateBanner());
      setTimeout(() => {
        setShowAlert(false);
        navigate('/admin/banners');
      }, 1000);
    }
  }, [createData]);
  useEffect(() => {
    if (updateData) {
      setShowAlert(true);
      dispatch(resetUpdateBanner());
      setTimeout(() => {
        setShowAlert(false);
        navigate('/admin/banners');
      }, 1000);
    }
  }, [updateData]);
  console.log(contentForm.formState.errors);
  console.log(contentForm.getValues());
  useEffect(() => {
    dispatch(getParentGameList());
    dispatch(getGameList());
    dispatch(getSupportList());
  }, []);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    let arr = [];
    arr = arr.concat(supportList.map((item, index) => ({ ...(index == 0 && { group: 'Поддержка' }), label: item?.name, value: `support_${item?.id}` })));
    arr = arr.concat(parentGameList.map((item, index) => ({ ...(index == 0 && { group: 'Родительские игры' }), label: item?.name, value: `parentGame_${item?.id}` })));
    arr = arr.concat(gameList.map((item, index) => ({ ...(index == 0 && { group: 'Игры' }), label: item?.name, value: `game_${item?.id}` })));
    setOptions(arr);
  }, [supportList, parentGameList, gameList]);

  return (
    <div>
      <UploadEditorFile />
      <Box sx={{}}>
        {' '}
        <UploadImage form={contentForm} name={'preview'} label={'Превью'} />
        <InputCustom form={contentForm} name={'name'} label={'Название баннера '} />
        <InputCustom isSelect options={options} form={contentForm} name={'link'} label={'Ссылка'} />
      </Box>

      <Box sx={{ mt: 10, display: 'flex', alignItems: 'center' }}>
        <Button onClick={contentForm.handleSubmit(onSubmit)} variant="contained" sx={{ backgroundColor: 'success.light', ml: 'auto', display: 'flex' }}>
          Сохранить
        </Button>
      </Box>
      {createLoading?.loading || (updateLoading?.loading && <Loading />)}

      <InfoAlert show={showAlert} text={data ? 'Игра сохранена' : 'Игра создана'} />
    </div>
  );
};

export default BannerAddEdit;

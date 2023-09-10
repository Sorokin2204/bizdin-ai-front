import { Box, Button, Checkbox, CircularProgress, FormControl, FormControlLabel, IconButton, InputLabel, LinearProgress, MenuItem, Select, TextField, Typography } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';

import styles from './ParentGameAddEdit.module.scss';
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
import { createGame } from '../../../redux/actions/game/createGame';
import { useSelector } from 'react-redux';
import { resetCreateGame, resetUpdateGame } from '../../../redux/slices/game.slice';
import { getCountryList } from '../../../redux/actions/app/getCountryList';
import { getFilterGameList } from '../../../redux/actions/app/getFilterGameList';

import { updateGame } from '../../../redux/actions/game/updateGame';
import { getParentGameList } from '../../../redux/actions/parentGame/getParentGameList';
import { resetCreateParentGame, resetUpdateParentGame } from '../../../redux/slices/parentGame.slice';
import { updateParentGame } from '../../../redux/actions/parentGame/updateParentGame';
import { createParentGame } from '../../../redux/actions/parentGame/createParentGame';
const ParentGameAddEdit = ({ data = null }) => {
  const [showAlert, setShowAlert] = useState(false);
  const defaultValues = data
    ? data
    : {
        name: '',
        slug: '',
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
    getCountryList: { data: contryList },
    getFilterGameList: { data: filterList },
  } = useSelector((state) => state.app);
  const {
    getParentGameList: { data: parentGameList },
    createParentGame: { data: createData, loading: createLoading },
    updateParentGame: { data: updateData, loading: updateLoading },
  } = useSelector((state) => state.parentGame);

  const onSubmit = (dt) => {
    if (data) {
      dispatch(updateParentGame({ ...dt, id: data.id }));
    } else {
      dispatch(createParentGame(dt));
    }
  };
  useEffect(() => {
    if (createData) {
      setShowAlert(true);
      dispatch(resetCreateParentGame());
      setTimeout(() => {
        setShowAlert(false);
        navigate('/admin/parent-games');
      }, 1000);
    }
  }, [createData]);
  useEffect(() => {
    if (updateData) {
      setShowAlert(true);
      dispatch(resetUpdateParentGame());
      setTimeout(() => {
        setShowAlert(false);
        navigate('/admin/parent-games');
      }, 1000);
    }
  }, [updateData]);
  console.log(contentForm.formState.errors);
  console.log(contentForm.getValues());

  useEffect(() => {
    dispatch(getCountryList());
    dispatch(getFilterGameList());
    dispatch(getParentGameList());
  }, []);

  return (
    <div>
      <UploadEditorFile />
      <Box sx={{}}>
        <UploadImage form={contentForm} name={'preview'} label={'Главное фото'} />
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', marginBottom: '16px', marginTop: '16px' }}>
          <InputCustom form={contentForm} name={'name'} label={'Короткое название игры'} />
          <InputCustom form={contentForm} name={'fullName'} label={'Полное название игры'} />
          <InputCustom form={contentForm} name={'slug'} label={'Путь'} />
          <InputCustom form={contentForm} name={'shortDesc'} label={'Краткое описание'} isTextarea maxRows={2} rows={3} />
        </Box>
        <InputCustom isSelect options={filterList?.map((filter) => ({ label: filter.name, value: filter.id }))} form={contentForm} name={'filterGameId'} label={'Категория'} />
        <InputCustom required={false} isSelect options={[{ label: 'Не выбранно', value: null }, ...contryList?.map((country) => ({ label: country.name, value: country.id }))]} form={contentForm} name={'countryId'} label={'Страна'} />
        <UploadImage required={false} form={contentForm} name={'iconValute'} label={'Иконка валюты'} />
        <InputCustom required={false} form={contentForm} name={'nameValute'} label={'Название валюты'} />
        <InputCustom form={contentForm} isCheckbox name={`isMomentDelivery`} required={false} label={'Моментальная доставка'} />
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

export default ParentGameAddEdit;

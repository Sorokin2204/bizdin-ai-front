import { Box, Button, Checkbox, CircularProgress, FormControl, FormControlLabel, IconButton, InputLabel, LinearProgress, MenuItem, Select, TextField, Typography } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';

import styles from './GameAddEdit.module.scss';
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
const GameAddEdit = ({ data = null }) => {
  const [showAlert, setShowAlert] = useState(false);
  const defaultValues = data
    ? data
    : {
        packages: [
          {
            icon: '',
            name: '',
            price: 0,
            discountPrice: 0,
            disabled: false,
          },
        ],
        advList: [''],
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
    createGame: { data: createData, loading: createLoading },
    updateGame: { data: updateData, loading: updateLoading },
  } = useSelector((state) => state.game);
  const {
    getCountryList: { data: contryList },
    getFilterGameList: { data: filterList },
  } = useSelector((state) => state.app);
  const {
    getParentGameList: { data: parentGameList },
  } = useSelector((state) => state.parentGame);

  const onSubmit = (dt) => {
    if (data) {
      dispatch(updateGame({ ...dt, id: data.id }));
    } else {
      dispatch(createGame(dt));
    }
  };
  useEffect(() => {
    if (createData) {
      setShowAlert(true);
      dispatch(resetCreateGame());
      setTimeout(() => {
        setShowAlert(false);
        navigate('/admin/games');
      }, 1000);
    }
  }, [createData]);
  useEffect(() => {
    if (updateData) {
      setShowAlert(true);
      dispatch(resetUpdateGame());
      setTimeout(() => {
        setShowAlert(false);
        navigate('/admin/games');
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
        <UploadImage form={contentForm} name={'iconValute'} label={'Иконка валюты'} required={false} />
        <InputCustom form={contentForm} name={'nameValute'} label={'Название валюты'} required={false} />
        <InputCustom required={false} isSelect options={[{ label: 'Не выбрано', value: null }, ...filterList?.map((filter) => ({ label: filter.name, value: filter.id }))]} form={contentForm} name={'filterGameId'} label={'Категория'} />
        <InputCustom required={false} isSelect options={[{ label: 'Не выбрана', value: null }, ...parentGameList?.map((parentGame) => ({ label: parentGame.name, value: parentGame.id }))]} form={contentForm} name={'parentGameId'} label={'Родительская игра'} />
        <InputCustom required={false} isSelect options={[{ label: 'Не выбрана', value: null }, ...contryList?.map((country) => ({ label: country.name, value: country.id }))]} form={contentForm} name={'countryId'} label={'Страна'} />
        <InputCustom required={false} form={contentForm} name={'textWarning'} label={'Текст предупреждения'} isTextarea maxRows={2} rows={3} />
        <Box sx={{ display: 'grid', rowGap: '8px', marginTop: '16px' }}>
          {fields.map((fieldd, index) => (
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr auto', columnGap: '8px' }}>
              <InputCustom form={contentForm} name={`advList[${index}]`} label={''} />
              <IconButton
                onClick={() => {
                  if (fields?.length > 1) {
                    remove(index);
                  }
                }}>
                <Delete color="error" />
              </IconButton>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 1, mb: 2 }}>
          <InputCustom form={contentForm} isCheckbox name={`isMomentDelivery`} required={false} label={'Моментальная доставка'} />
          <Button
            onClick={() => {
              append('Новое преимущество');
            }}
            variant="contained"
            sx={{ backgroundColor: 'success.light', ml: 'auto', display: 'flex' }}>
            Добавить
          </Button>
        </Box>
        <CodeEditor form={contentForm} name={'instruction'} label="Инструкция" />
        <CodeEditor form={contentForm} name={'desc'} label="Описание" />
        {packages.map((fieldd, index) => (
          <Box sx={{ border: '1px solid rgba(0,0,0,0.23)', borderRadius: '8px', padding: '8px', marginBottom: '16px' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr auto', columnGap: '8px' }}>
              <Box sx={{ display: 'grid' }}>
                <InputCustom form={contentForm} name={`packages[${index}].name`} label={'Название пакета'} errorCustom={contentForm.formState?.errors?.packages?.[index]?.name} />

                <UploadImage errorCustom={contentForm.formState?.errors?.packages?.[index]?.icon} label={'Иконка пакета'} size={'80px'} font="12px" form={contentForm} name={`packages[${index}].icon`} />
                <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '8px' }}>
                  <InputCustom form={contentForm} name={`packages[${index}].price`} errorCustom={contentForm.formState?.errors?.packages?.[index]?.price} isNumber label={'Цена'} />
                  <InputCustom required={false} form={contentForm} name={`packages[${index}].discountPrice`} errorCustom={contentForm.formState?.errors?.packages?.[index]?.discountPrice} isNumber label={'Зачеркнутая цена'} />
                  <InputCustom form={contentForm} required={false} isCheckbox name={`packages[${index}].disabled`} label={'Недоступен'} />
                </Box>
              </Box>
              <IconButton
                sx={{ alignSelf: 'center' }}
                onClick={() => {
                  if (packages?.length > 1) {
                    removePack(index);
                  }
                }}>
                <Delete color="error" />
              </IconButton>
            </Box>
          </Box>
        ))}
        <Button
          onClick={() => {
            appendPack({
              icon: '',
              name: '',
              price: 0,
              discountPrice: 0,
              disabled: false,
              ...(data && { gameId: data.id }),
            });
          }}
          variant="contained"
          sx={{ mt: 1, backgroundColor: 'success.light', ml: 'auto', display: 'flex' }}>
          Добавить
        </Button>
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

export default GameAddEdit;

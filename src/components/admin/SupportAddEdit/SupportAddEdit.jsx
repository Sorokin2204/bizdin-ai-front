import { Box, Button, Checkbox, CircularProgress, FormControl, FormControlLabel, IconButton, InputLabel, LinearProgress, MenuItem, Select, TextField, Typography } from '@mui/material';
import moment from 'moment';
import React, { useEffect, useRef, useState } from 'react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';

import styles from './SupportAddEdit.module.scss';
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
import { createSupport } from '../../../redux/actions/support/createSupport';
import { useSelector } from 'react-redux';
import { resetCreateSupport, resetUpdateSupport } from '../../../redux/slices/support.slice';

import { updateSupport } from '../../../redux/actions/support/updateSupport';

const SupportAddEdit = ({ data = null }) => {
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
    createSupport: { data: createData, loading: createLoading },
    updateSupport: { data: updateData, loading: updateLoading },
  } = useSelector((state) => state.support);

  const onSubmit = (dt) => {
    if (data) {
      dispatch(updateSupport({ ...dt, id: data.id }));
    } else {
      dispatch(createSupport(dt));
    }
  };
  useEffect(() => {
    if (createData) {
      setShowAlert(true);
      dispatch(resetCreateSupport());
      setTimeout(() => {
        setShowAlert(false);
        navigate('/admin/support-list');
      }, 1000);
    }
  }, [createData]);
  useEffect(() => {
    if (updateData) {
      setShowAlert(true);
      dispatch(resetUpdateSupport());
      setTimeout(() => {
        setShowAlert(false);
        navigate('/admin/support-list');
      }, 1000);
    }
  }, [updateData]);
  console.log(contentForm.formState.errors);
  console.log(contentForm.getValues());

  return (
    <div>
      <UploadEditorFile />
      <Box sx={{}}>
        <InputCustom form={contentForm} name={'name'} label={'Название '} />
        <InputCustom form={contentForm} name={'slug'} label={'Путь '} />
        <CodeEditor form={contentForm} name={'desc'} label="Контент" />
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

export default SupportAddEdit;

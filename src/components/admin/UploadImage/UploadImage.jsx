import React, { useEffect, useState } from 'react';
import styles from './UploadImage.module.scss';
import { Box, TextField } from '@mui/material';
import InputCustom from '../InputCustom/InputCustom';
const UploadImage = ({ form, name, size = '120px', label, font = '16px', errorCustom, required = true }) => {
  const [fileName, setFileName] = useState('');
  const [errorImage, setErrorImage] = useState(true);
  useEffect(() => {}, [fileName]);
  const value = form.watch(name);
  return (
    <Box sx={{ mb: '16px' }}>
      <Box sx={{ mb: '8px', fontWeight: '600' }}>{label}</Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: `${size} 1fr`, columnGap: '8px' }}>
        {errorImage && <Box sx={{ width: size, height: size, borderRadius: '8px', background: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(0,0,0,0.5)', fontWeight: '600', fontSize: font }}>Нет фото</Box>}

        <Box
          sx={{ display: errorImage ? 'none' : 'block', width: size, height: size, borderRadius: '8px', background: 'rgba(0,0,0,0.1)', overflow: 'hidden', objectFit: 'cover' }}
          onLoad={() => {
            setErrorImage(false);
          }}
          onError={() => {
            setErrorImage(true);
          }}
          component={'img'}
          src={`${process.env.REACT_APP_SERVER_URL}/files/${value}`}></Box>
        <InputCustom
          required={required}
          errorCustom={errorCustom}
          form={form}
          name={name}
          label={'Название файла'}
          onFocus={(event) => event.target.select()}
          sx={{ gridColumn: '1/3', gridRow: '2/3', marginLeft: '8px', maxWidth: '400px', '& .MuiInputBase-root': { display: 'flex' }, '& input': { display: 'flex', width: '100%' }, display: 'flex', display: 'block', width: '100%', marginBottom: '16px' }}
        />
      </Box>
    </Box>
  );
};

export default UploadImage;

import React, { useState } from 'react';
import styles from './UploadEditorFile.module.scss';
import { Box, Button, TextField } from '@mui/material';
import { UploadFile } from '@mui/icons-material';
import axios from 'axios';
import { apiUrl } from '../../../../utils/apiUrl';
const UploadEditorFile = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const hiddenFileInput = React.useRef(null);
  const onClickUpload = () => {
    hiddenFileInput.current.click();
  };
  const onImageChange = (e) => {
    setUploadedImage(null);
    const [file] = e.target.files;
    const formData = new FormData();
    formData.append('file', file);
    axios.post(apiUrl('file/upload'), formData).then((res) => {
      if (res.data.status === 'success') {
        setUploadedImage({ path: res.data.path });
      }
    });
  };
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr auto', gridGap: '8px' }}>
      {' '}
      <Box sx={{ display: 'flex', alignItems: 'start', flexWrap: 'wrap', width: '100%' }}>
        <TextField
          placeholder="Полный путь к картинке"
          onFocus={(event) => event.target.select()}
          sx={{ '& .MuiInputBase-root': { display: 'flex' }, '& input': { display: 'flex', width: '100%' }, display: 'flex', display: 'block', width: '100%', marginBottom: '16px' }}
          size="small"
          value={uploadedImage?.path ? `${process.env.REACT_APP_SERVER_URL}/files/${uploadedImage?.path}` : ''}
          onChange={() => {}}
        />
        <input type="file" onChange={onImageChange} style={{ display: 'none' }} ref={hiddenFileInput} />
        <TextField
          placeholder="Название картинки"
          onFocus={(event) => event.target.select()}
          sx={{ maxWidth: '400px', '& .MuiInputBase-root': { display: 'flex' }, '& input': { display: 'flex', width: '100%' }, display: 'flex', display: 'block', width: '100%', marginBottom: '16px' }}
          size="small"
          value={uploadedImage?.path ? `${uploadedImage?.path}` : ''}
          onChange={() => {}}
        />
      </Box>
      <Button variant="outlined" startIcon={<UploadFile />} sx={{ height: '40px', mb: 0, whiteSpace: 'nowrap', minWidth: '100%' }} size="small" onClick={onClickUpload}>
        Загрузить
      </Button>{' '}
    </Box>
  );
};

export default UploadEditorFile;

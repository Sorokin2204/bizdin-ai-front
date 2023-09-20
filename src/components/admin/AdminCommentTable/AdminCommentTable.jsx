import React, { useState } from 'react';
import styles from './AdminCommentTable.module.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, CircularProgress, IconButton } from '@mui/material';
import { Add, Delete, Edit, OpenInBrowser, OpenInNew } from '@mui/icons-material';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { apiUrl } from '../../../utils/apiUrl';
import Loading from '../Loading/Loading';
import InfoAlert from '../InfoAlert/InfoAlert';
import { amber, blue, cyan, deepPurple, indigo, purple, teal } from '@mui/material/colors';
import { Link } from 'react-router-dom';
const AdminCommentTable = ({
  loading,
  data = [
    {
      name: 'One',
      slug: 'asdf',
    },
  ],
  textAddButton,
  rows,
  onEdit,
  onDelete,
  pathAdd,
  pathEdit,
  getTableListRequest = () => {},
  textEmpty,
}) => {
  const navigate = useNavigate();
  const [deletePageRequest, setDeletePageRequest] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  function deleteReqest(deleteId) {
    setDeletePageRequest({ loading: true });
    axios.post(apiUrl('page/delete'), { deleteId }).then(() => {
      setShowAlert(true);
      setDeletePageRequest({ loading: false, data: true });
      setTimeout(() => {
        setShowAlert(false);
        getTableListRequest();
      }, 500);
    });
  }
  console.log(data);
  return (
    <>
      <Button
        onClick={() => {
          navigate(pathAdd);
        }}
        variant="contained"
        sx={{ mb: 3 }}
        endIcon={<Add />}>{`Добавить ${textAddButton || ''}`}</Button>
      {loading && !data ? (
        <CircularProgress sx={{ display: 'block', margin: '0 auto', mt: 4 }} />
      ) : data?.length >= 1 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ '& th': { padding: '4px' } }}>
                <TableCell align="center">Название</TableCell>
                <TableCell align="center">Путь</TableCell>
                <TableCell width="90px" align="center">
                  Открыть
                </TableCell>
                <TableCell width="90px" align="center">
                  Редактировать
                </TableCell>
                <TableCell width="90px" align="center">
                  Удалить
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item) => (
                <TableRow sx={{ '& td': { padding: '2px' }, '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="center">
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '0 auto' }}>{item?.name}</Box>
                  </TableCell>
                  <TableCell align="center"> {item?.slug || item?.id}</TableCell>
                  <TableCell align="center">
                    <Link to={item?.slug || item?.id}>
                      <OpenInNew sx={{ color: 'rgba(0, 0, 0, 0.54)' }} />
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      onClick={() => {
                        navigate(`${pathEdit}/${item?.slug || item?.id}`);
                      }}>
                      <Edit />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      onClick={() => {
                        deleteReqest(item?.id);
                      }}>
                      <Delete color="error" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box sx={{ mt: 3, textAlign: 'center', fontSize: '20px', fontWeight: '600', color: 'rgba(0,0,0,0.5)' }}>{textEmpty}</Box>
      )}
      {deletePageRequest?.loading && <Loading />}

      <InfoAlert show={showAlert} text={'Запись удалена'} />
    </>
  );
};

export default AdminCommentTable;

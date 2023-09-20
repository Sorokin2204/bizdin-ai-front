import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminTableList from '../../../components/admin/AdminTableList/AdminTableList';
import { apiUrl } from '../../../utils/apiUrl';
import styles from './AdminOrderList.module.scss';
import { useDispatch } from 'react-redux';
import { getBannerList } from '../../../redux/actions/banner/getBannerList';
import { useSelector } from 'react-redux';

import { getOrderListAdmin } from '../../../redux/actions/order/getOrderListAdmin';
import ReviewItem from '../../../components/site/ReviewsPage/ReviewItem/ReviewItem';
import ReviewItemAdmin from '../../../components/site/ReviewsPage/ReviewItemAdmin/ReviewItemAdmin';
import { Box, FormControl, FormControlLabel, IconButton, Paper, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Loading from '../../../components/admin/Loading/Loading';
import { resetUpdateOrder, setEditOrderId } from '../../../redux/slices/order.slice';
import InfoAlert from '../../../components/admin/InfoAlert/InfoAlert';
import StatusDeposit from '../../../components/site/DepositPage/StatusDeposit/StatusDeposit';
import moment from 'moment';
import { currencyFormat } from '../../../utils/currencyFormat';
import { Close, CloseOutlined, Edit, EditRounded } from '@mui/icons-material';
import DepositBlock from '../../../components/site/DepositPage/DepositBlock/DepositBlock';
import DepositPackageItem from '../../../components/site/DepositPage/DepositPackageItem/DepositPackageItem';
import DepositUpdateModal from '../../../components/admin/DepositUpdateModal/DepositUpdateModal';
const AdminOrderList = () => {
  const {
    getOrderListAdmin: { data: orderList, loading },
    updateOrder: { data: updateOrderData, loading: updateOrderLoading },
    editOrderId,
  } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderListAdmin());
  }, []);
  const [filter, setFilter] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    if (updateOrderData) {
      setShowAlert(true);
      dispatch(resetUpdateOrder());
      dispatch(setEditOrderId(null));
      dispatch(getOrderListAdmin());
      setTimeout(() => {
        setShowAlert(false);
      }, 500);
    }
  }, [updateOrderData]);
  useEffect(() => {
    if (editOrderId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [editOrderId]);
  return (
    <Box>
      {' '}
      <FormControl sx={{ mb: '16px' }}>
        <RadioGroup
          row
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
          }}>
          <FormControlLabel value="" control={<Radio />} label="Все" />
          <FormControlLabel value="paid" control={<Radio />} label="Оплаченые" />
          <FormControlLabel value="success" control={<Radio />} label="Выполненные" />
        </RadioGroup>
      </FormControl>
      <TableContainer component={Paper} sx={{}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ '& th': { padding: '4px' } }}>
              <TableCell align="center">Номер заказа</TableCell>
              <TableCell align="center">Дата создания</TableCell>
              <TableCell align="center">Почта</TableCell>
              <TableCell align="center">Игра</TableCell>
              <TableCell align="center">Итог</TableCell>
              <TableCell align="center">Статус</TableCell>
              <TableCell align="center" width={'24px'}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderList
              ?.filter((ord) => (filter ? filter == ord.status : true))
              ?.map((order) => (
                <TableRow sx={{ '& td': { padding: '2px' }, '&:last-child td, &:last-child th': { border: 0 } }}>
                  {editOrderId == order.id && <DepositUpdateModal order={order} />}

                  <TableCell align="center">№{order.id}</TableCell>
                  <TableCell align="center">{moment(order?.createdAt).format('DD.MM.YYYY в HH:mm')}</TableCell>
                  <TableCell align="center">{order?.user?.email}</TableCell>
                  <TableCell align="center" sx={{ whiteSpace: 'nowrap' }}>
                    {order?.game?.name}
                  </TableCell>
                  <TableCell align="center" sx={{ fontWeight: '600' }}>
                    {order?.orderGameInputs?.filter((input) => input?.gameInput?.mainInput)?.length !== 0
                      ? currencyFormat(order?.orderGameInputs?.filter((input) => input?.gameInput?.mainInput)?.[0]?.value)
                      : currencyFormat(
                          order?.orderPackages
                            ?.map((itemPack) => itemPack?.package.price)
                            .reduce((accumulator, currentValue) => {
                              return accumulator + currentValue;
                            }, 0),
                        )}
                  </TableCell>
                  <TableCell align="center">
                    <Box sx={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}>
                      {' '}
                      <StatusDeposit status={order?.status} noTooltip />
                    </Box>{' '}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      disableRipple
                      sx={{ padding: '4px', color: 'primary.main' }}
                      onClick={() => {
                        dispatch(setEditOrderId(order.id));
                      }}>
                      <EditRounded />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {updateOrderLoading && <Loading />}
      <InfoAlert show={showAlert} text={'Отзыв обновлен'} />
    </Box>
  );
};

export default AdminOrderList;

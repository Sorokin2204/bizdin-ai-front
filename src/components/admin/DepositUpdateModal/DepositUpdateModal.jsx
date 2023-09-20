import React, { useEffect, useState } from 'react';
import styles from './DepositUpdateModal.module.scss';
import { Box, Button, IconButton } from '@mui/material';
import DepositBlock from '../../site/DepositPage/DepositBlock/DepositBlock';
import { resetUpdateOrder, setEditOrderId } from '../../../redux/slices/order.slice';
import DepositPackageItem from '../../site/DepositPage/DepositPackageItem/DepositPackageItem';
import { CloseOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateOrder } from '../../../redux/actions/order/updateOrder';
import { useSelector } from 'react-redux';
import Loading from '../Loading/Loading';
import InfoAlert from '../InfoAlert/InfoAlert';
import { getOrderListAdmin } from '../../../redux/actions/order/getOrderListAdmin';
const DepositUpdateModal = ({ order }) => {
  const defaultValues = {
    orderId: order?.id,
    status: order?.status,
    orderPackages: order?.orderPackages?.map((itemOrder) => ({ id: itemOrder?.id, status: itemOrder?.status })),
  };
  const {
    updateOrder: { data: updateOrderData, loading: updateOrderLoading },
  } = useSelector((state) => state.order);
  const orderForm = useForm({ defaultValues });
  const dispatch = useDispatch();
  const statusWatch = orderForm.watch('status');
  const orderPackagesWatch = orderForm.watch('orderPackages');
  const onSubmit = (data) => {
    dispatch(updateOrder(data));
  };
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    if (updateOrderData) {
      setShowAlert(true);
      dispatch(resetUpdateOrder());
      dispatch(getOrderListAdmin());
      setTimeout(() => {
        setShowAlert(false);
        dispatch(setEditOrderId(null));
      }, 1000);
    }
  }, [updateOrderData]);

  return (
    <Box sx={{ zIndex: '100000', position: 'fixed', top: 0, width: '100vw', right: 0, backgroundColor: '#E9ECEF', height: '100%', bottom: 0, overflow: 'scroll' }}>
      <DepositBlock {...order} admin status={statusWatch} form={orderForm} name={'status'} />
      {order?.status !== 'wait' && order?.orderPackages?.map((itemPack, indexPack) => <DepositPackageItem form={orderForm} nameForm={`orderPackages[${indexPack}].status`} admin {...itemPack?.package} status={orderPackagesWatch[indexPack].status} />)}{' '}
      <IconButton
        disableRipple
        sx={{ position: 'absolute', top: 10, right: 15, opacity: 0.7, padding: 0 }}
        onClick={() => {
          dispatch(setEditOrderId(null));
        }}>
        <CloseOutlined sx={{ fontSize: '30px' }} />
      </IconButton>
      <Button onClick={orderForm.handleSubmit(onSubmit)} color="success" variant="contained" sx={{ position: 'fixed', bottom: '32px', right: '28px' }}>
        Сохранить
      </Button>
      {updateOrderLoading && <Loading />}
      <InfoAlert show={showAlert} text={'Покупка обновлена'} />
    </Box>
  );
};

export default DepositUpdateModal;

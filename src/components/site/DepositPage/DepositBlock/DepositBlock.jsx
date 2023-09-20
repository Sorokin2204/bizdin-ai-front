import React from 'react';
import styles from './DepositBlock.module.scss';
import clsx from 'clsx';
import { currencyFormat } from '../../../../utils/currencyFormat';
import AccordionMethod from '../AccordionMethod/AccordionMethod';
import Button from '../../Common/Button/Button';
import { imgPath } from '../../../../utils/imgPath';
import StatusDeposit from '../StatusDeposit/StatusDeposit';
import { Box, IconButton } from '@mui/material';
import { CachedOutlined, ChangeCircle, PublishedWithChangesOutlined } from '@mui/icons-material';
import { createPayment } from '../../../../redux/actions/order/createPayment';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const DepositBlock = ({ id, orderPackages, status, game, orderGameInputs, admin, form, name }) => {
  const dispatch = useDispatch();
  const {
    authUser: { data: dataAuth, loading: loadingAuth, error: errorAuth },
  } = useSelector((state) => state.user);
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.title)}>Покупка #{id}</div>
        <div className={clsx(styles.price)}>
          {orderGameInputs?.filter((input) => input?.gameInput?.mainInput)?.length !== 0
            ? currencyFormat(orderGameInputs?.filter((input) => input?.gameInput?.mainInput)?.[0]?.value)
            : currencyFormat(
                orderPackages
                  ?.map((itemPack) => itemPack?.package.price)
                  .reduce((accumulator, currentValue) => {
                    return accumulator + currentValue;
                  }, 0),
              )}
        </div>
        {admin ? (
          <Box sx={{ display: 'flex', alignItems: 'center', mr: '-34px' }}>
            <StatusDeposit status={status} noTooltip={admin} />
            <IconButton
              disableRipple
              size="small"
              sx={{ color: 'error.main' }}
              onClick={() => {
                if (status == 'paid') {
                  form.setValue(name, 'success');
                } else if (status == 'success') {
                  form.setValue(name, 'paid');
                }
              }}>
              <PublishedWithChangesOutlined />
            </IconButton>
          </Box>
        ) : (
          <StatusDeposit status={status} />
        )}

        <div className={clsx(styles.game)}>
          <img src={imgPath(game?.preview)} alt="" className={clsx(styles.gameIcon)} />
          <div className={clsx(styles.gameName)}>{game?.name}</div>
        </div>
        <div className={clsx(styles.list)}>
          {orderGameInputs?.map((itemInput) => (
            <div className={clsx(styles.tag)}>
              <div className={clsx(styles.tagLabel)}>{itemInput?.gameInput?.label}</div>
              <div className={clsx(styles.tagValue)}>{itemInput?.gameInputOption?.label || itemInput?.value}</div>
            </div>
          ))}
        </div>
        {status == 'wait' && (
          <>
            <div className={clsx(styles.btnBox)}>
              <Button
                lg
                onClick={() => {
                  dispatch(createPayment({ orderId: id }));
                }}>
                Перейти к оплате
              </Button>
            </div>
            <AccordionMethod />
          </>
        )}
      </div>
    </>
  );
};

export default DepositBlock;

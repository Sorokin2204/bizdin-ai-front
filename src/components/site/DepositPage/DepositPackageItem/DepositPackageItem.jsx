import React from 'react';
import styles from './DepositPackageItem.module.scss';
import { currencyFormat } from '../../../../utils/currencyFormat';
import StatusDeposit from '../StatusDeposit/StatusDeposit';
import clsx from 'clsx';
import { imgPath } from '../../../../utils/imgPath';
import { PublishedWithChangesOutlined } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
const DepositPackageItem = ({ icon, price, name, status, form, nameForm, admin }) => {
  if (form) {
    form.watch(nameForm);
  }
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.content)}>
          {' '}
          <img src={imgPath(icon)} alt="" className={clsx(styles.icon)} />
          <div className={clsx(styles.box)}>
            <div className={clsx(styles.name)}>{name}</div>
            <div className={clsx(styles.price)}>{currencyFormat(price)}</div>
          </div>
        </div>
        {admin ? (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <StatusDeposit status={status} noTooltip={admin} />
            <IconButton
              disableRipple
              size="small"
              sx={{ color: 'error.main' }}
              onClick={() => {
                if (status == 'paid') {
                  form.setValue(nameForm, 'success');
                } else if (status == 'success') {
                  form.setValue(nameForm, 'paid');
                }
              }}>
              <PublishedWithChangesOutlined />
            </IconButton>
          </Box>
        ) : (
          <StatusDeposit status={status} />
        )}
      </div>
    </>
  );
};

export default DepositPackageItem;

import React from 'react';
import styles from './OrderItem.module.scss';
import StatusDeposit from '../../DepositPage/StatusDeposit/StatusDeposit';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/ru';

import { imgPath } from '../../../../utils/imgPath';
import { currencyFormat } from '../../../../utils/currencyFormat';
moment.locale('ru');
const OrderItem = ({ id, createdAt, status, game, orderPackages, orderGameInputs }) => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.head)}>
          <div className={clsx(styles.headLeft)}>
            <Link to={`/deposit/${id}`} className={clsx(styles.headLink)}>
              Покупка №{id}
            </Link>
            <div className={clsx(styles.headDate)}>{moment(createdAt).format('DD MMMM YYYY г. в HH:mm')} </div>
          </div>
          <div className={clsx(styles.status)}>
            {' '}
            <StatusDeposit status={status} />
          </div>
        </div>
        <div className={clsx(styles.content)}>
          <div className={clsx(styles.list)}>
            <div className={clsx(styles.item)}>
              <img src={imgPath(game?.preview)} />
            </div>{' '}
            {status !== 'wait' &&
              orderPackages?.map((itemPack) => (
                <div className={clsx(styles.item)}>
                  <img src={imgPath(itemPack?.package?.icon)} />
                  <StatusDeposit status={itemPack?.status} circle />
                </div>
              ))}
          </div>
          <div className={clsx(styles.priceBox)}>
            {' '}
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
            {status == 'wait' && <div className={clsx(styles.btnPrice)}>Оплатить</div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderItem;

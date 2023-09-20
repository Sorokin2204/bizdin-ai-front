import React, { useState } from 'react';
import styles from './StatusDeposit.module.scss';
import clsx from 'clsx';
const StatusDeposit = ({ status, circle, noTooltip }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={clsx(styles.wrap)}>
        {circle ? (
          <div
            className={clsx(styles.statusCircle, status == 'wait' && styles.statusCircleWait, status == 'paid' && styles.statusCirclePaid, (status == 'success' || status == 'delivered') && styles.statusCircleSuccess)}
            onMouseEnter={() => {
              if (!noTooltip) {
                setShow(true);
              }
            }}
            onMouseLeave={() => {
              if (!noTooltip) {
                setShow(false);
              }
            }}></div>
        ) : (
          <div
            className={clsx(styles.status, status == 'wait' && styles.statusWait, status == 'paid' && styles.statusPaid, (status == 'success' || status == 'delivered') && styles.statusSuccess)}
            onMouseEnter={() => {
              if (!noTooltip) {
                setShow(true);
              }
            }}
            onMouseLeave={() => {
              if (!noTooltip) {
                setShow(false);
              }
            }}>
            {status == 'wait' ? 'Ждет оплаты' : status == 'success' ? 'Выполнено' : status == 'delivered' ? 'Доставлен' : status == 'paid' ? 'Оплачен' : ''}
          </div>
        )}

        <div className={clsx(styles.popUp, circle && styles.popUpCircle, show && styles.popUpActive)}>
          {status == 'wait' ? (
            <>
              Покупка оформлена, ожидайте <br /> оплаты
            </>
          ) : status == 'success' ? (
            <>Все заказы доставлены</>
          ) : status == 'delivered' ? (
            <>
              Заказ успешно доставлен на <br />
              указанные реквезиты
            </>
          ) : (
            <>
              {' '}
              Заказ оплачен. <br /> Ожидайтие поступление{' '}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default StatusDeposit;

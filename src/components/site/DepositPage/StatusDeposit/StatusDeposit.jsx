import React, { useState } from 'react';
import styles from './StatusDeposit.module.scss';
import clsx from 'clsx';
const StatusDeposit = ({ status, circle }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className={clsx(styles.wrap)}>
        {circle ? (
          <div
            className={clsx(styles.statusCircle, status == 'wait' && styles.statusCircleWait, (status == 'success' || status == 'delivered') && styles.statusCircleSuccess)}
            onMouseEnter={() => {
              setShow(true);
            }}
            onMouseLeave={() => {
              setShow(false);
            }}></div>
        ) : (
          <div
            className={clsx(styles.status, status == 'wait' && styles.statusWait, (status == 'success' || status == 'delivered') && styles.statusSuccess)}
            onMouseEnter={() => {
              setShow(true);
            }}
            onMouseLeave={() => {
              setShow(false);
            }}>
            {status == 'wait' ? 'Ждет оплаты' : status == 'success' ? 'Выполнено' : status == 'delivered' ? 'Доставлен' : ''}
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
            ''
          )}
        </div>
      </div>
    </>
  );
};

export default StatusDeposit;

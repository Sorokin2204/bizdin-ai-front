import React, { useEffect, useState } from 'react';
import styles from './AccordionMethod.module.scss';

import clsx from 'clsx';
import SelectTopUpMethod from '../../TopUp/SelectTopUpMethod/SelectTopUpMethod';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeTypePaymentOrder } from '../../../../redux/actions/order/changeTypePaymentOrder';
const AccordionMethod = () => {
  const [show, setShow] = useState(false);
  const { activePayment } = useSelector((state) => state.app);
  const {
    getOrderSingle: { data: orderSingle },
  } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  useEffect(() => {
    setShow(false);
    if (activePayment && activePayment.id != orderSingle?.typePaymentId) {
      dispatch(changeTypePaymentOrder({ orderId: orderSingle?.id, typePaymentId: activePayment?.id }));
    }
  }, [activePayment]);

  return (
    <>
      <div
        className={clsx(styles.accordion, show && styles.open)}
        onClick={() => {
          setShow(!show);
        }}>
        {activePayment?.name}
      </div>
      <div className={clsx(styles.box)}>{show && <SelectTopUpMethod cart />}</div>
    </>
  );
};

export default AccordionMethod;

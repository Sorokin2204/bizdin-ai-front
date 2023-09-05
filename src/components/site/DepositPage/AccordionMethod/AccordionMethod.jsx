import React, { useState } from 'react';
import styles from './AccordionMethod.module.scss';

import clsx from 'clsx';
import SelectTopUpMethod from '../../TopUp/SelectTopUpMethod/SelectTopUpMethod';
const AccordionMethod = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className={clsx(styles.accordion, show && styles.open)}
        onClick={() => {
          setShow(!show);
        }}>
        Qiwi
      </div>
      <div className={clsx(styles.box)}>{show && <SelectTopUpMethod cart />}</div>
    </>
  );
};

export default AccordionMethod;

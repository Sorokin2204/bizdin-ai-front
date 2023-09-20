import React, { useEffect } from 'react';
import styles from './SelectTopUpMethod.module.scss';
import SelectTopUpMethodItem from '../SelectTopUpMethodItem/SelectTopUpMethodItem';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getTypePaymentList } from '../../../../redux/actions/app/getTypePayment';
import { imgPath } from '../../../../utils/imgPath';
const SelectTopUpMethod = ({ cart }) => {
  const {
    getTypePaymentList: { data },
  } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTypePaymentList());
  }, []);

  const itemCart = { id: 0, icon: '../img/wallet-logo.svg', name: 'DWallet', comission: 0 };
  return (
    <>
      {!cart && <div className={clsx(styles.title)}>Способ пополнения</div>}
      <div className={clsx(styles.list)}>
        {cart && <SelectTopUpMethodItem {...itemCart} disabled />}
        {data?.map((item) => (
          <SelectTopUpMethodItem {...item} icon={imgPath(item.icon)} />
        ))}
      </div>
    </>
  );
};

export default SelectTopUpMethod;

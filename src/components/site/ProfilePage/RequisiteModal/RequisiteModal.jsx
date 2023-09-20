import React from 'react';
import styles from './RequisiteModal.module.scss';
import clsx from 'clsx';
import { Link, useNavigate } from 'react-router-dom';
import { imgPath } from '../../../../utils/imgPath';
import { useDispatch } from 'react-redux';
import { removeSaveGameInput } from '../../../../redux/actions/order/removeSaveGameInput';
import { useSelector } from 'react-redux';
import Loading from '../../Loading/Loading';
const RequisiteModal = ({ preview, name, slug, onClose, orders }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.head)}>
          <div className={clsx(styles.game)}>
            <img src={imgPath(preview)} alt="" className={clsx(styles.gameImg)} />
            <div className={clsx(styles.box)}>
              <Link to={`/${slug}`} className={clsx(styles.gameName)}>
                {name}
              </Link>
              {/* <div className={clsx(styles.gameCount)}>1 / 20</div> */}
            </div>
          </div>
          <div className={clsx(styles.close)} onClick={onClose}></div>
        </div>
        <div className={clsx(styles.content)}>
          {orders?.map((itemOrder) => (
            <div className={clsx(styles.item)}>
              <div className={clsx(styles.itemLeft)}>
                {itemOrder?.orderGameInputs?.map((itemInput) => (
                  <div className={clsx(styles.itemLine)}>
                    <div className={clsx(styles.itemLineLabel)}>{itemInput?.gameInput?.label}</div>
                    <div className={clsx(styles.itemLineValue, 'text-monospace')}>{itemInput?.gameInputOption?.label || itemInput?.value}</div>
                  </div>
                ))}
              </div>
              <div
                className={clsx(styles.itemDelete)}
                onClick={() => {
                  dispatch(removeSaveGameInput(itemOrder.id));
                  onClose();
                }}>
                Удалить
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RequisiteModal;

import React from 'react';
import styles from './SaveGameInput.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { setActiveSaveGameInputs } from '../../../../redux/slices/game.slice';
import { useSelector } from 'react-redux';
const SaveGameInput = ({ id, orderGameInputs, setGameInputs }) => {
  const dispatch = useDispatch();
  const { activeSaveGameInputs } = useSelector((state) => state.game);
  return (
    <>
      <div
        className={clsx(styles.wrap, activeSaveGameInputs == id && styles.wrapActive)}
        onClick={() => {
          const saveGameInputsData = orderGameInputs?.map((gameInput) => ({ saveGameInputId: gameInput?.id, gameInputId: gameInput?.gameInput.id, value: gameInput?.gameInputOption?.id?.toString() || gameInput?.value, type: gameInput?.gameInput.type, mainInput: gameInput?.gameInput?.mainInput }));
          setGameInputs(saveGameInputsData);
          dispatch(setActiveSaveGameInputs(id));
          console.log(saveGameInputsData);
        }}>
        <div className={clsx(styles.radio)}></div>
        {orderGameInputs?.map((itemGameInput) => (
          <div className={clsx(styles.item)}>
            <div className={clsx(styles.label)}>{itemGameInput?.gameInput?.label}</div>
            <div className={clsx(styles.value, 'text-monospace')}>{itemGameInput?.gameInputOption?.label || itemGameInput?.value}</div>
          </div>
        ))}{' '}
      </div>
    </>
  );
};

export default SaveGameInput;

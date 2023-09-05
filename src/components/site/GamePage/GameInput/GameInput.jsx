import React from 'react';
import styles from './GameInput.module.scss';
import Input from '../../Common/Input/Input';
import GameAdvList from '../GameAdvList/GameAdvList';
import Button from '../../Common/Button/Button';
import clsx from 'clsx';
import WhereFind from '../WhereFind/WhereFind';
const GameInput = ({ advList, isMomentDelivary }) => {
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <WhereFind />
        <Input label="UID" />
        <Input label="Сервер" isSelect />
        <GameAdvList list={advList} isMomentDelivary={isMomentDelivary} />
        <Button lg>Купить</Button>
      </div>
    </>
  );
};

export default GameInput;

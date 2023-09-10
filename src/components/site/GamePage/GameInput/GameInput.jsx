import React, { useEffect } from 'react';
import styles from './GameInput.module.scss';
import Input from '../../Common/Input/Input';
import GameAdvList from '../GameAdvList/GameAdvList';
import Button from '../../Common/Button/Button';
import clsx from 'clsx';
import WhereFind from '../WhereFind/WhereFind';
import { useSelector } from 'react-redux';
import { currencyFormat } from '../../../../utils/currencyFormat';
import { useForm } from 'react-hook-form';
import ErrorMessage from '../../Common/ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router';
const GameInput = ({ advList, isMomentDelivery }) => {
  const {
    activePackages,
    getSingleGame: { data: gameData },
  } = useSelector((state) => state.game);
  const defaultValues = {
    packageList: [],
    gameInputList: gameData?.gameInputs?.map((itemInput) => ({ gameInputId: itemInput.id, value: '', type: itemInput.type })),
  };
  const gameInputForm = useForm({ defaultValues });
  useEffect(() => {
    gameInputForm.register('packageList', { required: { value: true, message: 'Выберите предметы для покупки' } });
  }, []);
  const navigate = useNavigate();
  const onSubmit = ({ packageList, gameInputList }) => {
    const newCartData = { gameId: gameData.id, packageList: packageList?.map((pack) => pack.id), gameInputList };
    localStorage.setItem('cart', JSON.stringify(newCartData));
    navigate('/order/checkout');
  };
  useEffect(() => {
    gameInputForm.setValue('packageList', activePackages);
    if (activePackages?.length >= 1) {
      gameInputForm.trigger('packageList');
    }
  }, [activePackages]);
  console.log(gameInputForm.formState.errors);
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <WhereFind />
        {gameData?.gameInputs?.map((itemInput, indexInput) => (
          <Input isSelect={itemInput?.type == 'select'} {...itemInput} slug={`gameInputList[${indexInput}].value`} form={gameInputForm} options={itemInput?.gameInputOptions} rules={JSON.parse(itemInput.rules)} />
        ))}

        <GameAdvList list={advList} isMomentDelivery={isMomentDelivery} />
        {Object.keys(gameInputForm.formState.errors).map((key, index) => {
          if (Array.isArray(gameInputForm.formState.errors[key])) {
            for (let gameInputErr of gameInputForm.formState.errors[key]) {
              if (gameInputErr) {
                return <ErrorMessage text={gameInputErr?.value?.message || 'Заполните поля'} />;
              }
            }
          } else {
            if (!gameInputForm.formState.errors?.gameInputList) {
              return <ErrorMessage text={gameInputForm.formState.errors[key].message || 'Заполните поля'} />;
            }
          }
        })}
        <div className={styles.submit}>
          {' '}
          <Button lg onClick={gameInputForm.handleSubmit(onSubmit)}>
            Купить{' '}
            {activePackages?.length >= 1
              ? ` за ${currencyFormat(
                  activePackages
                    ?.map((item) => item.price)
                    .reduce((accumulator, currentValue) => {
                      return accumulator + currentValue;
                    }, 0),
                )}`
              : ''}
          </Button>
        </div>
      </div>
    </>
  );
};

export default GameInput;

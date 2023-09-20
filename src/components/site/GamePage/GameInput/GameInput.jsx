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
import SaveGameInput from '../SaveGameInput/SaveGameInput';
import { useDispatch } from 'react-redux';
import { setActiveSaveGameInputs } from '../../../../redux/slices/game.slice';
const GameInput = ({ advList, isMomentDelivery }) => {
  const {
    activePackages,
    getSingleGame: { data: gameData },
    activeSaveGameInputs,
  } = useSelector((state) => state.game);
  const {
    getSaveGameInputs: { data: saveGameInputs },
  } = useSelector((state) => state.order);
  const defaultValues = {
    packageList: [],
    gameInputList: gameData?.gameInputs?.map((itemInput) => ({ gameInputId: itemInput.id, value: '', type: itemInput.type, mainInput: itemInput.mainInput })),
  };
  const gameInputForm = useForm({ defaultValues });
  useEffect(() => {
    if (gameData?.packages?.length !== 0) {
      gameInputForm.register('packageList', { required: { value: true, message: 'Выберите предметы для покупки' } });
    } else {
      gameInputForm.register('packageList', { required: false });
    }
  }, [gameData]);
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
  console.log(gameInputForm.watch());
  const dispatch = useDispatch();

  React.useEffect(() => {
    const subscription = gameInputForm.watch((value, { name, type }) => {
      console.log(type, name);
      if (type == 'change') {
        dispatch(setActiveSaveGameInputs(null));
      }
    });
    return () => subscription.unsubscribe();
  }, [gameInputForm.watch]);
  return (
    <>
      <div className={clsx(styles.wrap)}>
        {gameData?.whereImage && <WhereFind image={gameData?.whereImage} />}
        {gameData?.gameInputs?.map((itemInput, indexInput) => (
          <Input isSelect={itemInput?.type == 'select'} {...itemInput} slug={`gameInputList[${indexInput}].value`} form={gameInputForm} options={itemInput?.gameInputOptions} rules={JSON.parse(itemInput.rules)} />
        ))}
        {saveGameInputs?.[0]?.orders?.map((saveInput) => (
          <SaveGameInput
            {...saveInput}
            setGameInputs={(saveGameInputData) => {
              gameInputForm.setValue('gameInputList', saveGameInputData);
            }}
          />
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
            {gameInputForm.watch('gameInputList')?.filter((gameInput) => gameInput?.mainInput)?.length != 0 ? 'Пополнить' : 'Купить'}
            {gameInputForm.watch('gameInputList')?.filter((gameInput) => gameInput?.mainInput)?.[0]?.value ? ` на ${currencyFormat(gameInputForm.watch('gameInputList')?.filter((gameInput) => gameInput?.mainInput)?.[0]?.value)}` : ''}
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

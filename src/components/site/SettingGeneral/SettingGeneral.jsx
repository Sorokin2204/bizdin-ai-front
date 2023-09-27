import React from 'react';
import styles from './SettingGeneral.module.scss';
import RadioImage from '../RadioImage/RadioImage';
import Select from '../Select/Select';
import Button from '../Button/Button';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { setActiveLang } from '../../../redux/slices/app.slice';
import { useDispatch } from 'react-redux';
const SettingGeneral = () => {
  const { activeLang } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  return (
    <>
      <div className={clsx(styles.wrap)}>
        <div className={clsx(styles.title)}>General</div>
        <RadioImage
          label={'Appearance'}
          list={[
            {
              image: './img/light-theme.svg',
              name: 'Light mode',
            },
            {
              image: './img/dark-theme.svg',
              name: 'Dark mode',
            },
          ]}
        />
        <div className={clsx(styles.line)}>
          <div className={clsx(styles.label)}>Primary language</div>
          <Select
            onChange={(val) => {
              dispatch(setActiveLang(val));
            }}
            value={activeLang}
            list={['English', 'Russian', 'Spanish']}
            type2
          />
        </div>{' '}
        <div className={clsx(styles.line)}>
          <div className={clsx(styles.label)}>Clear all chats</div>
          <Button style={{ fontSize: '14px', borderRadius: '12px', width: '72px', backgroundColor: '#D84C10' }}>Clear</Button>
        </div>
      </div>
    </>
  );
};

export default SettingGeneral;

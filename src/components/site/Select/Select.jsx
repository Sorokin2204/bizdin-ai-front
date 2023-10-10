import React, { useEffect, useState } from 'react';
import styles from './Select.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
const Select = ({ label, list, multi, onChange, styleInput, type2, value }) => {
  const [activeOptions, setActiveOptions] = useState([]);
  const [show, setShow] = useState(false);
  const [activeOption, setActiveOption] = useState(null);
  const { showTips } = useSelector((state) => state.app);

  useEffect(() => {
    if (showTips) {
      setShow(false);
    }
  }, [showTips]);

  return (
    <>
      {label && <div className={clsx(styles.label)}>{label}</div>}
      <div className={clsx(styles.wrap, type2 && styles.wrapType2)}>
        <div
          className={clsx(type2 && styles.inputType2, styles.input, show && styles.inputActive)}
          onClick={() => {
            setShow(!show);
          }}
          style={styleInput}>
          {multi ? activeOptions?.join(',') : value}
        </div>
        <div className={clsx(styles.list, show && styles.listShow)}>
          {list?.map((item) => {
            const findOpt = activeOptions.find((actOpt) => actOpt == item);
            return (
              <div
                className={clsx(styles.item, findOpt && styles.itemActive, multi && styles.itemMulti)}
                onClick={() => {
                  if (multi) {
                    if (findOpt) {
                      setActiveOptions(activeOptions?.filter((actOpt) => actOpt != item));
                    } else {
                      setActiveOptions([...activeOptions, item]);
                    }
                  } else {
                    setShow(false);
                    onChange(item);
                  }
                }}>
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Select;

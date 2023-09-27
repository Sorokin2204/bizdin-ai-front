import React from 'react';
import styles from './Input.module.scss';
import clsx from 'clsx';
import { Controller } from 'react-hook-form';
const Input = ({ label, placeholder, isSelect, grey, lg, slug, rules = { required: true }, form, options = [], blue, rows, isTextarea }) => {
  const watchVal = form.watch(slug);
  return (
    <>
      <div className={clsx(styles.wrap)}>
        {label && <div className={clsx(styles.label, grey && styles.labelThin, blue && styles.blue)}>{label}</div>}

        {isSelect ? (
          <Controller
            control={form.control}
            name={slug}
            rules={rules}
            render={({ field }) => {
              return (
                <select className={clsx(styles.input, grey && styles.inputGrey, lg && styles.inputBig)} {...field} value={watchVal}>
                  <option value={''} disabled style={{ display: 'none' }}></option>
                  {options?.map((opt) => (
                    <option value={opt.id}>{opt.label}</option>
                  ))}
                </select>
              );
            }}
          />
        ) : isTextarea ? (
          <textarea rows={rows} type="text" className={clsx(styles.input, grey && styles.inputGrey, lg && styles.inputBig)} placeholder={placeholder} {...form.register(slug, rules)} />
        ) : (
          <input type="text" className={clsx(styles.input, grey && styles.inputGrey, lg && styles.inputBig)} placeholder={placeholder} {...form.register(slug, rules)} />
        )}
      </div>
    </>
  );
};

export default Input;

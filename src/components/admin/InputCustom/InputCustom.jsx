import clsx from 'clsx';
import React from 'react';
import { NumberFormatBase, PatternFormat, NumberFormat, NumericFormat } from 'react-number-format';
import styles from './InputCustom.module.scss';
import { Controller } from 'react-hook-form';
import { Checkbox, FormControl, FormControlLabel, FormHelperText, InputLabel, ListSubheader, MenuItem, Select, TextField } from '@mui/material';
const InputCustom = ({ form, name, label, placeholder, required = true, isTextarea, isNumber, isSelect, options, disabled, isCheckbox, errorCustom = null, ...otherProps }) => {
  const error = errorCustom !== null ? errorCustom : form?.formState?.errors?.[name];
  return isNumber ? (
    <Controller
      control={form.control}
      name={name}
      rules={{ required, ...(required && { min: 1 }) }}
      render={({ field: { onChange, name, value } }) => (
        <NumericFormat size="small" error={error} sx={{ width: '100%', marginBottom: '8px' }} helperText={error && 'Заполните поле'} label={label} customInput={TextField} thousandSeparator={' '} name={name} value={value} onValueChange={(val) => onChange(val.floatValue)} />
      )}
    />
  ) : isCheckbox ? (
    <FormControlLabel control={<Controller rules={{ required }} name={name} control={form.control} render={({ field: props }) => <Checkbox {...props} checked={props.value} onChange={(e) => props.onChange(e.target.checked)} />} />} label={label} />
  ) : isSelect ? (
    <div>
      <FormControl fullWidth size="small" error={error} sx={{ mb: '16px' }}>
        <InputLabel id={`select-${name}`}>{label}</InputLabel>
        <Controller
          render={({ field }) => (
            <Select labelId={`select-${name}`} label={label} {...field}>
              {
                options?.map((opt) => [opt?.group && <ListSubheader>{opt?.group}</ListSubheader>, <MenuItem value={opt.value}>{opt.label}</MenuItem>])

                // <MenuItem value={opt.value}>{opt.label}</MenuItem>
              }
            </Select>
          )}
          name={name}
          rules={{ required }}
          control={form.control}
        />
        {error && <FormHelperText>Заполните поле</FormHelperText>}
      </FormControl>
    </div>
  ) : (
    <Controller name={name} control={form.control} rules={{ required }} render={({ field }) => <TextField multiline={isTextarea} {...otherProps} size="small" error={error} sx={{ width: '100%', marginBottom: '8px' }} helperText={error && 'Заполните поле'} label={label} {...field} />} />
  );
};

export default InputCustom;

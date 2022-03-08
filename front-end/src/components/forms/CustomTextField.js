import React from 'react'
import {pick} from 'ramda';
import TextField from '@mui/material/TextField';
import { useController } from 'react-hook-form';

const CustomTextField = (props) => {
  const textFieldProps = pick(['label', 'type', 'multiline', 'rows', 'variant', 'autoComplete', 'required' ], props)
  const {field, fieldState} = useController(props)
  const {invalid, error} = fieldState
  return (
    <TextField
      className={props.className}
      {...field}
      type="text"
      error={invalid}
      helperText={error ? error.message : ''}
      autoComplete="name"
      variant="outlined"
      fullWidth
      {...textFieldProps}
    />
  )
}

export default CustomTextField

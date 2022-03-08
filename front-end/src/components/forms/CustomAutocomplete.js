import React from 'react'
import { pick } from 'ramda';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useController } from 'react-hook-form';


const CustomAutocomplete = (props) => {
  const {options = []} = props
  const autocompleteProps = pick(['label', 'multiple', 'freeSolo', 'required', 'getOptionLabel'], props)
  const {field, fieldState} = useController(props)
  const {invalid, error} = fieldState


  return <Autocomplete
    className={props.className}
    {...field}
    options={options}
    {...{freeSolo: false, multiple: false, ...autocompleteProps}}
    onChange={(event, newValue) => {
      field.onChange(newValue);
    }}
    renderInput={(params) => (
      <TextField
        {...params}
        error={invalid}
        helperText={error ? error.message : ''}
        placeholder={props.placeholder}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
    )}

  />
}

export default CustomAutocomplete

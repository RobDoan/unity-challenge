import React from 'react'
import { styled } from '@mui/material'
import CustomTextField from '../../components/forms/CustomTextField'
import CustomAutocomplete from '../../components/forms/CustomAutocomplete'

const StyledTextField = styled(CustomTextField)`
  margin: 10px 0;
`

const GameItemFormBasic = ({control, categories}) => {
  const getOptionLabel = (option) => option.name
  return (
    <>
      <StyledTextField name='title' label="Title" control={control} required/>
      <StyledTextField name='subtitle' label="Subtitle" control={control}/>

      <CustomAutocomplete name='category' labale='Category'
                          placeholder='select a category'
                          getOptionLabel={getOptionLabel}
                          control={control} options={categories} required/>
      <StyledTextField name='duration' label="duration" control={control} type='number'/>
      <StyledTextField name='author' label="Author" control={control}/>
    </>
  )
}
export default GameItemFormBasic;

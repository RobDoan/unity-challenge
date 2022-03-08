import React from 'react'
import { styled } from '@mui/material'
import FormControlLabel from '@mui/material/FormControlLabel';
import CustomTextField from '../../components/forms/CustomTextField'
import CustomAutocomplete from '../../components/forms/CustomAutocomplete'
import CustomCheckbox from '../../components/forms/CustomCheckbox'

const StyledTextField = styled(CustomTextField)`
  margin: 10px 0;
`

const GameItemFormAdvance = ({control}) => {
  return (
    <>
      <StyledTextField name='description' label="Description" control={control} multiline rows={5}/>
      <StyledTextField name='replayBundleUrlJson' label="Replay Bundler URL Json" control={control}/>
      <CustomAutocomplete name='tags' label='Tags'
                          placeholder="Select multiple tags. Press Enter to add new tag"
                          control={control} options={[]} freeSolo={true} multiple={true}/>
      <FormControlLabel
        control={
          <CustomCheckbox control={control} name="isDownloadable" color="primary"/>
        }
        label="Is Downloadable"
        sx={{
          mb: 1,
        }}
      />
      <FormControlLabel
        control={
          <CustomCheckbox control={control} name="isStreamable" color="primary"/>
        }
        label="Is Streamable"
        sx={{
          mb: 1,
        }}
      />
    </>
  )
}
export default GameItemFormAdvance;

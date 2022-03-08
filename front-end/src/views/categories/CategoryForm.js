import React, { useEffect } from 'react'
import { styled } from '@mui/material'
import Button from '@mui/material/Button';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';
import CustomTextField from '../../components/forms/CustomTextField'

const CategorySchema = yup.object().shape({
  name: yup.string().min(3).required('You must enter a name'),
})

const StyledTextField = styled(CustomTextField)`
  margin: 3.2rem 0;
`
const StyleForm = styled('form')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const StyledButton = styled(Button)`
  flex: none;
`

const ButtonWrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const CategoryForm = (props) => {
  const {category: initCategory, onSubmit} = props
  const {control, formState, handleSubmit, setValue, trigger} = useForm({
    defaultValues: initCategory,
    mode: 'onChange',
    resolver: yupResolver(CategorySchema)
  });
  useEffect(() => {
    const {name = ''} = initCategory || {}
    setValue('name', name)
    trigger('name')
  }, [initCategory, setValue, trigger])

  const {isValid} = formState

  return (
    <StyleForm onSubmit={handleSubmit(onSubmit)}>
      <StyledTextField name='name' control={control}/>
      <ButtonWrapper>
        <StyledButton
          type="submit"
          variant="contained"
          color="primary"
          aria-label="save"
          disabled={!isValid}
        >
          Save
        </StyledButton>
      </ButtonWrapper>

    </StyleForm>
  )
}
export default CategoryForm;

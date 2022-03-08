import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form';
import UnityForm from '../../components/forms/UnityForm'
import GameItemSchema from './GameItemSchema'
import GameItemFormBasic from './GameItemFormBasic'
import GameItemFormAdvance from './GameItemFormAdvance'
import GameItemImages from './GameItemImages'
import { useGameItemContext } from './GameItemProvider'

const ButtonWrapper = styled('div')`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const GameItemForm = (props) => {
  const {gameItem = {}} = props
  const {service: {listCategories, createItem}} = useGameItemContext()
  const [categories, setCategories] = useState([])

  useEffect(() => {
    listCategories().then(data => setCategories(data))
  }, [listCategories]);
  const [value, setValue] = React.useState('1');

  const onSubmit = async (data) => {
    // Sanitize category data
    const {category = {}} = data
    const sanitizedData = {...data, category: category.id}
    return await createItem(sanitizedData)
  }
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {control, formState, handleSubmit} = useForm({
    defaultValues: gameItem,
    mode: 'onChange',
    resolver: yupResolver(GameItemSchema)
  });

  const {isValid} = formState

  return (
    <UnityForm onSubmit={handleSubmit(onSubmit)}>
      <TabContext value={value}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Basic Info" value="1"/>
            <Tab label="Images" value="2"/>
            <Tab label="Details" value="3"/>
          </TabList>
        </Box>
        <TabPanel value="1">
          <GameItemFormBasic control={control} categories={categories}/>
        </TabPanel>
        <TabPanel value="2">
          <GameItemImages control={control} name='images'/>
        </TabPanel>
        <TabPanel value="3"><GameItemFormAdvance control={control}/></TabPanel>
      </TabContext>

      <ButtonWrapper>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          aria-label="save"
          disabled={!isValid}
        >
          Save
        </Button>
      </ButtonWrapper>
    </UnityForm>)
}
export default GameItemForm;

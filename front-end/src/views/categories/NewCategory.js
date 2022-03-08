import React, { useState } from 'react'
import ContentWrapper from '../../components/container/ContentWrapper'
import CategoryForm from './CategoryForm'
import { useCategoriesContext } from './CategoriesProvider'

const NewCategory = () => {
  const [category, setCategory] = useState({})
  const {service} = useCategoriesContext()
  const submitHandler = async (category) => {
    service.addCategory(category.name)
      .then(() => setCategory({}))
  }
  return <ContentWrapper title='New Category'>
    <CategoryForm category={category}
                  onSubmit={submitHandler}/>
  </ContentWrapper>


}

export default NewCategory

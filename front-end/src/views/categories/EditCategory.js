import React from 'react'
import { useParams } from "react-router-dom";
import ContentWrapper from '../../components/container/ContentWrapper'
import CategoryForm from './CategoryForm'
import { useCategoriesContext } from './CategoriesProvider'

const EditCategory = () => {
  const {id} = useParams()
  const {categories, service} = useCategoriesContext()
  const category = categories.find((cat) => cat.id === id)

  const submitHandler = (category) => {
    service.updateCategory(category)
  }

  return <ContentWrapper title='Edit Category'>
    <CategoryForm category={category}
                  onSubmit={submitHandler}/>
  </ContentWrapper>
}

export default EditCategory

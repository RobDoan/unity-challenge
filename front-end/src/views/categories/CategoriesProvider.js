import React, { createContext, useContext, useEffect, useState } from 'react'
import * as categoryService from '../../services/category.service'

const CategoriesContext = createContext({})

export function useCategoriesContext() {
  return useContext(CategoriesContext)
}

export function CategoriesProvider(props) {
  const [categories, setCategories] = useState([]);

  const addCategory = async (name) => {
    const category = await categoryService.createCategory(name)
    setCategories([category, ...categories])
  }

  const updateCategory = async (updatedCategory) => {
    const category = await categoryService.updateCategory(updatedCategory.id, updatedCategory.name)
    const newCategoriesList = categories.reduce((newCategories, element) => {
      if (element.id !== updatedCategory.id) {
        newCategories.push(element)
      } else {
        newCategories.push(category)
      }
      return newCategories
    }, [])
    setCategories(newCategoriesList)
  }

  useEffect(() => {
    categoryService.listCategories()
      .then((data) => setCategories(data))
  }, [])

  const service = {
    addCategory,
    updateCategory
  }
  return <CategoriesContext.Provider value={{service, categories}}>
    {props.children}
  </CategoriesContext.Provider>
}

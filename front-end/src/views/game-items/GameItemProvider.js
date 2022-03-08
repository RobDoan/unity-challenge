import React, { createContext, useContext } from 'react'
import * as imageService from '../../services/image.service'
import * as gameItemService from '../../services/gameItem.service'
import * as categoryService from '../../services/category.service'

const service = {
  uploadImages: imageService.uploadImages,
  createItem: gameItemService.createItem,
  listCategories: categoryService.listCategories,
}

const GameItemContext = createContext({})

export function useGameItemContext() {
  return useContext(GameItemContext)
}

export function GameItemProvider(props) {
  return <GameItemContext.Provider value={{service}}>
    {props.children}
  </GameItemContext.Provider>
}

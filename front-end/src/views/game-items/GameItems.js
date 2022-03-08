import React from 'react'


import PageContainer from '../../components/container/PageContainer'
import ContentWrapper from '../../components/container/ContentWrapper'
import GameItemForm from './GameItemForm'
import { GameItemProvider } from './GameItemProvider'


const GameItems = (props) => {
  const gameItem = {}

  return (<GameItemProvider>
      <PageContainer title='Game Items' description='Game Items'>
        <ContentWrapper title='Game Items'>
          <GameItemForm gameItem={gameItem}/>
        </ContentWrapper>
      </PageContainer>
    </GameItemProvider>
  )
}
export default GameItems;

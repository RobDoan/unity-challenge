import axios from 'axios'

export async function createItem(data){
  const gameItem = await axios.post('/api/v1/game-items', data)
  return gameItem
}

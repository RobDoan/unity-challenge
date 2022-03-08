import axios from 'axios'

export async function createCategory(name) {
  return await axios.post('/api/v1/categories', {name: name})
    .then(res => res.data)
}

export async function updateCategory(id, name) {
  return await axios.patch(`/api/v1/categories/${id}`, {name: name})
    .then(res => res.data)
}

export async function listCategories() {
  const {data} = await axios.get('/api/v1/categories')
  return data.results
}


export async function getCategory(id) {
  return axios.get(`/api/v1/categories/${id}`)
}

import axios from 'axios'

export async function uploadImages(files) {
  const formData = new FormData();

  files.forEach(fileWithMeta => formData.append('images', fileWithMeta))
  return await axios.post('/api/v1/images', formData, {headers: {'Content-Type': 'multipart/form-data'}})
    .then((res) => res.data)
    .then(data => {
      return data.map((datum) => {
        const {_id, url} = datum
        return {id: _id, url: url}
      })
    })
}

import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const destroy = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.status)
}

export default {getAll, create, destroy}
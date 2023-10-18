import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl).then(response => response.data).catch(error => {
    throw error
  })
}

const create = (person) => {
  return axios.post(baseUrl, person).then(response => response.data).catch(error => {
    throw error
  })
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject).then(response => response.data).catch(error => {
    throw error
  })
}

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then(response => response.data).catch(error => {
    throw error
  })
}

export  { getAll, create, update, remove }
import axios from 'axios'

const baseUrl = 'https://dogsapi.origamid.dev/json'

export const apiConfig = axios.create({
  baseURL: baseUrl
})

export const api = axios.create({ // instancia do axios que será usada nos endpoint
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem('token')}`
  }
})

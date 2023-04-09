import axios from 'axios'

const baseUrl = 'https://dogsapi.origamid.dev/json'
axios.defaults.baseURL = baseUrl

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: `Bearer ${window.localStorage.getItem('token')}`
  }
})

export async function auth({ username, password }) {
    const { data } = await axios.post('/jwt-auth/v1/token', { username, password })
    return data
  }
import axios from 'axios'

const baseUrl = 'https://dogsapi.origamid.dev/json'
axios.defaults.baseURL = baseUrl

export const apiUser = {
  auth: async ({ username, password }) => {
    const { data } = await axios.post('/jwt-auth/v1/token', { username, password })
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
    return data
  },

  getUser: async (token) => {
    const { data } = await axios.get('/api/user')
    return data
  }

}
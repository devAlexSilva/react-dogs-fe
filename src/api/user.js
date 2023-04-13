import { api, apiConfig } from "./axiosConfig"


export const Api = {
  cretaeUser: async ({ username, email, password }) => {
    const { data } = await apiConfig.post('/api/user', {
      username,
      email,
      password
    })

    return data
  },

  getUser: async () => {
    const { data } = await api.get('/api/user')
    return data
  },

  validateToken: async (token) => {
    const { data } = await api.post('jwt-auth/v1/token/validate')
    return data
  }

}
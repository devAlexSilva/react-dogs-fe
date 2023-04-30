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
  },

  newPhoto: async (formData) => {
    const { data } = await api.post('/api/photo', formData)
    return data
  },

getPhoto: async ({ page, total, user }) => {
    const { data } = await api.get(`/api/photo/?page=${page}&total=${total}user=${user}`)
    return data
  }

}
import { api } from "./axiosConfig"


export const Api = {
  getUser: async () => {
    const { data } = await api.get('/api/user')
    return data
  },

  validateToken: async (token) => {
    const { data } = await api.post('jwt-auth/v1/token/validate')
    return data
  }

}
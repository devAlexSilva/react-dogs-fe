import { api } from "./axiosConfig"


export const Api = {
  getUser: async () => {
    const { data } = await api.get('/api/user')
    return data
  }

}
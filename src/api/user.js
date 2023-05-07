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
    const { data } = await apiConfig.get(`/api/photo/?_page=${page}&_total=${total}&_user=${user}`)
    return data
  },

  getPhotoById: async (id) => {
    const { data } = await api.get(`/api/photo/${id}`)
    return data
  },

  createComment: async (id, comment) => {
    await api.post(`/api/comment/${id}`, { comment: comment })
  },

  deletePhotoById: async (id) => {
    const { data } = await api.delete(`/api/photo/${id}`)
    return data
  },

  lostPassword: async (body) => {
    console.log(body)
    const { data } = await apiConfig.post(`/api/password/lost`, body)
    return data
  },
}
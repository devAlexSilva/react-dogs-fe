import { useEffect } from 'react'
import { createContext, useState } from 'react'
import { apiAuth } from '../api/axiosConfig'
import { Api } from '../api/user'

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [dataUser, setDataUser] = useState(null)
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function contextLogin({ username, password }) {
    const { data } = await apiAuth.post('/jwt-auth/v1/token', { username, password })

    if (data.token) {
      window.localStorage.setItem('token', data.token)
      apiAuth.defaults.headers.common.Authorization = `Bearer ${data.token}`
      
      const { data: logedUser } = await apiAuth.get('/api/user')
      setDataUser(logedUser)
    }
  }


  return (
    <UserContext.Provider value={{ contextLogin, dataUser }}>
      {children}
    </UserContext.Provider>
  )
}
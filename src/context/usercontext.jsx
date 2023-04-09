import { useEffect } from 'react'
import { createContext, useState } from 'react'
import { apiConfig } from '../api/axiosConfig'
import { Api } from '../api/user'
import { useNavigate } from 'react-router-dom'

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [dataUser, setDataUser] = useState(null)
  const [login, setLogin] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token')

      if (token) {
        try {
          setError(null)
          setLoading(true)

          await Api.validateToken(token)
          const logedUser = await Api.getUser()

          setDataUser(logedUser)
          navigate('/account')

        } catch (err) {
          console.log(err.response.data)
          Logout()

        } finally {
          setLoading(false)
          setLogin(false)
        }
      }
    }
    autoLogin()
  }, [])

  async function contextLogin({ username, password }) {
    try {
      setError(null)
      setLoading(true)

      const { data } = await apiConfig.post('/jwt-auth/v1/token', { username, password })

      if (data.token) {
        window.localStorage.setItem('token', data.token)
        apiConfig.defaults.headers.common.Authorization = `Bearer ${data.token}`

        const { data: logedUser } = await apiConfig.get('/api/user')
        setDataUser(logedUser)
        setLogin(true)
        navigate('/account')
      }

    } catch (err) {
      setError('usuario ou senha incorretos')
    } finally {
      setLoading(false)
    }
  }

  function Logout() {
    setDataUser(null)
    setLogin(null)
    setLoading(false)
    setError(null)

    window.localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <UserContext.Provider value={{ contextLogin, dataUser, Logout, error, loading, login }}>
      {children}
    </UserContext.Provider>
  )
}
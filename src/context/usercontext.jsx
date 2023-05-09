import { useEffect } from 'react'
import { createContext, useState } from 'react'
import { apiConfig } from '../api/axiosConfig'
import { Api } from '../api/user'
import { useLocation, useNavigate } from 'react-router-dom'

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [dataUser, setDataUser] = useState(null)
  const [login, setLogin] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(true)
  const navigate = useNavigate()

  const currentPath = window.location.pathname

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token')

      if (token === null && currentPath.includes('/user')) return navigate('/login')

      else if (token && currentPath.includes('/user')) {
        try {
          setError(null)
          setLoading(true)

          await Api.validateToken(token)
          const logedUser = await Api.getUser()

          setDataUser(logedUser)
          setLogin(true)

          navigate('/user')

        } catch (err) {
          console.log(err)
          Logout()

        } finally {
          setLoading(false)
        }

      }
    }
    autoLogin()
  }, [currentPath])

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
        navigate('/user')
        window.location.reload()
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
    <UserContext.Provider value={{
      contextLogin,
      dataUser,
      Logout,
      error,
      setError,
      loading,
      setLoading,
      login,
      modalIsOpen,
      setModalIsOpen
    }}>
      {children}
    </UserContext.Provider>
  )
}
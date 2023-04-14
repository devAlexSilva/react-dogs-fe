import { UserContext } from '../../context/usercontext'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'


export function ProtectedRoute({ children }) {
  const { login } = useContext(UserContext)

  return login ? children : <Navigate to='/login' />
}
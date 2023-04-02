import { useState } from 'react'
import * as S from './main.module.css'
import axios from 'axios'

export function LoginForm() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    if(!userName || !password) return alert('usuário e senha são obrigatórios')
    
    const { data } = await axios.post('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
    {
      username: userName,
      password
    })
    
    console.log(data.token)

    setUserName('')
    setPassword('')
  }
  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <input 
      type='text' 
      name='userName' 
      id='userName'
      value={userName}
      onChange={(e) => setUserName(e.target.value)} />
      
      <input 
      type='password' 
      name='password' 
      id='password'
      value={password}
      onChange={(e) => setPassword(e.target.value)} />
      
      <button>Login</button>
    </form>
  )
}
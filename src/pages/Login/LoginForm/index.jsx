import { useState } from 'react'
import axios from 'axios'
import { Input } from '../../../components/Input'
import * as S from './main.module.css'
import { Button } from '../../../components/Button'

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
    
    console.log(data)

    setUserName('')
    setPassword('')
  }
  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <Input 
      type='text' 
      name='username' 
      value={userName}
      setValue={setUserName} />
      
      <Input 
      setValue={setPassword} 
      value={password} 
      name='password'
      type='password'
      />
      
      <Button>Login</Button>
    </form>
  )
}
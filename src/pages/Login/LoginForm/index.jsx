import { Input } from '../../../components/Input'
import * as S from './main.module.css'
import { Button } from '../../../components/Button'
import { UseForm } from '../../../hooks/UseForm'
import { useContext } from 'react'
import { UserContext } from '../../../context/usercontext'

export function LoginForm() {
  const userName = UseForm()
  const password = UseForm()
  const { contextLogin, error, loading, login } = useContext(UserContext)

  const handleLogin = async (e) => {
    e.preventDefault()

    const data = {
      username: userName.value,
      password: password.value
    }

    if (userName.isValid() && password.isValid()) {
      await contextLogin(data)
    }
  }

  return (
    <form onSubmit={(e) => handleLogin(e)}>
      <Input
        type='text'
        name='username'
        {...userName}
      />
      <Input
        type='password'
        name='password'
        {...password}
      />

      {
      loading 
      ? <Button disabled>Carregando</Button>
      : <Button>Login</Button>
    }
      {error && <p>{error}</p>}
    </form>
  )
}
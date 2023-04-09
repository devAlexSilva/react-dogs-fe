import { Input } from '../../../components/Input'
import * as S from './main.module.css'
import { Button } from '../../../components/Button'
import { UseForm } from '../../../hooks/UseForm'
import { Api } from '../../../api/user'
import { useContext } from 'react'
import { UserContext } from '../../../context/usercontext'

export function LoginForm() {
  const userName = UseForm()
  const password = UseForm()
  const {contextLogin} = useContext(UserContext)

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


      <Button>Login</Button>
    </form>
  )
}
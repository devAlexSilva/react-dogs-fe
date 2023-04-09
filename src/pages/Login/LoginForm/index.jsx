import { Input } from '../../../components/Input'
import * as S from './main.module.css'
import { Button } from '../../../components/Button'
import { UseForm } from '../../../hooks/UseForm'
import { Api } from '../../../api/user'
import { auth } from '../../../api/axiosConfig'

export function LoginForm() {
  const userName = UseForm()
  const password = UseForm()

  const handleLogin = async (e) => {
    e.preventDefault()

    const data = {
      username: userName.value,
      password: password.value
    }

    if (userName.isValid() && password.isValid()) {
      const result = await auth(data)
      console.log(result)

      if (result.token) window.localStorage.setItem('token', result.token)
      console.log(await Api.getUser())
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
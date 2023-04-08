import { useEffect, useState } from 'react'
import axios from 'axios'
import { Input } from '../../../components/Input'
import * as S from './main.module.css'
import { Button } from '../../../components/Button'
import { UseForm } from '../../../hooks/UseForm'
import { apiUser } from '../../../api/user'

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
      const result = await apiUser.auth(data)
      console.log(result)

      if (result.token) window.localStorage.setItem('token', result.token)
      console.log(await apiUser.getUser())
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
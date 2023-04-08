import { useEffect, useState } from 'react'
import axios from 'axios'
import { Input } from '../../../components/Input'
import * as S from './main.module.css'
import { Button } from '../../../components/Button'
import { UseForm } from '../../../hooks/UseForm'

export function LoginForm() {
  const userName = UseForm('email')
  const password = UseForm('password')

  const handleLogin = async (e) => {
    e.preventDefault()

    if (userName.isValid() && password.isValid()) {
      const { data } = await axios.post('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
        {
          username: userName.value,
          password: password.value
        })

      console.log(data)
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
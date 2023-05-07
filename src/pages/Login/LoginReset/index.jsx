import * as S from './main.module.css'
import { Api } from '../../../api/user'
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'
import { Error } from '../../../components/Error'
import { UseForm } from '../../../hooks/UseForm'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'


export function LoginReset() {
  const [login, setLogin] = useState(null)
  const [key, setKey] = useState(null)
  const [loaiding, setLoading] = useState(false)
  const password = UseForm('password')
  const [error, setError] = useState(null)
  const [reseted, setReseted] = useState(false)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)

    const loginExists = urlParams.get('login')
    const keyExists = urlParams.get('key')

    if (loginExists) setLogin(loginExists)
    if (keyExists) setKey(keyExists)
  }, [])

  async function handleClick(e) {
    e.preventDefault()
    setError(null)
    if (!password.isValid()) return setError(password.error)

    const dataToReset = {
      login: login,
      key: key,
      password: password.value
    }

    try {
      setLoading(true)
      setError(null)
      const data = await Api.resetPassword(dataToReset)
      alert(data)
      setReseted(true)

    } catch (err) {
      setError(err.response.data.message)

    }
    finally {
      setLoading(false)
    }
  }
  return (
    <>
      <h1 className='title'>Resetar Senha</h1>
      { 
      reseted ? window.location.replace('/login') : (
        <form onSubmit={handleClick}>
          <p>{login}</p>
          <p>{key}</p>
          <Input name='password' label='Nova Senha' {...password} />
          {
            loaiding ? <Button disabled>Enviando</Button> :
              <Button>Enviar</Button>
          }
        </form>
      )}
      {error && <Error error={error} />}
    </>
  )
}
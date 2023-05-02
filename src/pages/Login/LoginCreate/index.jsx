import { useContext, useState } from 'react'
import { Button } from '../../../components/Button'
import { Input } from '../../../components/Input'
import { UseForm } from '../../../hooks/UseForm'
import { UserContext } from '../../../context/usercontext'
import * as S from './main.module.css'
import { Error } from '../../../components/Error'
import { Api } from '../../../api/user'


export function LoginCreate() {
  const userName = UseForm('')
  const email = UseForm('email')
  const password = UseForm('password')
  const [loading, setLoading] = useState(false)
  const { contextLogin } = useContext(UserContext)
  const [error, setError] = useState(null)

  async function handleRegister(event) {
    event.preventDefault()
    setError(null)

    if (
      userName.isValid() === false ||
      email.isValid() === false ||
      password.isValid() === false
    ) return

    const data = {
      username: userName.value,
      email: email.value,
      password: password.value
    }

    try {
      setLoading(true)
      await Api.cretaeUser(data)
      await contextLogin(data)

    } catch (err) {
      setError(err.response.data.message)
      
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className='animeLeft'>
      <h1 className='title'>Cadastre-se</h1>
      <form>
        <Input name='Usuário' type='text' {...userName} />
        <Input name='Email' type='email' {...email} />
        <Input name='Senha' type='password' {...password} />
        {
          loading ? <Button disabled>Carregando</Button> : <Button onClick={handleRegister} >enviar</Button>
        }

        <Error error={error} />
      </form>
    </section>
  )
}
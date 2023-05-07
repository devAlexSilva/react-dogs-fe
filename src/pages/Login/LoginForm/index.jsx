import { Input } from '../../../components/Input'
import * as S from './main.module.css'
import * as styleBtn from '../../../components/Button/main.module.css'
import { Button } from '../../../components/Button'
import { UseForm } from '../../../hooks/UseForm'
import { Head } from '../../../components/Head'
import { useContext } from 'react'
import { UserContext } from '../../../context/usercontext'
import { Error } from '../../../components/Error'
import { Link } from 'react-router-dom'

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
    <>
    <Head title='login' description='acessar conta' />
    <section className='animeLeft'>
      <form className={S.form} onSubmit={(e) => handleLogin(e)}>
        <h1 className='title'>Login</h1>
        <Input
          type='text'
          name='Usuário'
          {...userName}
        />
        <Input
          type='password'
          name='Senha'
          {...password}
        />

        {
          loading
            ? <Button disabled>Carregando</Button>
            : <Button>Login</Button>
        }
        <Error error={error}/>
      </form>
      
      <Link className={S.lost} to='/login/lost'>Perdeu a Senha?</Link>
      
      <div className={S.register}>
        <h2 className={S.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no Site</p>
        <Link className={styleBtn.button} to='/login/create'>Criar Conta</Link>
      </div>
    </section>
    </>
  )
}
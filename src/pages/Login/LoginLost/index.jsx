import * as S from './main.module.css'
import { Input } from '../../../components/Input'
import { Button } from '../../../components/Button'
import { UseForm } from '../../../hooks/UseForm'
import { Api } from '../../../api/user'
import { Head } from '../../../components/Head'
import { useState } from 'react'
import { Error } from '../../../components/Error'


export function LoginLost() {
  const name = UseForm('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [dataResponse, setDataResponse] = useState(null)

  async function handlesubmit(e) {
    e.preventDefault()

    const reqBody = {
      login: name.value,
      url: window.location.href.replace('lost', 'reset')
    }

    if (name.isValid()) {
      try {
        setError(null)
        setLoading(true)

        const data = await Api.lostPassword(reqBody)
        console.log(data)
        setDataResponse(data)

      } catch (err) {
        setError(err.response.data.message)
      }
      finally {
        setLoading(false)
      }
    }

  }


  return (
    <>
      <Head title='Recuperar conta' description='Recuperar conta perdida' />
      <section>
        <h1 className='title'>Recuperar Conta</h1>
        {
          dataResponse ? (
            <p className={S.sendedEmail}>{dataResponse}</p>
          ) : (
            <form onSubmit={handlesubmit}>
              <Input label='user / email' name='email' type='text' {...name} />
              {
                loading ?
                  <Button disabled>Enviando...</Button> :
                  <Button>Enviar</Button>
              }
            </form>
          )
        }
        <Error error={error} />
      </section>
    </>
  )
}
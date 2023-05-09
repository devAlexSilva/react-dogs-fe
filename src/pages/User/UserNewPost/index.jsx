import * as S from './main.module.css'
import { Input } from '../../../components/Input'
import { UseForm } from '../../../hooks/UseForm'
import { Button } from '../../../components/Button'
import { useState } from 'react'
import { Head } from '../../../components/Head'
import { Api } from '../../../api/user'
import { Error } from '../../../components/Error'
import { useNavigate } from 'react-router-dom'

export function UserNewPost() {
  const name = UseForm('text')
  const weight = UseForm('number')
  const age = UseForm('number')
  const [img, setImg] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  async function handlePost(e) {
    e.preventDefault()
    const formData = new FormData()

    formData.append('nome', name.value)
    formData.append('peso', weight.value)
    formData.append('idade', age.value)
    formData.append('img', img.raw)

    try {
      setError(false)
      setLoading(true)
      await Api.newPhoto(formData)
      navigate('/user', {replace:true})

    } catch (error) {
      setError(error.response.data.message)

    } finally {
      setLoading(false)
    }
  }

  function handleImg({ target }) {
    setImg({
      raw: target.files[0],
      preview: URL.createObjectURL(target.files[0])
    })
  }

  return (
    <>
      <Head title='Nova Foto' description='publicar nova foto' />
      <section className={`${S.section} animeLeft`}>
        <form onSubmit={handlePost}>
          <Input type='text' name='nome' {...name} />
          <Input type='number' name='peso' {...weight} />
          <Input type='number' name='idade' {...age} />
          <input type='file' name='img' className={S.inputFile} id='img' onChange={handleImg} />
          {loading ? <Button disabled>Enviando...</Button> : <Button>enviar</Button>}
          {error && <Error error={error} />}
        </form>
        {
          img.preview && <div className={S.preview} style={{ backgroundImage: `url(${img.preview})` }}></div>
        }
      </section>
    </>
  )
}
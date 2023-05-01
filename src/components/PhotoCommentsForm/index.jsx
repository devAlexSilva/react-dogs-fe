import { useContext, useState } from 'react'
import * as S from './main.module.css'
import svg from '../../assets/enviar.svg'
import { Api } from '../../api/user'
import { Error } from '../Error'
import { UserContext } from '../../context/usercontext'


export function PhotoCommentsForm({ id, refreshComments }) {
  const [newComment, setComment] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { setModalIsOpen } = useContext(UserContext)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError(null)
      setLoading(true)
      await Api.createComment(id, newComment)
      setComment('')
      await refreshComments()

    } catch (error) {
      setError(error.response.data.message)
      setModalIsOpen(false)
    }
    finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id='newComment'
        name='newComment'
        value={newComment}
        placeholder='Say something'
        onChange={(e) => setComment(e.target.value)}
      />
      {
        loading ?
          (<button disabled>
            Enviando...
          </button>) :
          (<button>
            <img src={svg} alt="button to send" />
          </button>)
      }
      {error && <Error error={error} />}
    </form>
  )
}
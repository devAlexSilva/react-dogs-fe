import { useState } from 'react'
import { Api } from '../../api/user'
import * as S from './main.module.css'

export function PhotoDelete({ id }) {
  const [loading, setLoading] = useState(false)

  async function deletePhoto() {
    if (window.confirm(
      'tem certeza que deseja deletar a foto ?\n'
      + 'Essa ação não poderá ser revertida'
    )) {
      try {
        setLoading(true)
        await Api.deletePhotoById(id)
        window.location.reload()

      } catch (error) {
        console.log(error)
      }
      finally {
        setLoading(false)
      }

    }

  }
  return (
    <div className={S.button}>
      {
        loading ?
          (<button onClick={deletePhoto} disabled>deletando...</button>) :
          (<button onClick={deletePhoto}>deletar</button>)
      }
    </div>
  )
}
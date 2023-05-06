import { useParams } from 'react-router-dom'
import * as S from './main.module.css'
import { Api } from '../../api/user'
import { useEffect, useState } from 'react'
import { FeedModal } from '../../components/FeedModal'
import { PhotoContent } from '../../components/PhotoContent'


export function Photo() {
  const [photo, setPhoto] = useState(null)
  const [loading, setLoading] = useState(false)
  const { id } = useParams()

  async function getPhoto() {
    try {
      const data = await Api.getPhotoById(id)
      setPhoto(data)
      setLoading(true)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPhoto()
  }, [])

  return (
    <section className='container mainContainer'>
      {
        loading && <PhotoContent data={photo} singlePhoto={true} />
      }
    </section>
  )
}
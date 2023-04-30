import * as S from './main.module.css'
import { FeedPhotosItem } from '../FeedPhotosItem'
import { useEffect, useState } from 'react'
import { Api } from '../../api/user'
import { Error } from '../Error'
import { Loading } from '../Loading'


export function FeedPhotos() {
  const [photos, setPhotos] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  async function getPhotos() {
    try {
      setError(false)
      setLoading(true)
      const photos = await Api.getPhoto({ page: 1, total: 4, user: 0 })
      setPhotos(photos)

    } catch (err) {
      setError(error)

    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    (async () => {
      await getPhotos()
    })()

  }, [])

  return (
    <>
      {console.log(photos)}
      {loading && <Loading />}
      {error && <Error error={error} />}
      <ul className={`${S.feed} animeLeft`}>
        {photos?.map(photo => <FeedPhotosItem key={photo.id} photos={photo} />)}
      </ul>
    </>
  )
}
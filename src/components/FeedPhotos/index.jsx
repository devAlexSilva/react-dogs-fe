import * as S from './main.module.css'
import { FeedPhotosItem } from '../FeedPhotosItem'
import { useEffect, useState } from 'react'
import { Api } from '../../api/user'
import { Error } from '../Error'
import { Loading } from '../Loading'


export function FeedPhotos({ setPhotoInModal, user, page, setFiredInfinityScrollEvent }) {
  const [photos, setPhotos] = useState([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const totalPhotosPerPage = 3
  
  async function getPhotos() {
    try {
      setError(false)
      setLoading(true)
      const photos = await Api.getPhoto({ page: page, total: totalPhotosPerPage, user })
      
      setPhotos(photos)
      photos.length < totalPhotosPerPage && setFiredInfinityScrollEvent(false)

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

  }, [user])

  async function handleClickPhoto(id) {
    const photoClicked = await Api.getPhotoById(id)
    setPhotoInModal(photoClicked)
  }

  return (
    <>
      {loading && <Loading />}
      {error && <Error error={error} />}
      <ul className={`${S.feed} animeLeft`}>
        {photos?.map(photo => <FeedPhotosItem key={photo.id} photos={photo} handleClickPhoto={handleClickPhoto} />)}
      </ul>
    </>
  )
}
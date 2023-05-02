import { FeedModal } from '../FeedModal'
import { FeedPhotos } from '../FeedPhotos'
import { useState } from 'react'
import * as S from './main.module.css'


export function Feed({ user }) {
  const [photoInModal, setPhotoInModal] = useState(null)
  
  return (
    <>
      {photoInModal && <FeedModal photoInModal={photoInModal}/>}
      <FeedPhotos user={user} setPhotoInModal={setPhotoInModal}/>
    </>
  )
}
import { FeedModal } from '../FeedModal'
import { FeedPhotos } from '../FeedPhotos'
import * as S from './main.module.css'


export function Feed() {
  return (
    <>
      <FeedModal />
      <FeedPhotos />
    </>
  )
}
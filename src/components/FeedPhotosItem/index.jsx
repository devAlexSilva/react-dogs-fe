import { ImageSkeleton } from '../ImageSkeleton'
import * as S from './main.module.css'

export function FeedPhotosItem({ photos, handleClickPhoto }) {
  return (
    <>
      <li className={S.photo} onClick={() => handleClickPhoto(photos.id)}>
        <ImageSkeleton src={photos.src} alt=''/>
        <span className={S.views}>{photos.acessos}</span>
      </li>
    </>
  )
}
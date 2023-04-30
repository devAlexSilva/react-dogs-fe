import * as S from './main.module.css'

export function FeedPhotosItem({ photos }) {
  return (
    <>
      <li className={S.photo}>
        <img src={photos.src} alt="" />
        <span className={S.views}>{photos.acessos}</span>
      </li>
    </>
  )
}
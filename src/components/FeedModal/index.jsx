import * as S from './main.module.css'
import { PhotoContent } from '../PhotoContent'

export function FeedModal({ photoInModal }) {
  return (
    <div className={S.modal}>
      {console.log(photoInModal)}
      <PhotoContent data={photoInModal} />
    </div>
  )
}
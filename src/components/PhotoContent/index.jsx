import { Link } from 'react-router-dom'
import { PhotoComments } from '../PhotoComments'
import * as S from './main.module.css'

export function PhotoContent({ data }) {
  const { photo, comments } = data
  return (
    <div className={S.photo}>
    {console.log('data in PhotoContent:', data)}
      <div className={S.img}>
        <img src={data.photo.src} alt="" />
      </div>

      <div className={S.details}>
        <div>
          <p>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className={S.viewer}>{photo.acessos}</span>
          </p>
          <h1 className='title'>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={S.attributes}>
            <li>{photo.peso} kg</li>
            <li>{`${photo.idade} ${photo.idade > 1 ? 'anos' : 'ano'}`}</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  )
}
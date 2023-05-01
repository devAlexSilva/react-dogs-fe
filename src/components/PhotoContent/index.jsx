import { Link } from 'react-router-dom'
import { PhotoComments } from '../PhotoComments'
import * as S from './main.module.css'
import { PhotoDelete } from '../PhotoDelete'
import { ImageSkeleton } from '../ImageSkeleton'
import { useContext } from 'react'
import { UserContext } from '../../context/usercontext'


export function PhotoContent({ data }) {
  const { photo, comments } = data
  const { dataUser } = useContext(UserContext)

  return (
    <div className={S.photo}>
      {console.log('data in PhotoContent:', data)}
      <div className={S.img}>
       <ImageSkeleton src={data.photo.src} alt=''/>
      </div>

      <div className={S.details}>
        <div>
          {
            dataUser?.username === photo.author ?
              (<PhotoDelete id={photo.id}/>) :
              (
                <p className={S.author}>
                  <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
                  <span className={S.viewer}>{photo.acessos}</span>
                </p>
              )
          }
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
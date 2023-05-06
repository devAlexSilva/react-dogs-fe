import { useParams } from 'react-router-dom'
import * as S from './main.module.css'
import { Feed } from '../../components/Feed'

export function Profile() {
  const { author } = useParams()

  return(
    <section className='container mainContainer'>
      <h1 className='title'>{author}</h1>
      <Feed user={author}/>
    </section>
  )
}
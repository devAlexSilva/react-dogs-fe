import { useParams } from 'react-router-dom'
import * as S from './main.module.css'
import { Feed } from '../../components/Feed'
import { Head } from '../../components/Head'

export function Profile() {
  const { author } = useParams()
  console.log(author)

  return(
    <>
    <Head title={author} description='página de feed do usuário'/>
    <section className='container mainContainer'>
      <h1 className='title'>{author}</h1>
      <Feed user={author}/>
    </section>
    </>
  )
}
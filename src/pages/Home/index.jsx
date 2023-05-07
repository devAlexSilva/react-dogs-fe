import { Feed } from '../../components/Feed'
import { Head } from '../../components/Head'
import * as S from './main.module.css'

export function Home() {
  return (
    <>
      <Head title='Home' description='Página inicial do site Dogs contendo as fotos recentemente adicionadas' />
      <div className='container mainContainer'>
        <h1 className='title'>home</h1>
        <Feed />
      </div>
    </>
  )
}
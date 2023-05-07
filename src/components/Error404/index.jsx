import * as S from './main.module.css'
import { Head } from '../Head'


export function Error404() {
  return (
    <div>
      <Head title='404' description='Página não encontrada' />
      <h1 className='container mainContainer'>Desculpe! não encontramos o que busca</h1>
    </div>
  )
}
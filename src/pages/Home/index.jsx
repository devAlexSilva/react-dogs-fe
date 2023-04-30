import { Feed } from '../../components/Feed'
import * as S from './main.module.css'

export function Home() {
  return (
    <div className="container mainContainer">
    <h1 className='title'>home</h1>
    <Feed />
    </div>
  )
}
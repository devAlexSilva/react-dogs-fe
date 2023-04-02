import { Link } from 'react-router-dom'
import * as S from './main.module.css'

export function LoginHome() {
  return (
    <>
      login home
      <Link to='create'>criar</Link>
      <Link to='lost'>Esqueci minha senha</Link>
      <Link to='reset'>reset</Link>
    </>
  )
}
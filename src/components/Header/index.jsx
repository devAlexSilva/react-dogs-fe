import { Link } from 'react-router-dom'
import * as S from './main.module.css'

export function Header() {
  return (
    <div className={S.header}>
      <nav className='container'>
        <Link to='/'>Home</Link>
        <Link to='/login'>Logar</Link>
      </nav>
    </div>
  )
}
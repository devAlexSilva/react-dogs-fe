import { Link } from 'react-router-dom'
import * as S from './main.module.css'
import React from 'react'
import DogIcon from '../../assets/dogs.svg'

export function Header() {
  return (
    <div className={S.header}>
      <nav className={`${S.nav} container`}>
        <Link className={S.linkHome} to='/'>
          <img src={DogIcon} alt='icone com a logo de Dogs'/>
        </Link>
        <Link className={S.linkLogin} to='/login'>Logar</Link>
      </nav>
    </div>
  )
}
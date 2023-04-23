import { Link } from 'react-router-dom'
import * as S from './main.module.css'
import React from 'react'
import DogIcon from '../../assets/dogs.svg'
import { useContext } from 'react'
import { UserContext } from '../../context/usercontext'


export function Header() {
  const { dataUser, loading } = useContext(UserContext)

  return (
    <div className={S.header}>
      <nav className={`${S.nav} container`}>
        <Link className={S.linkHome} to='/'>
          <img src={DogIcon} alt='icone com a logo de Dogs' />
        </Link>
        {!dataUser && loading
          ? (<div>
            <Link className={S.linkLogin} to='/user'>{'...'}</Link>
          </div>)
          : (dataUser && !loading ? <div>
            <Link className={S.linkLogin} to='/user'>{dataUser.nome}</Link>
          </div> :
            <Link className={S.linkLogin} to='/login'>Logar</Link>)
        }
      </nav>
    </div>
  )
}
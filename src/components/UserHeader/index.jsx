import { NavLink, useLocation } from 'react-router-dom'
import * as S from './main.module.css'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/usercontext'
import addIcon from '../../assets/adicionar.svg'
import statisticIcon from '../../assets/estatisticas.svg'
import feedIcon from '../../assets/feed.svg'
import logoutIcon from '../../assets/sair.svg'


export function UserHeader() {
  const { Logout } = useContext(UserContext)
  const [mobile, serMobile] = useState(false)
  const [title, setTitle] = useState('')
  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case '/user/statistic':
        setTitle('Estatistica')
        break
      case '/user/new-post':
        setTitle('Nova Postagem')
        break
      default:
        setTitle('Minha Conta')
    }
  }, [location])


  return (
    <header className={S.header}>
      <h1 className='title'>{title}</h1>
      <nav className={S.nav}>
        <NavLink to='/user' end><img src={feedIcon} alt="" />{mobile && 'feed'}</NavLink>
        <NavLink to='statistic'><img src={statisticIcon} alt="" />{mobile && 'estatistica'}</NavLink>
        <NavLink to='new-post'><img src={addIcon} alt="" />{mobile && 'adicionar foto'}</NavLink>
        <button onClick={Logout}><img src={logoutIcon} alt="" />{mobile && 'sair'}</button>
      </nav>
    </header>
  )
}
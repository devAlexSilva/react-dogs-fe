import { NavLink } from 'react-router-dom'
import * as S from './main.module.css'
import { useContext, useState } from 'react'
import { UserContext } from '../../context/usercontext'
import addIcon from '../../assets/adicionar.svg'
import statisticIcon from '../../assets/estatisticas.svg'
import feedIcon from '../../assets/feed.svg'
import logoutIcon from '../../assets/sair.svg'


export function UserHeader() {
  const { Logout } = useContext(UserContext)
  const [mobile, serMobile] = useState(false)

  return (
    <header className={S.header}>
      <h1 className='title'>Title</h1>
      <nav className={S.nav}>
        <NavLink to='/user'><img src={feedIcon} alt="" />{mobile && 'feed'}</NavLink>
        <NavLink to='statistic'><img src={statisticIcon} alt="" />{mobile && 'estatistica'}</NavLink>
        <NavLink to='new-post'><img src={addIcon} alt="" />{mobile && 'adicionar foto'}</NavLink>
        <button onClick={Logout}><img src={logoutIcon} alt="" />{mobile && 'sair'}</button>
      </nav>
    </header>
  )
}
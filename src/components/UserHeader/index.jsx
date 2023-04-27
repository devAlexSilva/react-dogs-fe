import { NavLink, useLocation } from 'react-router-dom'
import * as S from './main.module.css'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../context/usercontext'
import addIcon from '../../assets/adicionar.svg'
import statisticIcon from '../../assets/estatisticas.svg'
import feedIcon from '../../assets/feed.svg'
import logoutIcon from '../../assets/sair.svg'
import { UseMedia } from '../../hooks/UseMedia'


export function UserHeader() {
  const { Logout } = useContext(UserContext)
  const [title, setTitle] = useState('')
  const [menuMobileIsOpen, setMenuMobileIsOpen] = useState(false)
  const location = useLocation()
  const mobile = UseMedia('max-width:40rem')

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

    setMenuMobileIsOpen(false)
  }, [location])


  return (
    <header className={S.header}>
      <h1 className='title'>{title}</h1>
      {mobile && (
        <button
          aria-label='Menu-mobile'
          className={`${S.mobileBtn} ${menuMobileIsOpen && S.mobileBtnActive}`}
          onClick={() => setMenuMobileIsOpen(!menuMobileIsOpen)}>
        </button>
      )}
      <nav className={`${mobile ? S.navMobile : S.nav} ${menuMobileIsOpen && mobile && S.menuMobileIsOpen}`}>
        <NavLink to='/user' end><img src={feedIcon} alt="" />{mobile && 'feed'}</NavLink>
        <NavLink to='statistic'><img src={statisticIcon} alt="" />{mobile && 'estatistica'}</NavLink>
        <NavLink to='new-post'><img src={addIcon} alt="" />{mobile && 'adicionar foto'}</NavLink>
        <button onClick={Logout}><img src={logoutIcon} alt="" />{mobile && 'sair'}</button>
      </nav>
    </header>
  )
}
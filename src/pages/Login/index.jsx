import { Routes, Route } from 'react-router-dom'
import { LoginCreate } from '../../components/LoginCreate'
import { LoginHome } from '../../components/LoginHome'
import { LoginLost } from '../../components/LoginLost'
import { LoginReset } from '../../components/LoginReset'
import * as S from './main.module.css'

export function Login() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginHome />}/>
        <Route path='create' element={<LoginCreate />}/>
        <Route path='lost' element={<LoginLost />}/>
        <Route path='reset' element={<LoginReset />}/>
      </Routes>
    </div>
  )
}
import { Routes, Route } from 'react-router-dom'
import { LoginCreate } from './LoginCreate'
import { LoginLost } from './LoginLost'
import { LoginReset } from './LoginReset'
import * as S from './main.module.css'
import { LoginForm } from './LoginForm'
import { Error404 } from '../../components/Error404'

export function Login() {
  return (
    <section className={S.login}>
      <div className={S.forms}>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='create' element={<LoginCreate />} />
          <Route path='lost' element={<LoginLost />} />
          <Route path='reset' element={<LoginReset />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </div  >
    </section>
  )
}
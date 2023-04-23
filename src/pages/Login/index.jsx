import { Routes, Route } from 'react-router-dom'
import { LoginCreate } from './LoginCreate'
import { LoginLost } from './LoginLost'
import { LoginReset } from './LoginReset'
import * as S from './main.module.css'
import { LoginForm } from './LoginForm'

export function Login() {
  return (
    <section className={S.login}>
      <div className={S.forms}>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='create' element={<LoginCreate />} />
          <Route path='lost' element={<LoginLost />} />
          <Route path='reset' element={<LoginReset />} />
        </Routes>
      </div  >
    </section>
  )
}
import { Routes, Route } from 'react-router-dom'
import * as S from './main.module.css'
import { Account } from './Account'

export function User() {
  return (
    <section>
      <div>
        <Routes>
          <Route path='/' element={<Account />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </div>
    </section>
  )
}
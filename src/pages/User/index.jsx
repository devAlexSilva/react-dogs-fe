import { Routes, Route } from 'react-router-dom'
import * as S from './main.module.css'
import { UserFeed } from './UserFeed'
import { UserNewPost } from './UserNewPost'
import { UserStatistic } from './UserStatistc'
import { UserHeader } from '../../components/UserHeader'

export function User() {
  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<UserFeed />}>
          <Route path='new-post' element={<UserNewPost />} />
          <Route path='statistic' element={<UserStatistic />} />
        </Route>
      </Routes>
    </section>
  )
}
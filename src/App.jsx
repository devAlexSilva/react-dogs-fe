import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'
import { Login } from './pages/Login'
import { Photo } from './pages/Photo'
import './App.css'
import { UserStorage } from './context/usercontext'
import { User } from './pages/User'
import { Profile } from './pages/Profile'

export function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login/*' element={<Login />} />
          <Route path='user/*' element={<User />} />
          <Route path='photo/:id' element={<Photo />} />
          <Route path='profile/:author' element={<Profile />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  )

}


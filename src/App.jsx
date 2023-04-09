import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Footer } from './components/Footer'
import { Login } from './pages/Login'
import './App.css'
import { UserStorage } from './context/usercontext'

export function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login/*' element={<Login />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  )

}



import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NoPage from './pages/NoPage'

function App() {
  return (
    <>
      <BrowserRouter basename='/Portfolio'>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

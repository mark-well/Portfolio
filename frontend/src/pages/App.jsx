
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../App.css'
import Home from './Home'
import About from './About'
import NoPage from './NoPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

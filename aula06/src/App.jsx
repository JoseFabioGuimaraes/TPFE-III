import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicial from './pages/Inicial'
import Dpolgpd from './pages/Dpolgpd'
import Afaculdade from './pages/Afaculdade'
import Noticias from './pages/Noticias'
import Navbar from './components/Navbar'

const App = () => {
  return (
    
  <>
    <BrowserRouter>
      <img src='uniesp.jpg' alt='Logo da Uniesp' />
      <Navbar />
      <br></br>
      <Routes>
        <Route path='/' element={<Inicial />}/>
        <Route path='/dpo-lgpd' element={<Dpolgpd />}/>
        <Route path='a-faculdade' element={<Afaculdade />}/>
        <Route path='noticias' element={<Noticias />}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicial from './pages/Inicial'
import Dpolgpd from './pages/Dpolgpd'
import Afaculdade from './pages/Afaculdade'
import VisualizaNoticia from './pages/VisualizaNoticia'
import Navbar from './components/Navbar'
import NoticiasAxios from './pages/NoticiasAxios'

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
        <Route path='/a-faculdade' element={<Afaculdade />}/>
        <Route path='/noticias' element={<NoticiasAxios/>}/>
        <Route path='/visualiza-noticia/:id' element={<VisualizaNoticia />}/>
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
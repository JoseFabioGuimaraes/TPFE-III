import React from 'react'
import Exercicio1 from './components/Exercicio1'
import Exercicio2 from './components/Exercicio2'
import Campanha from './components/Campanha'

const App = () => {
  return (
    <div>
      <Exercicio1/>
      <Exercicio2/> 
      <Campanha mes= "setembro"/>
    </div>
      
  )
}

export default App
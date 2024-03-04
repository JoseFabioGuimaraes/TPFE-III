import React from 'react'
import Exercicio1Adicao from './components/Exercicio1Adicao'
import Exercicio1Subtracao from './components/Exercicio1Subtracao'
import Exercicio1Multiplicao from './components/Exercicio1Multiplicao'
import Exercicio1Divisao from './components/Exercicio1Divisao'

const App = () => {
  return (
    <div>
    
      <Exercicio1Adicao num1={2} num2={3}/>
      <Exercicio1Subtracao num1={2} num2={3}/>
      <Exercicio1Multiplicao num1={2} num2={3}/>
      <Exercicio1Divisao num1={4} num2={2}/>
    
    </div>
  )
}

export default App
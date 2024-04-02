import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import Aluno from './components/Aluno'

const App = () => {
  return (
    <div>
      <EstouConseguindoAprenderReact estouConseguindo={false}/> 

      {
        [
        {nome:"Jose", email: "jose@gmail.com", curso: "SI", media: 5}, 
        {nome:"Maria", email: "maria@gmail.com", curso: "SI",media: 7},
        {nome:"Joao", email: "joao@gmail.com", curso: "SI",media:8}
      ].map(
        (aluno)=> <Aluno nome={aluno.nome} curso={aluno.curso} email={aluno.email} media={aluno.media}/>
        ) 
      }

    </div>
  )
}

export default App
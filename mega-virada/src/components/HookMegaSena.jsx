import React, { useState } from 'react'

const HookMegaSena = () => {
    const[numSorteado, setNumSorteado] = useState(null);
    const[numSorteados, setNumSorteados] = useState([]);

    function sortearNumero(){
        if(numSorteados.length == 6){
            alert("Já temos os números sorteados!");
            return;
        }
        var numAleatorio = Math.floor(Math.random()*60)+1;

        setNumSorteado(numAleatorio);
        setNumSorteados([...numSorteados,numAleatorio]);
    }
    function mostraNumSorteados(){
      if(numSorteados.length > 0){
        return (
          <h2>Números sorteados anteriormente: {numSorteados.join(', ')}</h2> 
          ); 
      }
    }

    

  return (
    <div>
        <h1>Sorteador da Mega sena</h1>
        <button onClick={sortearNumero}>Sortear Número</button>
        <h2>Numeros sorteado: {numSorteado != null ? numSorteado:"Nenhum numero foi sorteado"}</h2>
        {mostraNumSorteados()}
    </div>
    
  )
}

export default HookMegaSena
import React, { useState } from 'react'

const HookContador = () => {
    
    const [contador, setContador] = useState(1);
    function incrementarContador(){
        setContador(contador + 1);
    }
    return (
    <div>
        <h1>Contador com UseState</h1>
        <button onClick={incrementarContador}>Incrementar contador</button>
        <h2> O contador está em {contador}</h2>
    </div>
  )
}

export default HookContador
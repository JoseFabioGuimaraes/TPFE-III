import React from 'react'

const RenderizandoComFuncoes = () => {
    function escolhaDeRenderizacao(oQueRenderizar){
        if(oQueRenderizar == "h1"){
            return <h1>Texto em H1</h1>
        }
        else{
            return <h2>Texto em H2</h2>
        }
    }

  return (
    <div>
        {escolhaDeRenderizacao("h1")}
        {escolhaDeRenderizacao("h2")}
    </div>
  )
}

export default RenderizandoComFuncoes
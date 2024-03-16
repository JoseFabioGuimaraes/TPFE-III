import React from 'react'
import RenderizandoComFuncoes from './components/RenderizandoComFuncoes'
import TrabalhandoComImagens from './components/TrabalhandoComImagens'
import HookContador from './components/HookContador'

const App = () => {
  return (
    <div>
      <RenderizandoComFuncoes/>
      <TrabalhandoComImagens/>
      <HookContador></HookContador>
    </div>
  )
}

export default App
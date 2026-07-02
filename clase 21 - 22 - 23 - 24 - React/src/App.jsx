import React from 'react'

import Contador from './Components/Contador/Contador'
import Modal from './Components/Modal/Modal'

//Las funciones que devuelven HTML se llaman componentes
function App() {

  /* 
    Crear un componente llamado Modal
    El componente tendra un estado interno llamado openModal
    El estado sera booleano e indicara si se renderiza o no un
      <div>
        <h1>Soy un modal</h1>
        <button>Cerrar</button>
      </div>
    Si el modal esta cerrado debe renderizarse
      <button>Abrir modal</button>
    El modal debe funcionar
  */
  return (
    <div>

      <Contador/>
      <Modal/>
    </div>
  )
}



export default App
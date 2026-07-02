import React, { useState } from 'react'

import Contador from './Components/Contador/Contador'
import Modal from './Components/Modal/Modal'
import useModal from './hooks/useModal'

//Las funciones que devuelven HTML se llaman componentes
function App() {

  const {
    openModal, 
    onOpen, 
    onClose
  } = useModal()

  return (
    <div>

      <Contador/>
      <Modal  
        openModal={openModal}
        onOpen={onOpen}
        onClose={onClose}
      >
        <div>
          <h1>Aviso de falta de pago</h1>
          <p>Asegurate de estar al dia en tus cuentas</p>
        </div>
      </Modal>

      <button onClick={onOpen} onMouseLeave={onOpen}>Boton random</button>



      {/* <Modal  >
        <div>
          <h1>Ganaste un iphone 17</h1>
          <p>Haz click <a href='https://estafa-legal.com'>Aqui</a> para reclamarlo</p>
        </div>
      </Modal> */}
    </div>
  )
}



export default App
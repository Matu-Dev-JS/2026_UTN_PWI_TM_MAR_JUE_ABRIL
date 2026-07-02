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
  } = useModal(true)


  const messages = [
    {
      id: 1,
      sendByMe: false,
      content: "hola!"
    },
    {
      id: 2,
      sendByMe: true,
      content: "Todo bien!"
    },
    {
      id: 3,
      sendByMe: false,
      content: "Que tal?"
    },
    {
      id: 4,
      sendByMe: true,
      content: "Todo bien!"
    }
  ]

  const anotaciones = [
    {
      id: 1,
      title: "Cosas que hacer cuando me aburro",
      content: "Practicar JS... ETC"
    },
    {
      id: 2,
      title: "Si salimos campeones...",
      content: "Aprendo PHP"
    }
  ]

  /* 
  Renderizar en pantalla la lista de anotaciones
  cada anotacion debe verse: 
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <button>Eliminar</button>
      <button>Editar</button>
      <button>Ver detalle</button>
      <hr/>
    </div>
  */
  return (
    <div>
      <h1>Mensajes:</h1>
      {
        messages.map(
          (message) => {
            return <div>
              <h2>{message.sendByMe ? 'Tu' : "Pepe"}</h2>
              <p>{message.content}</p>
              <hr/>
            </div>
          }
        )
      }





      {/* <Contador/> */}
     {/*  <Modal  
        openModal={openModal}
        onOpen={onOpen}
        onClose={onClose}
      >
        <div>
          <h1>Aviso de falta de pago</h1>
          <p>Asegurate de estar al dia en tus cuentas</p>
        </div>
      </Modal> */}

     {/*  <button onClick={onOpen} onMouseLeave={onOpen}>Boton random</button> */}



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
import React, { useState } from 'react'

import Contador from './Components/Contador/Contador'
import Modal from './Components/Modal/Modal'
import useModal from './hooks/useModal'
import Messages from './Components/Messages/Messages'

//Las funciones que devuelven HTML se llaman componentes
function App() {

  const {
    openModal, 
    onOpen, 
    onClose
  } = useModal(true)

  /*
  1) 
  Crear la funcion eliminarTodosLosMensajes()
  Crear un boton que se llame eliminar historial que conecte con la funcion eliminar todos los mensajes

  2)
  Crear la funcion eliminarMensajePorId(message_id) que te permita eliminar del estado de mensajes un mensaje por su identificador
  Crear el boton eliminar sobre cada mensaje
  Conectar el evento click con el boton eliminar mensaje 
  EJEMPLO: <button onClick={() => eliminarMensajePorId(message.id)}>Eliminar</button>

  */


  const messages_server = [
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


  
  
  
  
  return (
    <div>
      
      <Messages messages_server={messages_server} />

    </div>
  )
}



export default App
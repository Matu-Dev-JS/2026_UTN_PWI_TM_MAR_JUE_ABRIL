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

  /* 
  Crear un estado de mensajes con la lista de mensajes actual
  Renderizar el estado de mensajes

  Crear una funcion llamada crearMensaje(content, isMe)
  Esta funcion debe agregar el mensaje al estado de mensajes

  Crear un boton (al final de todos los mensajes/ o arriba) que sea <button>Crear mensaje de prueba</button> que al dar click nos active la funcion crearMensaje('Ves el partido hoy?', true) (o cualquier otro contenido)
  */



   
  return (
    <div>
      <h1>Mensajes:</h1>
      {
        messages.map(
          (message) => {
            return <div key={message.id}>
              <h2>{message.sendByMe ? 'Tu' : "Pepe"}</h2>
              <p>{message.content}</p>
              <hr/>
            </div>
          }
        )
      }

      

     

    </div>
  )
}



export default App
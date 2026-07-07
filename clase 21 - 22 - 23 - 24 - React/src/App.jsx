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

  /* 
  Crear un estado de mensajes con la lista de mensajes actual
  Renderizar el estado de mensajes

  Crear una funcion llamada crearMensaje(content, isMe)
  Esta funcion debe agregar el mensaje al estado de mensajes

  Crear un boton (al final de todos los mensajes/ o arriba) que sea <button>Crear mensaje de prueba</button> que al dar click nos active la funcion crearMensaje('Ves el partido hoy?', true) (o cualquier otro contenido)
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

  const [messages, setMessages] = useState(messages_server)

  
  function crearMensaje (contenido, fuiYo){

    const nuevo_id = messages.length + 1
    const nuevo_mensaje = {
      content: contenido,
      sendByMe: fuiYo,
      id: nuevo_id
    }

    const messages_cloned = [...messages]
    messages_cloned.push(nuevo_mensaje)

    setMessages(messages_cloned)
  }

  function handleCreateTestMessage (){
    crearMensaje('Vas a ver el partido', true)
  }

  
  //const numeros = [1, 2, 3]
  
  //const divs = numeros.map((numero) => {return <div>{numero}</div>})
  //[<div>1</div>, <div>2</div>, <div>3</div>]
  
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
      <button onClick={handleCreateTestMessage}>Crear mensaje prueba</button>

     

    </div>
  )
}



export default App
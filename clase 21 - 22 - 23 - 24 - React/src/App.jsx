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
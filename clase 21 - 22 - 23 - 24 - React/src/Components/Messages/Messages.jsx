import { useState } from "react"

function Messages({ messages_server }) {
    const [messages, setMessages] = useState(messages_server)

    function crearMensaje(contenido, fuiYo) {

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

    function handleCreateTestMessage() {
        crearMensaje('Vas a ver el partido', true)
    }
    return (
        <div>
            {
                messages.map(
                    (message) => {
                        return <div key={message.id}>
                            <h2>{message.sendByMe ? 'Tu' : "Pepe"}</h2>
                            <p>{message.content}</p>
                            <hr />
                        </div>
                    }
                )
            }
        </div>
    )
}

export default Messages
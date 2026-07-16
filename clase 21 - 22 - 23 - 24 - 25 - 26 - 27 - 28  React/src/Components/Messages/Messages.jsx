import { useState } from "react"
import useMessages from "../../hooks/useMessages"
import MessagesList from "./MessagesList"

function Messages({ messages_server, contact_name}) {

    const {
        messages,
        createMessage,
        handleCreateTestMessage,
        deleteAllMessages,
        deleteMessageById,
        handleCreateMessage
    } = useMessages({ messages_server })


    return (
        <div>
            <button onClick={deleteAllMessages}>Eliminar historial</button>
            <button onClick={handleCreateTestMessage}>Crear mensaje prueba</button>
            <h1>Mensajes:</h1>
            <MessagesList messages={messages} deleteMessageById={deleteMessageById} contact_name={contact_name} />


            <form onSubmit={handleCreateMessage}>
                <label htmlFor="message">Envia un mensaje:</label>
                <textarea id="message" name="message" />
                <button type="submit">Enviar</button>
            </form>

        </div>
    )
}

export default Messages




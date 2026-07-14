import { useState } from "react"

function useMessages ({messages_server}){
    const [messages, setMessages] = useState(messages_server)

    function createMessage(content, isMe) {

        const new_id = messages.length + 1
        const new_message = {
            content: content,
            sendByMe: isMe,
            id: new_id
        }

        const messages_cloned = [...messages]
        messages_cloned.push(new_message)

        setMessages(messages_cloned)
    }

    function handleCreateTestMessage() {
        createMessage('Vas a ver el partido', true)
    }

    function deleteAllMessages() {
        setMessages([])
    }

    function deleteMessageById(message_id) {

        /* .filter()
        - es un metodo avanzado que nos permite filtrar un array
        - recorre la lista y por cada elemento ejecuta la callback (funcion), si la funcion devuelve verdadero el elemento sera sumado a una lista de resultado sino se seguira al siguiente.
        - Es un metodo no mutable.
        */

        const filtered_messages = messages.filter(
            (message) => {
                return (message.id !== message_id)
            }
        )

        setMessages(filtered_messages)
    }

     //El primer parametro de una funcion asociada a un evento SIEMPRE sera event
    //El event es un objeto con metadatos del evento en si mismo
    function handleCreateMessage (event){
        event.preventDefault() //El evento submit por defecto recarga la pagina

        //event.target = Me trae el elemento que ACTIVO el evento
        const form = event.target

        const message_field = form.message
        createMessage(message_field.value, true)
    }

    return {
        messages,
        createMessage,
        handleCreateTestMessage,
        deleteAllMessages,
        deleteMessageById,
        handleCreateMessage
    }
}

export default useMessages
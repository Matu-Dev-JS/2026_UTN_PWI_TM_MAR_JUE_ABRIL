function MessagesList({ messages, deleteMessageById, contact_name }) {
    if(messages.length === 0){
        return (
            <h2>Aun no hay historial de mensajes</h2>
        )
    }
    return messages.map(
        (message) => {

            return <div key={message.id}>
                <h2>{message.sendByMe ? 'Tu' : contact_name}</h2>
                <p>{message.content}</p>
                <button onClick={() => { deleteMessageById(message.id) }}>Eliminar</button>
                <hr />
            </div>
        }
    )
}

export default MessagesList
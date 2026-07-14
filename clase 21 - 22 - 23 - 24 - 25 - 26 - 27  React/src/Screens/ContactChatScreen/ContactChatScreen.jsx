import React from 'react'
import { Link, useParams } from 'react-router'
import WhatsappSidebar from '../../Components/WhatsappSidebar/WhatsappSidebar'
import Messages from '../../Components/Messages/Messages'

const ContactChatScreen = () => {

    const contacts = [
        {
            id: 1,
            name: "Juan Pérez",
            lastMessage: "Nos vemos mañana!",
            messages: [
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
        },
        {
            id: 2,
            name: "María Gómez",
            lastMessage: "Dale, gracias 🙏",
            messages: [
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
        },
        {
            id: 3,
            name: "Carlos Ruiz",
            lastMessage: "Te mando el archivo",
            messages: [
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
        },
        {
            id: 4,
            name: "Lucía Fernández",
            lastMessage: "Jajaja sí",
            messages: [
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
        },
    ]
    const { contact_id } = useParams()
    const contact_found = contacts.find((contact) => contact.id === Number(contact_id))

    if (!contact_found) {
        return (
            <div>
                <WhatsappSidebar />
                <h2>Contacto no encontrado</h2>
                <Link to="/">Volver a inicio</Link>
            </div>
        )
    }
    return (
        <div>
            <WhatsappSidebar />
            <h1>{contact_found.name}</h1>
            <Messages messages_server={contact_found.messages} contact_name={contact_found.name}/>
        </div>
    )
}

export default ContactChatScreen
import React from 'react'
import { Link } from 'react-router'

const WhatsappSidebar = () => {
    const contacts = [
        {
            id: 1,
            name: "Juan Pérez",
            lastMessage: "Nos vemos mañana!"
        },
        {
            id: 2,
            name: "María Gómez",
            lastMessage: "Dale, gracias 🙏"
        },
        {
            id: 3,
            name: "Carlos Ruiz",
            lastMessage: "Te mando el archivo"
        },
        {
            id: 4,
            name: "Lucía Fernández",
            lastMessage: "Jajaja sí"
        },
    ]
    return (
        <aside>
            <h2>Whatsapp</h2>
            <div>
                {
                    contacts.map(
                        (contact) => {
                            return (
                                <Link to={`/contact/${contact.id}`} key={contact.id}>
                                    <h3>{contact.name}</h3>
                                    <p>{contact.lastMessage}</p>
                                    <hr />
                                </Link>
                            )
                        }
                    )
                }
            </div>
        </aside>
    )
}

export default WhatsappSidebar
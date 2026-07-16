import { createContext } from "react";
import { Outlet } from "react-router";

const ContactContext = createContext()

const server_contacts = [
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

function ContactContextProvider (){
    const [contacts, setContacts] = useState(server_contacts)
    
    const provider_values = {
        contacts: contacts
    }
    return (
        <ContactContext.Provider value={provider_values}>
            {/* 
            el outlet hace referencia a las subrutas
            */}
            <Outlet/>
        </ContactContext.Provider>
    )
}


export {ContactContext, ContactContextProvider}
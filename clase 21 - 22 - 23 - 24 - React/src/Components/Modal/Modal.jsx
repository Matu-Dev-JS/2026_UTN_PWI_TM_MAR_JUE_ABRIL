import { useState } from "react"
import './modal.css'

function Modal() {
    const [openModal, setOpenModal] = useState(false)

    function open(){
        setOpenModal(true)
    }

    function close(){
        setOpenModal(false)
    }
    
    return (
        <div>
            {openModal 
                ? <div className="modal-overlay">
                    <div className="modal">
                        <h1>Soy un modal</h1>
                        <button onClick={close}> Cerrar</button>
                    </div>
                </div>
                : <div>
                    <button onClick={open}> Abrir modal</button>
                </div>
            }
        </div>
    )
}

export default Modal
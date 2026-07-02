import { useState } from "react"

/* 
useModal es un cu
*/

function useModal() {
    const [openModal, setOpenModal] = useState(false)

    function onOpen() {
        setOpenModal(true)
    }

    function onClose() {
        setOpenModal(false)
    }

    return {
        openModal: openModal,
        onOpen: onOpen,
        onClose: onClose
    }
}

export default useModal
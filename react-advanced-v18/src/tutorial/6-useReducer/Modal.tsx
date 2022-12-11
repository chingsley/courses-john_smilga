import React, { useEffect } from 'react'

interface ModalProps {
  closeModal: () => void;
  modalContent: string;
}

const Modal: React.FC<ModalProps> = (props) => {
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      props.closeModal();
    }, 3000);

    return () => {
      clearTimeout(timeoutId)
    }
  })
  return (
    <div>
      <p>{props.modalContent}</p>
    </div>
  )
}

export default Modal
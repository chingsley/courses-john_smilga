import React, { useEffect } from 'react';

interface ModalProps {
  closeResultModal: () => void;
  modalContent: string;
}

const Modal: React.FC<ModalProps> = (props) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      props.closeResultModal();
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  });
  return (
    <div>
      <p>{props.modalContent}</p>
    </div>
  );
};

export default Modal;

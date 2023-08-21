import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa';

const Modal = () => {
  const { isResultModalOpen, closeResultModal } = useGlobalContext()!;
  return (
    <div
      className={`${
        isResultModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={closeResultModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;

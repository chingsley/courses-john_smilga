import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { clearCart } from '../features/cart/cartSlice';
import { closeModal } from '../features/modal/modalSlice';

const Modal = () => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>remove all items from your shopping cart?</h4>
        <div className='btn-container'>
          <button
            type='button'
            className='btn confirm-btn'
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal(null));
            }}
          >
            confirm
          </button>
          <button
            type='button'
            className='btn clear-btn'
            onClick={() => {
              dispatch(closeModal(null));
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;

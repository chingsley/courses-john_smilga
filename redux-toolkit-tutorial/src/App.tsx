import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './app/store';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';

function App() {
  const dispatch: AppDispatch = useDispatch();
  const { cartItems, isLoading } = useSelector((state: RootState) => state.cart);
  const { isOpen } = useSelector((state: RootState) => state.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems('random'));
  }, []);
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './app/store';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import Navbar from './components/Navbar';

function App() {
  const { isOpen } = useSelector((store: RootState) => store.modal);
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;

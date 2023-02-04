import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Home = () => {
  const { openSidebar, showResult } = useGlobalContext()!;
  return (
    <main>
      <button onClick={openSidebar} className='sidebar-toggle'>
        <FaBars />
      </button>
      <button onClick={showResult} className='btn'>
        show modal
      </button>
    </main>
  );
};

export default Home;

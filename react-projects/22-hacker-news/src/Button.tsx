import { useGlobalContext } from './context';
import { EnumPageTransition } from './state/actions';

const Button = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext()!;
  return (
    <div className='btn-container'>
      <button
        disabled={isLoading}
        onClick={() => handlePage(EnumPageTransition.Dec)}
      >
        prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button
        disabled={isLoading}
        onClick={() => handlePage(EnumPageTransition.Inc)}
      >
        next
      </button>
    </div>
  );
};

export default Button;

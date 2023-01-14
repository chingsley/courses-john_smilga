import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { changeSearchItem } = useGlobalContext()!;
  const searchValue = React.useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!searchValue.current) return;
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    if (!searchValue.current) return;
    changeSearchItem(searchValue.current.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className='section search'>
      <form onSubmit={handleSubmit} className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='name'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;

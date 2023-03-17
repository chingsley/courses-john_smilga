import styled from 'styled-components';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFiltersContext } from '../context/filterContext';
import { SortTypes, ViewTypes } from '../types/filters';

const Sort = () => {
  const { filteredProducts, viewType, setViewType, sort, updateSort } =
    useFiltersContext()!;

  return (
    <Wrapper>
      <div className='btn-container'>
        <button
          onClick={() => setViewType(ViewTypes.Grid)}
          className={`${viewType === ViewTypes.Grid ? 'active' : null}`}
        >
          <BsFillGridFill />
        </button>
        <button
          onClick={() => setViewType(ViewTypes.List)}
          className={`${viewType === ViewTypes.List ? 'active' : null}`}
        >
          <BsList />
        </button>
      </div>
      <p>{filteredProducts.length} products found</p>
      <br />
      <form>
        <label htmlFor='sort'>sort by</label>
        <select
          name='sort'
          id='sort'
          value={sort}
          onChange={updateSort}
          className='sort-input'
        >
          <option value={SortTypes.PriceAsc}>price (lowest)</option>
          <option value={SortTypes.PriceDesc}>price (highest)</option>
          <option value={SortTypes.NameAsc}>name (a - z)</option>
          <option value={SortTypes.NameDesc}>name (z - a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    .btn-container {
      width: 50px;
    }
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    text-transform: capitalize;
    margin-bottom: 0;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
    button {
      background: transparent;
      border: 1px solid var(--clr-black);
      color: var(--clr-black);
      width: 1.5rem;
      border-radius: var(--radius);
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      svg {
        font-size: 1rem;
      }
    }
    .active {
      background: var(--clr-black);
      color: var(--clr-white);
    }
  }

  .sort-input {
    border-color: transparent;
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
  }
  label {
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Sort;

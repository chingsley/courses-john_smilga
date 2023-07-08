import { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormRow, FormRowSelect } from '.';
import { SearchContainerWrapper } from '../assets/wrappers';
import { handleFilterChange, clearFilters } from '../features/allJobs/allJobsSlice';
import { AppDispatch, RootState } from '../app/store';

const SearchContainer = () => {
  const [localSearch, setLocalSearch] = useState('');
  const {
    isLoading,
    filterState: {
      search, searchStatus, searchType, sort, sortOptions
    },
  } = useSelector((store: RootState) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store: RootState) => store.job);
  const dispatch: AppDispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(handleFilterChange({ name: e.target.name, value: e.target.value }));
  };

  const debounce = () => {
    let timeoutID: NodeJS.Timeout;
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        dispatch(handleFilterChange({ name: e.target.name, value: e.target.value }));
      }, 1000);
    };
  };

  const optimizedDebouce = useMemo(() => debounce(), []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLocalSearch('');
    dispatch(clearFilters());
  };

  return (
    <SearchContainerWrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Search form</h4>
        <div className="form-center">
          <FormRow
            type='text'
            name='search'
            value={localSearch}
            handleChange={optimizedDebouce}
          />
          <FormRowSelect
            labelText='status'
            name='searchStatus'
            value={searchStatus}
            handleChange={handleSearch}
            list={['all', ...statusOptions]}
          />
          <FormRowSelect
            labelText='type'
            name='searchType'
            value={searchType}
            handleChange={handleSearch}
            list={['all', ...jobTypeOptions]}
          />
          <FormRowSelect
            name='sort'
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className='btn btn-block btn-danger'
            disabled={isLoading}
          >
            clear filters
          </button>
        </div>
      </form>
    </SearchContainerWrapper>
  );
};

export default SearchContainer;

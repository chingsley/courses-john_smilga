// import React, { useEffect, useContext, useReducer } from 'react';
import React, { useContext, useEffect, useReducer } from 'react';
import filtersReducer from '../reducers/filtersReducer';
import ActionTypes from '../actions/actionTypes';
import { useProductsContext } from './productContext';
import { IFiltersState, SortTypes, ViewTypes } from '../types/filters';
import businessConfig from '../config/business.config';

const initialState: IFiltersState = {
  filteredProducts: [],
  allProducts: [],
  viewType: businessConfig.defaultViewType,
  sort: businessConfig.defaultSortType,
  filters: {
    text: '',
    company: 'all',
    category: 'all',
    color: 'all',
    minPrice: 0,
    maxPrice: 0,
    price: 0,
    shipping: false,
  },
};

interface IFiltersContext extends IFiltersState {
  setViewType: (viewType: ViewTypes) => void;
  updateSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  // updateFilters: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateFilters: (name: string, value: string | number | boolean) => void;
  clearFilters: () => void;
}

const FilterContext = React.createContext<IFiltersContext | null>(null);

export const FiltersProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { products } = useProductsContext()!;
  const [state, dispatch] = useReducer(filtersReducer, initialState);

  useEffect(() => {
    dispatch({ type: ActionTypes.LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: ActionTypes.FILTER_PRODUCTS });
    dispatch({ type: ActionTypes.SORT_PRODUCTS });
  }, [state.sort, state.filters]);

  const setViewType = (viewType: ViewTypes) => {
    dispatch({ type: ActionTypes.SET_VIEW_TYPE, payload: viewType });
  };
  const updateSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as SortTypes;
    dispatch({ type: ActionTypes.UPDATE_SORT, payload: value });
  };

  // const updateFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   let name = (e.target as HTMLInputElement).name;
  //   let value = (e.target as HTMLInputElement).value;
  //   const dict: { [key: string]: any; } = {
  //     category: (e.target as HTMLInputElement).textContent,
  //     color: (e.target as HTMLInputElement).dataset.color,
  //     price: Number(value),
  //     shipping: (e.target as HTMLInputElement).checked,
  //   };
  //   if (Object.keys(dict).includes(name)) {
  //     value = dict[name];
  //   }
  //   dispatch({ type: ActionTypes.UPDATE_FILTERS, payload: { name, value } });
  // };

  const updateFilters = (name: string, value: string | number | boolean) => {
    dispatch({ type: ActionTypes.UPDATE_FILTERS, payload: { name, value } });
  };


  const clearFilters = () => {
    dispatch({ type: ActionTypes.CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setViewType,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFiltersContext = () => {
  return useContext(FilterContext);
};

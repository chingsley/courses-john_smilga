import { filterProducts, sortProducts } from './helpers';
import { IFiltersState } from './../types/filters';
import ActionTypes from "../actions/actionTypes";
import { FiltersAction } from '../actions/filterActions';

const filtersReducer = (state: IFiltersState, action: FiltersAction) => {
  switch (action.type) {
    case ActionTypes.LOAD_PRODUCTS: {
      const prices = action.payload.map(product => product.price);
      const maxPrice = Math.max(...prices);
      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
        filters: { ...state.filters, maxPrice, price: maxPrice }
      };
    }
    case ActionTypes.SET_VIEW_TYPE: {
      return { ...state, viewType: action.payload };
    }
    case ActionTypes.UPDATE_SORT: {
      return { ...state, sort: action.payload };
    }
    case ActionTypes.SORT_PRODUCTS: {
      const { sort, filteredProducts } = state;
      return { ...state, filteredProducts: sortProducts(sort, filteredProducts) };
    }
    case ActionTypes.UPDATE_FILTERS: {
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value
        },
      };
    }
    case ActionTypes.FILTER_PRODUCTS: {
      return {
        ...state,
        filteredProducts: filterProducts(state.filters, state.allProducts),
      };
    }
    case ActionTypes.CLEAR_FILTERS: {
      return {
        ...state,
        filters: {
          ...state.filters,
          text: '',
          company: 'all',
          category: 'all',
          color: 'all',
          price: state.filters.maxPrice,
          shipping: false
        }
      };
    }
    default: {
      console.error(`No Matching "${(action as FiltersAction).type}" - action type`);
      return state;
    }
  }
};

export default filtersReducer;
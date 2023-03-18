import { SortTypes, ViewTypes } from './../types/filters';
import { IProduct, IProductDetail } from '../types/products';
import ActionTypes from './actionTypes';

interface loadProducts {
  type: ActionTypes.LOAD_PRODUCTS,
  payload: IProduct[];
}
interface filterProducts {
  type: ActionTypes.FILTER_PRODUCTS,
}
interface sortProducts {
  type: ActionTypes.SORT_PRODUCTS,
}
interface setViewType {
  type: ActionTypes.SET_VIEW_TYPE,
  payload: ViewTypes;
}
interface updateSort {
  type: ActionTypes.UPDATE_SORT,
  payload: SortTypes;
}
interface updateFilter {
  type: ActionTypes.UPDATE_FILTERS,
  payload: {
    name: string;
    value: string | number | boolean;
  };
}
interface clearFilters {
  type: ActionTypes.CLEAR_FILTERS,
}

export type FiltersAction =
  | loadProducts
  | filterProducts
  | sortProducts
  | setViewType
  | updateSort
  | updateFilter
  | clearFilters;
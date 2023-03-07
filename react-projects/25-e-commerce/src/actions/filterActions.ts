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
interface setGridView {
  type: ActionTypes.SET_GRIDVIEW,
}
interface setListView {
  type: ActionTypes.SET_LISTVIEW,
}
interface updateSort {
  type: ActionTypes.UPDATE_SORT,
  payload: string;
}
interface updateFilter {
  type: ActionTypes.UPDATE_FILTERS,
  payload: {
    name: string;
    value: string;
  };
}
interface clearFilters {
  type: ActionTypes.CLEAR_FILTERS,
}

export type FiltersAction =
  | loadProducts
  | filterProducts
  | sortProducts
  | setGridView
  | setListView
  | updateSort
  | updateFilter
  | clearFilters;
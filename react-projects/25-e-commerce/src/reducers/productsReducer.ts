import { IProductsState } from './../types/products';
import ActionTypes from "../actions/actionTypes";
import { ProductAction } from '../actions/productActions';

const productsReducer = (state: IProductsState, action: ProductAction) => {
  switch (action.type) {
    case ActionTypes.SIDEBAR_OPEN: {
      return { ...state, isSidebarOpen: true };
    }
    case ActionTypes.SIDEBAR_CLOSE: {
      return { ...state, isSidebarOpen: false };
    }
    case ActionTypes.GET_PRODUCTS_BEGIN: {
      return { ...state, productsLoading: true };
    }
    case ActionTypes.GET_PRODUCTS_SUCCESS: {
      const featuredProducts = action.payload.filter(p => p.featured);
      return {
        ...state,
        productsLoading: false,
        products: action.payload,
        featuredProducts,
      };
    }
    case ActionTypes.GET_PRODUCTS_ERROR: {
      return { ...state, productsLoading: false, productsError: true };
    }
    case ActionTypes.GET_SINGLE_PRODUCT_BEGIN: {
      return {
        ...state,
        singleProductLoading: true,
        sngleProductError: false
      };
    }
    case ActionTypes.GET_SINGLE_PRODUCT_SUCCESS: {
      return {
        ...state,
        singleProductLoading: false,
        singleProduct: action.payload,
      };
    }
    case ActionTypes.GET_SINGLE_PRODUCT_ERROR: {
      return {
        ...state,
        singleProductLoading: false,
        singleProductError: true,
      };
    }
    default: {
      console.error(`No Matching "${(action as ProductAction).type}" - action type`);
      return state;
    }
  }
};

export default productsReducer;
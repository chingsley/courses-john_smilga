import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import productsReducer from '../reducers/productsReducer';
import { products_url } from '../utils/constants';

import ActionTypes from '../actions/actionTypes';
import { IProductsState } from '../types/products';

export const initialState: IProductsState = {
  isSidebarOpen: false,
  productsLoading: false,
  productsError: false,
  products: [],
  featuredProducts: [],
  singleProductLoading: false,
  singleProductError: false,
  singleProduct: null,
};

interface IProductContext extends IProductsState {
  openSidebar: () => void;
  closeSidebar: () => void;
  fetchSingleProduct: (url: string) => void;
}
const ProductsContext = React.createContext<IProductContext | null>(null);

export const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(productsReducer, initialState);

  const openSidebar = () => {
    dispatch({ type: ActionTypes.SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: ActionTypes.SIDEBAR_CLOSE });
  };
  const fetchProducts = async (url: string) => {
    dispatch({ type: ActionTypes.GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: ActionTypes.GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: ActionTypes.GET_PRODUCTS_ERROR });
    }
  };
  const fetchSingleProduct = async (url: string) => {
    dispatch({ type: ActionTypes.GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url);
      const singleProduct = response.data;
      dispatch({
        type: ActionTypes.GET_SINGLE_PRODUCT_SUCCESS,
        payload: singleProduct,
      });
    } catch (error) {
      dispatch({ type: ActionTypes.GET_SINGLE_PRODUCT_BEGIN });
    }
  };

  useEffect(() => {
    fetchProducts(products_url);
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

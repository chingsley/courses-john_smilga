import { IProduct, IProductDetail } from '../types/products';
import ActionTypes from './actionTypes';

interface openSidebar {
  type: ActionTypes.SIDEBAR_OPEN,
}
interface closeSidebar {
  type: ActionTypes.SIDEBAR_CLOSE,
}
interface getProductsBegin {
  type: ActionTypes.GET_PRODUCTS_BEGIN,
}
interface getProductsSuccess {
  type: ActionTypes.GET_PRODUCTS_SUCCESS,
  payload: IProduct[];
}
interface getProductsError {
  type: ActionTypes.GET_PRODUCTS_ERROR,
}
interface getSingleProductBegin {
  type: ActionTypes.GET_SINGLE_PRODUCT_BEGIN,
}
interface getSingleProductSuccess {
  type: ActionTypes.GET_SINGLE_PRODUCT_SUCCESS,
  payload: IProductDetail;
}
interface getSingleProductError {
  type: ActionTypes.GET_SINGLE_PRODUCT_ERROR,
}

export type ProductAction =
  | openSidebar
  | closeSidebar
  | getProductsBegin
  | getProductsSuccess
  | getProductsError
  | getSingleProductBegin
  | getSingleProductSuccess
  | getSingleProductError;
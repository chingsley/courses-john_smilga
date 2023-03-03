enum ActionTypes {
  SIDEBAR_OPEN = 'SIDEBAR_OPEN',
  SIDEBAR_CLOSE = 'SIDEBAR_CLOSE',
  GET_PRODUCTS_BEGIN = 'GET_PRODUCTS_BEGIN',
  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR',
  GET_SINGLE_PRODUCT_BEGIN = 'GET_SINGLE_PRODUCT_BEGIN',
  GET_SINGLE_PRODUCT_SUCCESS = 'GET_SINGLE_PRODUCT_SUCCESS',
  GET_SINGLE_PRODUCT_ERROR = 'GET_SINGLE_PRODUCT_ERROR',
  LOAD_PRODUCTS = 'LOAD_PRODUCTS',
  SET_GRIDVIEW = 'SET_GRIDVIEW',
  SET_LISTVIEW = 'SET_LISTVIEW',
  UPDATE_SORT = 'UPDATE_SORT',
  SORT_PRODUCTS = 'SORT_PRODUCTS',
  UPDATE_FILTERS = 'UPDATE_FILTERS',
  FILTER_PRODUCTS = 'FILTER_PRODUCTS',
  CLEAR_FILTERS = 'CLEAR_FILTERS',
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
  TOGGLE_CART_ITEM_AMOUNT = 'TOGGLE_CART_ITEM_AMOUNT',
  CLEAR_CART = 'CLEAR_CART',
  COUNT_CART_TOTALS = 'COUNT_CART_TOTALS',
}

export default ActionTypes;
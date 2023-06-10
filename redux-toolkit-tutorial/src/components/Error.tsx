import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';
import { clearError } from '../features/cart/cartSlice';

const Error = () => {
  const dispatch: AppDispatch = useDispatch();
  const { error } = useSelector((store: RootState) => store.cart);
  useEffect(() => {
    setTimeout(() => {
      dispatch(clearError());
    }, 3000);
  }, [error]);

  return (
    <div className="error-container" onClick={() => dispatch(clearError())}>{error}</div>
  );
};

export default Error;
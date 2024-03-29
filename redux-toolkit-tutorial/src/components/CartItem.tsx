import { ChevronDown, ChevronUp } from '../icons';
import { removeItem, increase, decrease } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { ICartItem } from '../data/cartItems';
import React from 'react';
import { AppDispatch } from '../app/store';

type CartItemProps = ICartItem;
const CartItem: React.FC<CartItemProps> = ({ id, img, title, price, quantity }) => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />

      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button
          className='remove-btn'
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>

      <div>
        <button
          className='amount-btn'
          onClick={() => {
            dispatch(increase({ id }));
          }}
        >
          <ChevronUp />
        </button>
        <p className='amount'>{quantity}</p>
        <button
          className='amount-btn'
          onClick={() => {
            dispatch(decrease({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>

    </article>
  );
};
export default CartItem;

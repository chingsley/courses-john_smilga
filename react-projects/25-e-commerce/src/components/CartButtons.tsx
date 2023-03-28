import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LogoutOptions } from '@auth0/auth0-react';
import { UseCartContext } from '../context/cartContext';
import { useProductsContext } from '../context/productContext';
import { useUserContext } from '../context/userContext';
import Loading from './Loading';

const CartButtons = () => {
  const productContext = useProductsContext();
  const cartContext = UseCartContext();
  const userContext = useUserContext();
  if (!userContext) return <Loading />;
  if (!cartContext) return <Loading />;
  if (!productContext) return <Loading />;

  const { closeSidebar } = productContext;
  const { total_items, clearCart } = cartContext;
  const { loginWithRedirect, currentUser, logout } = userContext;

  const logoutOptions: Omit<LogoutOptions, 'onRedirect'> = {
    returnTo: window.location.origin,
  } as Omit<LogoutOptions, 'onRedirect'>;

  return (
    <Wrapper className='cart-btn-wrapper'>
      <Link to='/cart' className='cart-btn' onClick={closeSidebar}>
        Cart
        <span className='cart-container'>
          <FaShoppingCart />
          <span className='cart-value'>{total_items}</span>
        </span>
      </Link>
      {currentUser ? (
        <button
          type='button'
          className='auth-btn'
          onClick={() => {
            clearCart();
            localStorage.removeItem('user');
            logout(logoutOptions);
          }}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button className='auth-btn' type='button' onClick={loginWithRedirect}>
          Login <FaUserPlus />
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`;

export default CartButtons;

import React from 'react';
import styled from 'styled-components';
import { UseCartContext } from '../context/cartContext';
import { Link } from 'react-router-dom';
import { StripeCheckout, PageHero, Loading } from '../components';

const CheckoutPage = () => {
  const cartContext = UseCartContext();
  if (!cartContext) return <Loading />;

  const { cart } = cartContext;

  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Your cart is empty</h2>
            <Link className="btn" to="/products">fill it</Link>
          </div>
        ) : (
          <StripeCheckout />
        )}
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  .empty {
    text-align: center;
  }`;

export default CheckoutPage;

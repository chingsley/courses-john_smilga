import React, { useState, useCallback, useMemo } from 'react';
import { useEffect } from 'react';
import { useFetch } from '../9-custom-hooks/2-useFetch';

const url = 'http://localhost:4500/api/javascript-store-products';

interface StoreProduct {
  fields: {
    price: number;
    name: string;
    image: [{ url: string; }];
  };
}

// every time props or state changes, compnoent re-renders
// const calculateMostExpensive = (data: StoreProduct[]) => {
//   return data.reduce((total, item) => {
//     const price = item.fields.price;
//     if (price >= total) total = price;
//     return total;
//   }, 0) / 100;
// };
const calculateMostExpensive = (data: StoreProduct[]) => {
  return data.reduce((maxPrice, item) => Math.max(maxPrice, item.fields.price), 0) / 100;
};

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    console.log('called ', cart);
    setCart(cart + 1);
  }, [cart]);

  // const addToCart = () => {
  //   console.log('called ', cart);
  //   setCart(cart + 1);
  // };

  const mostExpensive = useMemo(() => {
    return calculateMostExpensive(products);
  }, [products]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>Increase Count</button>
      <h1 style={{ marginTop: '3rem' }}>Cart: {cart}</h1>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

interface BigListProps {
  products: any[];
  addToCart: () => void;
}

const BigList: React.FC<BigListProps> = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log('BigList');
  });
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          />
        );
      })}
    </section>
  );
});

interface SingleProductProps {
  id: string;
  fields: StoreProduct["fields"],
  addToCart: () => void;
}
const SingleProduct: React.FC<SingleProductProps> = ({ id, fields, addToCart }) => {
  useEffect(() => {
    console.count('SingleProduct ');
  });
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;
  // console.log(addToCart);

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </article>
  );
};

export default Index;
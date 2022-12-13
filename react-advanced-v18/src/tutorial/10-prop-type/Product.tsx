import React from 'react';
import { IProduct } from '../9-custom-hooks/2-useFetch';
import defaultImage from '../../assets/default-image.jpeg';

type ProductProps = IProduct;

const Product: React.FC<ProductProps> = ({ image, name, price }) => {
  const url = image?.url;
  return (
    <div className="product">
      <img src={url || defaultImage} alt={name || 'default name'} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </div>
  );
};

export default Product;
import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import defaultImage from '../../assets/default-image.jpeg';

// interface ProductProps {
//   image: { url: string; };
//   name: string;
//   price: number;
// }

const ProductPropTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

type ProductProps = InferProps<typeof ProductPropTypes>;

const Product: React.FC<ProductProps> = ({ image, name, price }) => {
  const url = image.url;
  return (
    <div className="product">
      <img src={url} alt={name || 'default name'} />
      <h4>{name}</h4>
      <p>${price || 3.99}</p>
    </div>
  );
};

Product.propTypes = ProductPropTypes;

Product.defaultProps = {
  name: 'default name',
  price: 3.99,
  image: { url: defaultImage },
};

export default Product;
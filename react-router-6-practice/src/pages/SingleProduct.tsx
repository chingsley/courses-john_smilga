import { Link, useParams } from "react-router-dom";
import products from '../data';

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find(product => product.id === productId);
  if(!product) return <ProductNotFound id={productId!} />

  const { image, name } = product;
  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to='/products'>back to products</Link>
    </section>
  )
}

interface ProductNotFoundProp {
  id: string;
}
const ProductNotFound: React.FC<ProductNotFoundProp> = ({ id }) => {
  return <p>{`No product matches the id ${id}`}</p>
}

export default SingleProduct;
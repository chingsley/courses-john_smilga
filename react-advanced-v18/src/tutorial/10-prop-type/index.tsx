import Product from './Product';
import { useFetch } from '../9-custom-hooks/2-useFetch';
const url = 'http://localhost:4500/api/prop-types-example';

function Index() {
  const { products } = useFetch(url);
  return (
    <div>
      <h2>Products</h2>
      <section className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
}

export default Index;
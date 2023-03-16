import { useFiltersContext } from '../context/filterContext';
import { ViewTypes } from '../types/filters';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
  const { filteredProducts, viewType } = useFiltersContext()!;

  if (filteredProducts.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search
      </h5>
    );
  }
  if (viewType === ViewTypes.List) {
    return <ListView products={filteredProducts} />;
  }

  return <GridView products={filteredProducts} />;
};

export default ProductList;

// import { useFetch } from './3-useFetch-with-useCallBack';
import { useFetch } from './2-useFetch';

// const url = 'https://course-api.com/javascript-store-products';
const url = 'https://course-api.netlify.app/api/javascript-store-products';

function FetchExample() {
  const { loading, products } = useFetch(url);
  console.log(products);
  return (
    <>
      <h4>{loading ? 'loading...' : 'data fetched, please check the console'}</h4>
    </>
  );
}

export default FetchExample;
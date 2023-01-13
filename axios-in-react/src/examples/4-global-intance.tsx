import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const resp1 = await axios(productsUrl);
      const resp2 = await axios(randomUserUrl);

      console.log(resp1);
      console.log(resp2);
    } catch(error) {
      if(error instanceof AxiosError) {
        console.log(error.response);
      }
      if(error instanceof Error) {
        console.log(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if(loading) return <div className="loading"></div>;
  return (
    <>
      <h2 className="text-center">global instance</h2>
      <p className="pos-center text-center">check the console for logs</p>
    </>
  )
}

export default GlobalInstance;
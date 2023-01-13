import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import authFetch from '../axios/custom';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const resp1 = await authFetch('/react-store-products');
      console.log(resp1);

      const resp2 = await axios(randomUserUrl);
      console.log(resp2);
    } catch (error) {
      if(error instanceof AxiosError) {
        console.log(error.response);
      }
      if(error instanceof Error) {
        console.log(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(loading) return <div className="loading"></div>;
  return (
    <>
      <h2 className="text-center">custom instance</h2>
      <p className="pos-center text-center">
        check console for logo
      </p>
    </>
  )
}

export default CustomInstance;
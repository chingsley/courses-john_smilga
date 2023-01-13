import { useEffect, useState } from 'react';
import authFetch from '../axios/interceptors';

const Interceptors = () => {
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const resp = await authFetch('/react-store-products');
      console.log(resp);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  if(loading) return <div className="loading"></div>
  return (
    <>
      <h2 className='text-center'>interceptors</h2>
      <p className='pos-center text-center'>
        check the console for log
      </p>
    </>
  );
};

export default Interceptors;

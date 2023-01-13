import { useEffect } from 'react'
import axios, { AxiosError } from 'axios';

const url = 'https://course-api.com/react-store-products';

const FirstRequest = () => {
  const fetchData = async () => {
    try {
      const response = await axios(url);
      const data = response.data;
      console.log(data);
    } catch(error) {
      if(error instanceof AxiosError) {
        console.log(error.response);
      } else if(error instanceof Error){
        console.log(error.message);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <h2 className="text-center">
      check the browser console for data logs
    </h2>
  )
}

export default FirstRequest;
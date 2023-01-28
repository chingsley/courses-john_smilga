import { useState, useEffect } from "react";

export interface IMovie {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
}

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (queryParams: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });
  const [data, setData] = useState<IMovie[] | null>(null);

  const fetchMovies = async (url: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === 'True') {
        setData(data.Search || data);
        setError({ show: false, msg: '' });
      } else {
        setError({ show: true, msg: data.Error });
      }
    } catch (error) {
      console.log('error = ', error);
    } finally {
      setIsLoading(false);
    }
  };

  let timer: any;
  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fetchMovies(`${API_ENDPOINT}${queryParams}`);
    }, 1000); // if I stop typing for 1 sec, it'll make the api call

    return () => clearTimeout(timer);
  }, [queryParams]);

  return { isLoading, error, data };
};

export default useFetch;
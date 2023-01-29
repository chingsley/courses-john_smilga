import { useState, useEffect } from "react";

export interface IMovie {
  imdbID: string;
  Poster: string;
  Title: string;
  Year: string;
  Plot: string;
}

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (queryParams: string) => {
  const [isLoading, setIsLoading] = useState(true); // see below for why it makes sense to set the default to true
  const [error, setError] = useState({ show: false, msg: '' });
  const [data, setData] = useState<IMovie | IMovie[] | null>(null);

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


/**
 * WHY IT MAKES SENCE TO SET DEFAULT VALUE OF isLoading TO TRUE
 * The order of execution of this useFetch hook is this
 * 1.  the useState runs with the defualt values: { isLoading: true, data: null, error: { show: false, msg: '' }}
 * 2.  those default values are returned to the calling components
 * 3.  the useEffect runs and updates the default values after the api call
 * 4.  those updated values are returned to the calling components
 * 
 * 
 * In call component, we add the condition:
 * if(isLoading) return <div className="loaing"></div>
 * as a result, during step one, when the component renders with the default
 * values, this condition will be true, and the loader will render.
 * Therefore, because we try to access data (as movies or movie) AFTER this if
 * condition is  checked, then we'll not run into errors of trying to map or
 * destructure a null value (b/c default value of data is null)
 */
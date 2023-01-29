import React, { useState, useContext } from 'react';
import useFetch, { IMovie } from './useFetch';

interface IError {
  show: boolean;
  msg: string;
}
interface IAppContext {
  isLoading: boolean;
  error: IError;
  movies: IMovie | IMovie[] | null;
  query: string;
  setQuery: (queryParam: string) => void;
}
interface AppProviderProps {
  children?: React.ReactNode;
}

const AppContext = React.createContext<IAppContext | null>(null);

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [query, setQuery] = useState('batman');
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

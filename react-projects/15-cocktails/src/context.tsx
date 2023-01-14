import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export interface ICocktail {
  id: string;
  name: string;
  category: string;
  image: string;
  info: string;
  glass: string;
  instructions: string;
  ingredients: string[];
}

interface IAppContext {
  loading: boolean;
  cocktails: ICocktail[];
  searchTerm: string;
  changeSearchItem: (value: string) => void;
}
const AppContext = React.createContext<IAppContext | null>(null);

interface AppProviderPros {
  children?: React.ReactNode;
}

const AppProvider: React.FC<AppProviderPros> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState<ICocktail[]>([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try{
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log('data = ', data);
      const { drinks } = data;
      if(drinks) {
        const newCocktails = drinks.map((item: any) => ({
          id: item.idDrink,
          name: item.strDrink,
          image: item.strDrinkThumb,
          info: item.strAlcoholic,
          glass: item.strGlass,
        }));
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
    } catch(error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  const changeSearchItem = (value: string) => {
    setSearchTerm(value);
  }

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks])

  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, changeSearchItem }}
    >
      {children}
    </AppContext.Provider>
  )
}

// make sure to use this for accessing the context anywhere in the app
export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
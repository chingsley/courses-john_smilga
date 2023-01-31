import React, { useContext, useEffect, useReducer } from 'react';

import { ActionType } from './state/action-types';
import { EnumPageTransition } from './state/actions';
import reducer, { IState } from './state/reducers';
const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

const initialState: IState = {
  isLoading: true,
  hits: [],
  query: 'react',
  page: 0,
  nbPages: 0,
};

interface IAppContext {
  isLoading: IState['isLoading'];
  hits: IState['hits'];
  query: IState['query'];
  page: IState['page'];
  nbPages: IState['nbPages'];
  removeStory: (id: string) => void;
  handleSearch: (query: string) => void;
  handlePage: (direction: EnumPageTransition) => void;
}

const AppContext = React.createContext<IAppContext | null>(null);

interface AppProviderProps {
  children?: React.ReactNode;
}
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async (url: string) => {
    dispatch({ type: ActionType.SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: ActionType.SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (error) {
      console.log('error = ', error);
    }
  };

  const removeStory = (id: string) => {
    dispatch({ type: ActionType.REMOVE_STORY, payload: id });
  };

  const handleSearch = (query: string) => {
    dispatch({ type: ActionType.HANDLE_SEARCH, payload: query });
  };

  const handlePage = (direction: EnumPageTransition) => {
    dispatch({ type: ActionType.HANDLE_PAGE, payload: direction });
  };

  let timer: any;
  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
    }, 1000);

    return () => clearTimeout(timer);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removeStory, handleSearch, handlePage }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

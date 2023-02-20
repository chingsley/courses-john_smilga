import React, { useState, useEffect } from 'react';
import axios from 'axios';
import mockUser from './mockData/mockUser';
import mockRepos from './mockData/mockRepos';
import mockFollowers from './mockData/mockFollowers';

const rootUrl = 'https://api.github.com';

interface IAppContext {
  githubUser: any;
  repos: any;
  followers: any;
  requests: any;
  error: any;
  searchGithubUser: any;
  isLoading: any;
}

interface AppProviderProps {
  children?: React.ReactNode;
}

const GithubContext = React.createContext<IAppContext | null>(null);

const GithubProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <GithubContext.Provider
      value={{
        githubUser: null,
        repos: null,
        followers: null,
        requests: null,
        error: null,
        searchGithubUser: null,
        isLoading: null,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import mockUser, { IGithubUser } from './mockData/mockUser';
import mockRepos, { IRepo } from './mockData/mockRepos';
import mockFollowers, { IFollower } from './mockData/mockFollowers';

const rootUrl = 'https://api.github.com';

interface IError {
  show: boolean;
  msg: string;
}

interface IAppContext {
  githubUser: IGithubUser;
  repos: IRepo[];
  followers: IFollower[];
  requests: number;
  error: IError;
  searchGithubUser: (username: string) => void;
  isLoading: boolean;
}

interface AppProviderProps {
  children?: React.ReactNode;
}

const GithubContext = React.createContext<IAppContext | null>(null);

const GithubProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [githubUser, setGithubUser] = useState<IGithubUser>(mockUser);
  const [repos, setRepos] = useState<IRepo[]>(mockRepos);
  const [followers, setFollowers] = useState<IFollower[]>(mockFollowers);
  // request loading
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  // error
  const [error, setError] = useState<IError>({ show: false, msg: '' });

  const showError = (msg: string) => {
    setError({ show: true, msg });
  };

  const hidError = () => setError({ show: false, msg: '' });

  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`).then(({ data }) => {
      let {
        rate: { remaining },
      } = data;
      setRequests(remaining);
      if (remaining === 0) {
        showError("Sorry, you've exceeded your hourly rate limit.");
      }
    });
  };
  const searchGithubUser = async (username: string) => {
    hidError();
    setIsLoading(true);
    const response = await axios
      .get<IGithubUser>(`${rootUrl}/users/${username}`)
      .catch((error) => {
        setError({ show: true, msg: error.message });
        console.log(error);
      });

    if (!response) {
      showError(`No user matches the username: ${username}`);
      return;
    }

    setGithubUser(response.data);
    const { login, followers_url } = response.data;

    await Promise.allSettled([
      axios(`${rootUrl}/users/${login}/repos?per_page=100`),
      axios(`${followers_url}?per_page=100`),
    ])
      .then((results) => {
        const [repos, followers] = results;
        const status = 'fulfilled';
        if (repos.status === status) {
          setRepos(repos.value.data);
        }
        if (followers.status === status) {
          setFollowers(followers.value.data);
        }
      })
      .catch((err) => {
        showError(err.message);
        console.log(err);
      });

    checkRequests();
    setIsLoading(false);
  };

  useEffect(checkRequests, []);
  useEffect(() => {
    searchGithubUser('chingsley');
  }, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchGithubUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };

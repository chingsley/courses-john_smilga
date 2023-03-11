import React, { useEffect, useContext, useState } from 'react';
import { useAuth0, LogoutOptions } from '@auth0/auth0-react';
import { User } from '@auth0/auth0-spa-js';

interface IUserContext {
  loginWithRedirect: () => void;
  logout: (options?: LogoutOptions | undefined) => void;
  currentUser: User | undefined;
  isLoading: boolean;
  error: Error | undefined;
}
const UserContext = React.createContext<IUserContext | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { loginWithRedirect, logout, user, isLoading, error } = useAuth0();
  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    setCurrentUser(user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{ loginWithRedirect, logout, currentUser, isLoading, error }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

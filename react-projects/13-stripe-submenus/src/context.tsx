import React, { useState, useContext } from 'react';
import sublinks, { Page } from './data';

interface Coordinates {
  center?: number;
  bottom?: number;
}

interface AppContextInterface {
  isSidebarOpen: boolean,
  isSubmenuOpen: boolean,
  openSubmenu: (text: string, coordinates: Coordinates) => void,
  closeSubmenu: () => void,
  openSidebar: () => void,
  closeSidebar: () => void,
  location: Coordinates;
  page: Page;
}


const AppContext = React.createContext<AppContextInterface | null>(null);

interface AppProviderProps {
  children?: React.ReactNode;
}
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState<Page>({ page: '', links: [] });
  const [location, setLocation] = useState<Coordinates>({});

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const openSubmenu = (text: string, coordinates: Coordinates) => {
    const page = sublinks.find(link => link.page === text);
    if (!page) return;

    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        openSidebar,
        closeSidebar,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useGlobalContext };
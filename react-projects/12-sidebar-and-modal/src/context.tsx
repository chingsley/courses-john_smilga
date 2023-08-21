import React, { useState, useContext } from 'react';

interface AppContextInterface {
  isSidebarOpen: boolean;
  isResultModalOpen: boolean;
  showResult: () => void;
  closeResultModal: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
}

const AppContext = React.createContext<AppContextInterface | null>(null);

interface AppProviderProps {
  children?: React.ReactNode;
}
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const showResult = () => {
    setIsResultModalOpen(true);
  };
  const closeResultModal = () => {
    setIsResultModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isResultModalOpen,
        showResult,
        closeResultModal,
        openSidebar,
        closeSidebar,
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

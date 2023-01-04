import React, { useState, useContext } from 'react';

interface AppContextInterface {
  isSidebarOpen: boolean,
  isModalOpen: boolean,
  openModal: () => void,
  closeModal: () => void,
  openSidebar: () => void,
  closeSidebar: () => void,
}

const AppContext = React.createContext<AppContextInterface | null>(null);

interface AppProviderProps {
  children?: React.ReactNode; 
}
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }
  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <AppContext.Provider
      value={{
      isSidebarOpen,
      isModalOpen,
      openModal,
      closeModal,
      openSidebar,
      closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(AppContext);
}
export { AppProvider, AppContext, useGlobalContext };
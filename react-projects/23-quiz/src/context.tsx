import React, { useContext, useEffect } from 'react';

interface Question {}

interface Quiz {}

interface IAppContext {
  waiting: boolean;
  loading: boolean;
  questions: Question[];
  index: number;
  correct: number;
  error: boolean;
  isModalOpen: boolean;
  nextQuestion: number;
  checkAnswer: (value: string) => void;
  closeModal: () => void;
  quiz: Quiz;
  handleChange: (e: React.ChangeEvent) => void;
  handleSubmit: (e: React.FormEvent) => void;
}
const AppContext = React.createContext<IAppContext | null>(null);

interface AppProviderProps {
  children?: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  useEffect(() => {}, []);
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import useVisualMode, { ModeEnum } from './hooks/useVisualMode';

import { MIN_QUESTIONS_COUNT } from './constants';
interface IQuestion {
  question: string;
  incorrect_answers: string[];
  correct_answer: string;
}

enum CategoryEnum {
  Sports = 21,
  History = 23,
  Politics = 24,
}
interface IQuiz {
  amount: number;
  category: CategoryEnum;
  difficulty: string;
}

interface IAppContext {
  mode: ModeEnum;
  transition: (mode: ModeEnum) => void;
  questions: IQuestion[];
  index: number;
  score: number;
  error: string | null;
  isModalOpen: boolean;
  nextQuestion: () => void;
  checkAnswer: (value: boolean) => void;
  closeModal: () => void;
  quiz: IQuiz;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => void;
}

const API_ENDPOINT = 'https://opentdb.com/api.php?';

// const tempUrl =
//   'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple';

const AppContext = React.createContext<IAppContext | null>(null);

interface AppProviderProps {
  children?: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const { mode, transition } = useVisualMode();
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quiz, setQuiz] = useState<IQuiz>({
    amount: MIN_QUESTIONS_COUNT,
    category: CategoryEnum.Sports,
    difficulty: 'easy',
  });

  const fetchQuestions = async (url: string) => {
    transition(ModeEnum.LOADING);
    try {
      const response = await axios(url);
      console.log('response = ', response);
      if (!response) {
        transition(ModeEnum.SETUP);
        setError(
          'No response, please select different options, or try again later'
        );
        return;
      }
      const data = response.data.results;
      if (data.length === 0) {
        transition(ModeEnum.SETUP);
        setError(
          'No questions generated for the Selected Options, please choose different options'
        );
        return;
      }
      setQuestions(data);
      transition(ModeEnum.QUESTION);
    } catch (error) {
      console.log('error = ', error);
      transition(ModeEnum.SETUP);
      setError('Internal Error. Please try again later');
    }
  };

  const nextQuestion = () => {
    setIndex((prevIndex) => {
      const index = prevIndex + 1;
      if (index > questions.length - 1) {
        openModal();
        return 0;
      } else {
        return index;
      }
    });
  };

  const checkAnswer = (value: boolean) => {
    if (value) {
      setScore((prevScore) => prevScore + 1);
    }
    nextQuestion();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    transition(ModeEnum.SETUP);
    setScore(0);
    setIsModalOpen(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    const { amount, category, difficulty } = quiz;

    const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${category}&type=multiple`;
    fetchQuestions(url);
  };

  useEffect(() => {}, []);
  return (
    <AppContext.Provider
      value={{
        mode,
        transition,
        questions,
        index,
        score,
        error,
        isModalOpen,
        nextQuestion,
        checkAnswer,
        closeModal,
        quiz,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

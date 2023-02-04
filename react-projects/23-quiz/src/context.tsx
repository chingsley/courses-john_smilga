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
  isResultModalOpen: boolean;
  nextQuestion: () => void;
  checkAnswer: (userAnswer: IUserAnswer, correctAnswer: string) => void;
  closeResultModal: () => void;
  quiz: IQuiz;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement | HTMLButtonElement>
  ) => void;
  userAnswers: IUserAnswer[];
}

const API_ENDPOINT = 'https://opentdb.com/api.php?';

// const tempUrl =
//   'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple';

const AppContext = React.createContext<IAppContext | null>(null);

interface AppProviderProps {
  children?: React.ReactNode;
}

interface IUserAnswer {
  questionIndex: number;
  answer: string;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const { mode, transition } = useVisualMode();
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [isResultModalOpen, setIsResultModalOpen] = useState(false);
  const [quiz, setQuiz] = useState<IQuiz>({
    amount: MIN_QUESTIONS_COUNT,
    category: CategoryEnum.Sports,
    difficulty: 'easy',
  });
  const [userAnswers, setUserAnswers] = useState<IUserAnswer[]>([]);

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
        showResult();
        return 0;
      } else {
        return index;
      }
    });
  };

  const checkAnswer = (userAnswer: IUserAnswer, correctAnswer: string) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, { ...userAnswer }]);
    if (userAnswer.answer === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    nextQuestion();
  };

  const showResult = () => {
    setIsResultModalOpen(true);
  };

  const closeResultModal = () => {
    transition(ModeEnum.SETUP);
    setScore(0);
    setUserAnswers([]);
    setIsResultModalOpen(false);
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
        isResultModalOpen,
        nextQuestion,
        checkAnswer,
        closeResultModal,
        quiz,
        handleChange,
        handleSubmit,
        userAnswers,
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

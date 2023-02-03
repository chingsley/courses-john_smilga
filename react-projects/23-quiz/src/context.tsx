import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

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
  waiting: boolean;
  loading: boolean;
  questions: IQuestion[];
  index: number;
  score: number;
  error: boolean;
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

// const url = '';
// const tempUrl =
//   'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple';

const AppContext = React.createContext<IAppContext | null>(null);

interface AppProviderProps {
  children?: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quiz, setQuiz] = useState<IQuiz>({
    amount: 0,
    category: CategoryEnum.Sports,
    difficulty: 'easy',
  });

  const fetchQuestions = async (url: string) => {
    setLoading(true);
    setWaiting(false);
    const response = await axios(url).catch((err) => console.log(err));
    if (response) {
      const data = response.data.results;
      if (data.length > 0) {
        setQuestions(data);
        setLoading(false);
        setWaiting(false);
        setError(false);
      } else {
        setWaiting(true);
        setError(true);
      }
    } else {
      setWaiting(true);
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
    setWaiting(true);
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
        waiting,
        loading,
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

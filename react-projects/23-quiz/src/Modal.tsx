import { useGlobalContext } from './context';
import UserAnswerList from './UserAnswerList';

const Modal = () => {
  const { isResultModalOpen, closeResultModal, score, questions, userAnswers } =
    useGlobalContext()!;

  const userAns = userAnswers.map(({ answer, questionIndex }) => {
    return {
      question: questions[questionIndex].question,
      answer,
      correctAnswer: questions[questionIndex].correct_answer,
    };
  });
  console.log('userAns: ', userAns);
  return (
    <div
      className={`${
        isResultModalOpen ? 'modal-container isOpen' : 'modal-container'
      }`}
    >
      <div className='modal-content'>
        <h2>congrats!</h2>
        <p>
          You answered {((score / questions.length) * 100).toFixed(0)}% of
          questions correctly
        </p>
        <UserAnswerList userAnswers={userAns} />
        <button className='close-btn' onClick={closeResultModal}>
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;

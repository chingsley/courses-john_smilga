import React from 'react';
import { UserAnswerProps } from './propTypes';

const UserAnswer: React.FC<UserAnswerProps> = (props) => {
  const { question, answer, correctAnswer } = props;
  return (
    <article className='user-answer'>
      <h4>{question}</h4>
      {answer !== correctAnswer ? (
        <>
          <p>{answer} &#10060;</p>
          <p>Right Answer: {correctAnswer}</p>
        </>
      ) : (
        <p>{correctAnswer} &#9989;</p>
      )}
    </article>
  );
};

export default UserAnswer;

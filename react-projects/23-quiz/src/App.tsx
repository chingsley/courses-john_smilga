import React from 'react';
import { useGlobalContext } from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';
import { ModeEnum } from './hooks/useVisualMode';

function App() {
  const {
    mode,
    questions,
    index: questionIndex,
    score,
    nextQuestion,
    checkAnswer,
    userAnswers,
  } = useGlobalContext()!;

  if (mode === ModeEnum.SETUP) {
    return <SetupForm />;
  } else if (mode === ModeEnum.LOADING) {
    return <Loading />;
  } else {
    // MODE === QUESTION:
    const { question, incorrect_answers, correct_answer } =
      questions[questionIndex];
    let answers = [...incorrect_answers];
    const tempIndex = Math.floor(Math.random() * 4);
    if (tempIndex === 3) {
      answers.push(correct_answer);
    } else {
      answers.push(answers[tempIndex]);
      answers[tempIndex] = correct_answer;
    }

    return (
      <main>
        <Modal />
        <section className='quiz'>
          <p className='correct-answers'>
            correct answers : {score}/{userAnswers.length}
          </p>
          <article className='container'>
            <h2 dangerouslySetInnerHTML={{ __html: question }} />
            <div className='btn-container'>
              {answers.map((answer, index) => {
                return (
                  <button
                    key={index}
                    className='answer-btn'
                    onClick={() =>
                      checkAnswer({ questionIndex, answer }, correct_answer)
                    }
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
                );
              })}
            </div>
          </article>
          <button className='next-question' onClick={nextQuestion}>
            next question
          </button>
        </section>
      </main>
    );
  }
}

export default App;

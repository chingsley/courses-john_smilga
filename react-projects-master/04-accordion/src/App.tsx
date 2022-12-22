import { useState } from 'react';
import data, { IQuestion } from './data';
import SingleQuestion from './Question';

function App() {
  const [questions, setQuestions] = useState<IQuestion[]>(data);
  return (
    <div className="container">
      <h3>Question and Answers about login</h3>
      <section className="info">
        {questions.map((question) => {
          return (
            <SingleQuestion key={question.id} { ...question} />
          )
        })}
      </section>
    </div>
  )
}

export default App
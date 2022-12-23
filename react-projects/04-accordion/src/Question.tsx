import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { IQuestion } from './data';

interface QuestionProps {
  title: IQuestion["title"];
  info: IQuestion["info"];
}

const Question: React.FC<QuestionProps> = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  const cName = showInfo ? "slide slide-show" : "slide";
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(prevShowInfo => !prevShowInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p className={cName}>{info}</p>
      {/* {showInfo && <p className="slide-hide">{info}</p>} */}
    </article>
  )
}

export default Question
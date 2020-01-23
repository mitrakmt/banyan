import React, { useState } from "react";

import "./question.scss";

function Question({ question }) {
  const [hidden, setHidden] = useState(false);
  const toggleHidden = () => {
    setHidden(!hidden)
  }
  
  return (
    <div className="question" onClick={toggleHidden}>
      <div className="question-flex">
        <h5 className="question-arrow" style={hidden ? { transform: 'rotate(90deg) scale(1,1.3)' } : {}}>></h5>
        <h5 className="question-header">{question.questionText}</h5>
      </div>
      {
        hidden &&
        <p className="question-answer">{question.answerText}</p>
      }
    </div>
  );
}

export default Question;

import React, { useState } from "react";

import "./question.scss";

function Question({ question }) {
  const [hidden, setHidden] = useState(false);
  const toggleHidden = () => {
    setHidden(!hidden)
  }
  
  return (
    <div className="question" onClick={toggleHidden} style={hidden ? { height: 125 } : { height: 45 }}>
      <div className="question-flex">
        <h5 className="question-arrow" style={hidden ? { transform: 'rotate(90deg) scale(1,1.3)' } : {}}>></h5>
        <h5 className="question-header">{question.questionText}</h5>
      </div>
      <p className="question-answer" style={hidden ? { opacity: 1 } : { opacity: 0 }}>{question.answerText}</p>
    </div>
  );
}

export default Question;

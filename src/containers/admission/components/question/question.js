import React from "react";

import "./question.scss";

function Question({ question }) {  
  return (
    <div className="question">
      <div className="question-flex">
        <h5 className="question-header">{question.questionText}</h5>
      </div>
      <p className="question-answer">{question.answerText}</p>
    </div>
  );
}

export default Question;

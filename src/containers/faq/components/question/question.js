import React from "react";

import "./question.scss";

function Question({ question }) {

  return (
    <div className="question">
      <h5 className="question-header">{question.questionText}</h5>
      <p className="question-answer">{question.answerText}</p>
    </div>
  );
}

export default Question;

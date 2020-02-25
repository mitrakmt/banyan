import React, { useState } from "react";

import "./question.scss";

function Question({ question }) {
  const [hidden, setHidden] = useState(false);
  const toggleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <div
      className="faqQuestion"
      onClick={toggleHidden}
      style={hidden ? { height: "auto" } : { height: 55 }}
    >
      <div className="faqQuestion-flex">
        <h5
          className="faqQuestion-arrow"
          style={hidden ? { transform: "rotate(90deg) scale(1,1.3)" } : {}}
        >
          >
        </h5>
        <h5 className="faqQuestion-header">{question.questionText}</h5>
      </div>
      <p
        className="faqQuestion-answer"
        style={hidden ? { display: "block" } : { display: "none" }}
      >
        {question.answerText}
      </p>
    </div>
  );
}

export default Question;

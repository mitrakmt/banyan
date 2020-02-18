import React from "react";
import Question from './components/question/question'

import "./admission.scss";


function Admission() {
  const questions = [
    {
      questionText: "Initial Application",
      answerText: "Once you submit your email, we'll reach out to gather more information from you."
    },
    {
      questionText: "Phone Screen",
      answerText: "We'll reach out to schedule an initial phone interview. This call will gauge general interest, prior background and cultural fit."
    },
    {
      questionText: "Final Interview",
      answerText: "Once you go through the intial phone screen, we'll have a dedicated interview covering your knowledge of JavaScript and problem solving. We do this because our goal is take you from novice to a true, seasoned, mid-level engineer. To achieve this you must have a good foundation of JavaScript."
    },
    {
      questionText: "Acceptance Letter",
      answerText: "Once you've gone through both interviews, we'll reach out with an acceptance letter, pre-camp work to be completed and other information."
    },
  ]

  return (
    <div className="admission">
      <h2 className="admission-header">Admission Process</h2>
      {
        questions.map(question => (
          <Question question={question} />
        ))
      }
    </div>
  );
}

export default Admission;
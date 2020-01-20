import React from "react";
import Question from './components/question/question'

import "./faq.scss";

function Faq() {
  const questions = [
    {
      questionText: "How much will the program cost?",
      answerText: "We're going to charge you a boat load so we can make good money and live the dream."
    },
    {
      questionText: "How much will the program cost?",
      answerText: "We're going to charge you a boat load so we can make good money and live the dream."
    },
    {
      questionText: "How much will the program cost?",
      answerText: "We're going to charge you a boat load so we can make good money and live the dream."
    },
    {
      questionText: "How much will the program cost?",
      answerText: "We're going to charge you a boat load so we can make good money and live the dream."
    },
    {
      questionText: "How much will the program cost?",
      answerText: "We're going to charge you a boat load so we can make good money and live the dream."
    },
    {
      questionText: "How much will the program cost?",
      answerText: "We're going to charge you a boat load so we can make good money and live the dream."
    },
  ]

  return (
    <div className="faq">
      <h2 className="faq-header">FAQ</h2>
      {
        questions.map(question => (
          <Question question={question} />
        ))
      }
    </div>
  );
}

export default Faq;

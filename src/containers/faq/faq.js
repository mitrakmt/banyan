import React from "react";
import Question from './components/question/question'

import "./faq.scss";

function Faq() {
  const questions = [
    {
      questionText: "Who are the teachers?",
      answerText: "Michael Flores and Michael Mitrakos have been professional software engineers for over 4 years. They've held diverse roles for startups and enterprises, and have experience interviewing and hiring dozens of engineers."
    },
    {
      questionText: "Do you guarantee finding a job?",
      answerText: "We're going to charge you a boat load so we can make good money and live the dream."
    },
    {
      questionText: "How will you help me land a job?",
      answerText: "We're going to charge you a boat load so we can make good money and live the dream."
    },
    {
      questionText: "How can you help me fund the cost of tuition?",
      answerText: "While we can't offer student loans, many bootcamp students choose to fund their tuition via a personal loan, or platforms like Upstart and GoFundMe."
    },
    {
      questionText: "How do I prepare for the admissions test?",
      answerText: "? Do we know what this is yet.."
    },
    {
      questionText: "How are you different from other bootcamps?",
      answerText: "We're different in 2 primary ways. The most important is that we have 2 professional software engineers offering hands-on instruction. Dig into any other bootcamp and you'll see that your instructors are usually recent graduates of the program, which helps boost the bootcamp's image of helping students find jobs. The other way we're different is that we think great engineers are well-rounded, and so we want to bring you to a beautiful, relaxing culture to keep you sharp during the long study hours."
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

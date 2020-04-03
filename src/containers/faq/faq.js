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
      questionText: "How will you help me land a job?",
      answerText: "We'll use our network to shop your project and skills around, and make sure you get connect with recruiters and companies that will be the best fit."
    },
    {
      questionText: "How can you help me fund the cost of tuition?",
      answerText: "While we can't offer student loans, many bootcamp students choose to fund their tuition via a personal loan, or platforms like Upstart and GoFundMe."
    },
    {
      questionText: "How are you different from other bootcamps?",
      answerText: "We're different in two primary ways. The most important is that we have two professional senior software engineers offering hands-on instruction. Dig into any other bootcamp and you'll see that your instructors are usually recent graduates of the program with no real engineering experience, which helps boost the bootcamp's image of helping students find jobs. The other way we're different is that we think great engineers are well-rounded, and so we want to bring you to a beautiful, relaxing culture to keep you sharp during the long study hours."
    },
    {
      questionText: "How many students will be in the class?",
      answerText: "The class size is a maximum of twenty students."
    },
    {
      questionText: "What time committment will be required?",
      answerText: "The bootcamp is intended to be fully immersive for the duration of the program. There won't be many days where you don't spend at least some time learning, practicing, and coding. During the week you'll program and learn for 40 hours, with additional time at nights and on the weekend. All of that will be interspersed with breaks and trips around the island. That said, expect to be engaged fully in some way for the majority of each day for approximately two to three months."
    },
    {
      questionText: "Do I already have to know how to program to attend?",
      answerText: "This Codecamp is for those serious about taking their skills to the next level. This program isn't intended to take students basic programming skills, but rather to take new programmers from novice to seasoned programmer. All students must already know at least one progrmaming language and display competence with JavaScript to be admitted to the program. Further details on our admissions process will be released in the coming weeks."
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

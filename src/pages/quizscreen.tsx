import React, { useState } from 'react';

export default function QuizScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "HTML Stands For _________",
      options: [
        "Anchor Text Language",
        "HTML",
        "Case Cading Style Sheet",
        "HyperText markup language",
      ],
      correctAns: "HyperText markup language",
    },
    {
      question: "CSS Stands For _________",
      options: [
        "Casecading Style Sheet",
        "Java",
        "Ram",
        "Hypertext markup language",
      ],
      correctAns: "Casecading Style Sheet",
    },
    {
      question: "JS Stands For _________",
      options: ["Java Style", "Java Script", "Script", "Script Src"],
      correctAns: "Java Script",
    },
    {
      question: "DOM Stands For _________",
      options: ["Document Object Model", "html", "Css", "Java"],
      correctAns: "Document Object Model",
    },
    {
      question: "RAM Stands For _________",
      options: ["Read Only Memory", "Dom", "Random Access Memory", "For Pc"],
      correctAns: "Random Access Memory",
    },
    {
      question: "ROM Stands For _________",
      options: [
        "Hyper Text Markup Language",
        "html",
        "HTml",
        "Read Only Memory",
      ],
      correctAns: "Read Only Memory",
    },
  ];

  const handleOptionClick = (option: any) => {
    if (option === questions[currentIndex].correctAns) {
      setScore(score + 1);
    }

    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 bg-primary rounded-circle p-2 text-light">Quiz App</h1>

      {showScore ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Quiz Completed!</h5>
            <p className="card-text">
              Your Score: {score} / {questions.length}
            </p>
          </div>
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              Question {currentIndex + 1} / {questions.length}
            </h5>
            <p className="card-text">{questions[currentIndex].question}</p>
            <div className="form-check">
              {questions[currentIndex].options.map((x, i) => (
                <div key={i}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name={`question${currentIndex}`}
                    // id={`q${currentIndex}-option${i}`}
                    
                    onClick={() => handleOptionClick(x)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor=""
                  >
                    {x}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



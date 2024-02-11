import React, { useState } from "react";
import { QuizData } from "./Data/QuizData";
import QuizResult from "./QuizResult";

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const incrementer = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };
  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };
  const resetAll = () => {
    setCurrentQuestion(0);
    setScore(0);
    setClickedOption(0);
    setShowResult(false);
  };
  return (
    <div>
      <p className="heading-txt"> Quiz App </p>
      <div className="container">
        {showResult ? (
          <QuizResult
            score={score}
            totalScore={QuizData.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}.</span>
              <span id="question-txt">
                {QuizData[currentQuestion].question}
              </span>
            </div>

            <div className="option-container">
              <div className="option-container">
                {QuizData[currentQuestion].options.map((item, index) => {
                  return (
                    <button
                      // className="option-btn"
                      className={`option-btn ${
                        clickedOption === index + 1 ? "checked" : ""
                      }`}
                      key={index}
                      onClick={() => {
                        setClickedOption(index + 1);
                      }}
                    >
                      {item}{" "}
                    </button>
                  );
                })}
              </div>
            </div>
            {/* <div> */}
            <input
              type="button"
              value="Next"
              id="next-button"
              onClick={incrementer}
            />
            {/* </div> */}
          </>
        )}
      </div>
    </div>
  );
}

export default QuizApp;

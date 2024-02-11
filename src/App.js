import React from "react";
import "./App.css";
import QuizApp from "./Components/QuizApp";
import { QuizData } from "./Components/Data/QuizData";

function App() {
  return (
    <div className="heading-txt">
      <div>
        <QuizApp />
      </div>
    </div>
  );
}

export default App;

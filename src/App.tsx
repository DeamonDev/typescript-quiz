import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import WelcomeScreen from "./components/WelcomeScreen";

type Question = {
  category: string;
  question: string;
  correctAnswer: boolean;
};

const DUMMY_QUESTIONS: Array<Question> = [
  {
    category: "General",
    question: "Do French people like cheese?",
    correctAnswer: true,
  },
  {
    category: "Science: Math",
    question: "Do Polish people like functional analysis?",
    correctAnswer: true,
  },
  {
    category: "Science: Biology",
    question: "Does milk contain water?",
    correctAnswer: true,
  },
  {
    category: "Science: Physics",
    question: "Is symplectic geometry related to classical mechanics?",
    correctAnswer: true,
  },
];

const App = () => {
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Array<Question>>([]);

  return <>{!quizStarted && <WelcomeScreen />}</>;
};

export default App;

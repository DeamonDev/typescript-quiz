import { useEffect, useState } from "react";
import "./App.css";
import WelcomeScreen from "./components/WelcomeScreen";
import { addIdsToArray } from "./utils/Utils";
import QuizPage from "./components/QuizPage";
import Summary from "./components/Summary";

type Question0 = {
  category: string;
  question: string;
  correctAnswer: boolean;
};

export type TriviaDBQuestion = {
  category: string;
  question: string;
  correct_answer: string;
};

export type Question = {
  id: number;
  category: string;
  question: string;
  correctAnswer: boolean;
};

export type Answer = {
  id: number;
  answer: boolean;
};

export type SummaryAnswer = {
  id: number;
  question: string;
  answer: boolean;
  correctAnswer: boolean;
};

const DUMMY_QUESTIONS: Array<Question0> = [
  {
    category: "General",
    question: "Loading...",
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
  {
    category: "Science: Mathematics",
    question: "Is number theory beautifull?",
    correctAnswer: true,
  },
  {
    category: "Science: Mathematics",
    question: "Euler characteristics of product of 8 tori equals 88?",
    correctAnswer: false,
  },
  {
    category: "Science: Physics",
    question: "Is symplectic geometry related to classical mechanics?",
    correctAnswer: true,
  },
  {
    category: "Science: Physics",
    question: "Is symplectic geometry related to classical mechanics?",
    correctAnswer: true,
  },
  {
    category: "Science: Physics",
    question: "Is symplectic geometry related to classical mechanics?",
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
  const [currentQuestionNo, setCurrentQuestionNo] = useState<number>(-1);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Array<Answer>>([]);
  const [questions, setQuestions] = useState<Array<Question>>(
    addIdsToArray(DUMMY_QUESTIONS)
  );
  const [isRestarted, setIsRestarted] = useState<boolean>(false);

  const startQuizHandler = () => {
    setQuizStarted(true);
    setCurrentQuestionNo(1);
  };

  const finishQuizHandler = () => {
    setQuizStarted(false);
    setQuizFinished(true);
  };

  const selectAnswerHandler = (answer: Answer) => {
    setAnswers(answers.concat(answer));

    answer.id !== 10
      ? setCurrentQuestionNo((currentQuestionNo) => currentQuestionNo + 1)
      : setQuizFinished(true);
  };

  const resetQuizHandler = () => {
    setQuizStarted(true);
    setQuizFinished(false);
    setQuestions(addIdsToArray(DUMMY_QUESTIONS));
    setAnswers([]);
    setCurrentQuestionNo(1);
    setIsRestarted((isRestarted) => !isRestarted);
  };

  useEffect(() => {
    const url =
      "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => res.results)
      .then((res: Array<TriviaDBQuestion>) => {
        setQuestions(
          addIdsToArray(
            res.map((triviaDBQuestion) => ({
              category: triviaDBQuestion.category,
              question: triviaDBQuestion.question,
              correctAnswer: triviaDBQuestion.correct_answer === "True",
            }))
          )
        );
      });
  }, [isRestarted]);

  return (
    <>
      {!quizStarted && !quizFinished && (
        <WelcomeScreen startQuizHandler={startQuizHandler} />
      )}
      {quizStarted && !quizFinished && (
        <QuizPage
          questionNo={currentQuestionNo - 1}
          question={questions[currentQuestionNo - 1]}
          selectAnswerHandler={selectAnswerHandler}
        />
      )}
      {quizFinished && (
        <Summary
          summaryAnswers={answers.map((answer) => ({
            id: answer.id,
            question: questions[answer.id - 1].question,
            answer: answer.answer,
            correctAnswer: questions[answer.id - 1].correctAnswer,
          }))}
          resetQuizHandler={resetQuizHandler}
        />
      )}
    </>
  );
};

export default App;

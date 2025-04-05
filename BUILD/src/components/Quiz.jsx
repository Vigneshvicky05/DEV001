import Question from "./Question.jsx";
import { Summary } from "./Summary.jsx";
import QUESTIONS from "../questions.js";
import { useState, useCallback } from "react";
export const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
  const handleClickAnswer = useCallback(function handleClickAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prev) => {
      return [...prev, selectedAnswer];
    });
  },
  []);
  const handleSkipAnswer = useCallback(() => {
    handleClickAnswer(null);
  }, [handleClickAnswer]);
  if (quizIsComplete) {
    return <Summary userAnswer={userAnswers}></Summary>;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleClickAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

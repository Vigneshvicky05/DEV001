import image from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";
export const Summary = ({ userAnswer }) => {
  const skip = userAnswer.filter((ans) => ans === null);
  const correct = userAnswer.filter(
    (ans, index) => ans === QUESTIONS[index].answers[0]
  );
  const skipped = Math.round((skip.length / userAnswer.length) * 100);
  const correctAns = Math.round((correct.length / userAnswer.length) * 100);
  const wrongAns = 100 - skipped - correctAns;
  return (
    <div id="summary">
      <img src={image} alt="Quiz complete image"></img>
      <h2>QUIZ COMPLETED!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skipped}%</span>
          <span className="text">SKIPPED</span>
        </p>
        <p>
          <span className="number">{correctAns}%</span>
          <span className="text">CORRECT</span>
        </p>
        <p>
          <span className="number">{wrongAns}%</span>
          <span className="text">WRONG</span>
        </p>
      </div>
      <ol>
        {userAnswer.map((ans, index) => {
          let cssCLass = "user-answer";
          if (ans === null) {
            cssCLass += " skipped";
          } else if (ans === QUESTIONS[index].answers[0]) {
            cssCLass += " correct";
          } else {
            cssCLass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssCLass}>{ans ?? "SKIPPED"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

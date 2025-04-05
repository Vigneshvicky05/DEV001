import image from "../assets/quiz-logo.png";
export const Header = () => {
  return (
    <header>
      <img src={image} alt="Quiz logo"></img>
      <h1>React Quiz</h1>
    </header>
  );
};

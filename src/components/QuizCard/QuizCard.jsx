import { useState } from "react";
import "./quizCard.css";

const QuizCard = ({ question, answers }) => {
  const [result, setResult] = useState();

  return (
    <article className="quizCard-container">
      <h2>{question}</h2>
      {answers.map((answer) => (
        <button
          key={`${answer}-${answer.id}`}
          onClick={() => setResult(answer)}
        >
          {answer.answer}
        </button>
      ))}
      {result && <p>{result.correct ? "Correct" : "Not correct"}</p>}
    </article>
  );
};

export default QuizCard;

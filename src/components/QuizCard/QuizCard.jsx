import { useState } from "react";
import "./quizCard.css";

const Quiz = ({ question, answers }) => {
  const [result, setResult] = useState();

  return (
    <section>
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
    </section>
  );
};

export default Quiz;

import { useState } from "react";
import QuizCard from "../../components/QuizCard/QuizCard";
import { quiz } from "../../data/quiz";
import "./quiz.css";

const QuizPage = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSelect = (questionId, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    if (Object.entries(selectedAnswers).length === quiz.length) {
      setSubmitted(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleRestart = () => {
    setSubmitted(false);
    setSelectedAnswers({});
    setError(false);
  };

  const score = Object.entries(selectedAnswers).reduce((acc, [, answer]) => {
    return answer.correct ? acc + 1 : acc;
  }, 0);

  return (
    <main className="quizPage-container">
      <section className="quizPage-quizSection">
        {quiz.map((q) => (
          <QuizCard
            key={q.id}
            questionId={q.id}
            question={q.question}
            answers={q.answers}
            selectedAnswer={selectedAnswers[q.id]}
            onSelect={(answer) => handleSelect(q.id, answer)}
            showResult={submitted}
            submitted={submitted}
          />
        ))}
      </section>
      <section className="quizPage-btnSection">
        <button onClick={handleSubmit}>Submit</button>
        {submitted && (
          <>
            <p>
              Your score: {score} / {quiz.length}
            </p>
            <button onClick={handleRestart}>Restart</button>
          </>
        )}
        {error && <p>Please answer all questions.</p>}
      </section>
    </main>
  );
};

export default QuizPage;

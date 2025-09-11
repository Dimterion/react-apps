import { useState } from "react";
import QuizCard from "../../components/QuizCard/QuizCard";
import "./quiz.css";

const QuizPage = () => {
  const quiz = [
    {
      id: 1,
      question: "What is SPA?",
      answers: [
        { id: 1, answer: "Single Page Application", correct: true },
        { id: 2, answer: "Server Process Adjustment", correct: false },
        { id: 3, answer: "Semi Protected Authentication", correct: false },
      ],
    },
    {
      id: 2,
      question: "What is SSG?",
      answers: [
        { id: 1, answer: "Sign-in Server Generics", correct: false },
        { id: 2, answer: "Static Site Generation", correct: true },
        { id: 3, answer: "Single Soft Gap", correct: false },
      ],
    },
  ];

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
      <section>
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

import { useEffect, useState } from "react";
import QuizCard from "../../components/QuizCard/QuizCard";
import { quiz } from "../../data/quiz";
import "./quiz.css";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch(API_URL);

        if (!res.ok) throw new Error("Could not fetch data");

        const data = await res.json();

        console.log(data);

        setQuestions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

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
        <button
          className="quizPage-btn"
          onClick={handleSubmit}
          disabled={submitted}
        >
          Submit
        </button>
        {submitted && (
          <>
            <p className="quizPage-p">
              Your score: {score} / {quiz.length}
            </p>
            <button className="quizPage-btn" onClick={handleRestart}>
              Restart
            </button>
          </>
        )}
        {error && <p>Please answer all questions.</p>}
      </section>
    </main>
  );
};

export default QuizPage;

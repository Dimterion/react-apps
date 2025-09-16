import { useEffect, useState } from "react";
import QuizCard from "../../components/QuizCard/QuizCard";
import "./quiz.css";

const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);

      if (!res.ok) throw new Error("Could not fetch data");

      const data = await res.json();

      const displayedData = data.results.map((q) => {
        const allAnswers = [...q.incorrect_answers, q.correct_answer]
          .map((text) => ({
            text,
            correct: text === q.correct_answer,
          }))
          .sort(() => Math.random() - 0.5);

        return {
          ...q,
          answers: allAnswers,
        };
      });

      setQuestions(displayedData);
      setSelectedAnswers({});
      setSubmitted(false);
      setError(false);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleSelect = (questionIndex, answer) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: answer,
    }));
  };

  const handleSubmit = () => {
    if (Object.keys(selectedAnswers).length === questions.length) {
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

  const score = Object.values(selectedAnswers).reduce(
    (acc, answer) => (answer.correct ? acc + 1 : acc),
    0,
  );

  return (
    <main className="quizPage-container">
      <section className="quizPage-quizSection">
        {loading && <p>Loading questions...</p>}
        {!loading &&
          questions.map((q, index) => (
            <QuizCard
              key={index}
              questionId={index}
              question={q.question}
              answers={q.answers}
              selectedAnswer={selectedAnswers[index]}
              onSelect={(answer) => handleSelect(index, answer)}
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
              Your score: {score} / {questions.length}
            </p>
            <button className="quizPage-btn" onClick={handleRestart}>
              Restart
            </button>
            <button className="quizPage-btn" onClick={fetchQuestions}>
              New Quiz
            </button>
          </>
        )}
        {error && <p>Please answer all questions.</p>}
      </section>
    </main>
  );
};

export default QuizPage;

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

  return (
    <main className="quizPage-container">
      {quiz.map((q) => (
        <QuizCard key={q.id} question={q.question} answers={q.answers} />
      ))}
    </main>
  );
};

export default QuizPage;

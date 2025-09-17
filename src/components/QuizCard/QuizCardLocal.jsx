import "./quizCard.css";

// Local quiz example
//
// const quiz = [
//     {
//       id: 1,
//       question: "What is SPA?",
//       answers: [
//         { id: 1, answer: "Single Page Application", correct: true },
//         { id: 2, answer: "Server Process Adjustment", correct: false },
//         { id: 3, answer: "Semi Protected Authentication", correct: false },
//       ],
//     },
//     {
//       id: 2,
//       question: "What is SSG?",
//       answers: [
//         { id: 1, answer: "Sign-in Server Generics", correct: false },
//         { id: 2, answer: "Static Site Generation", correct: true },
//         { id: 3, answer: "Single Soft Gap", correct: false },
//       ],
//     },
//   ];

const QuizCardLocal = ({
  questionId,
  question,
  answers,
  selectedAnswer,
  onSelect,
  showResult,
  submitted,
}) => {
  return (
    <article className="quizCard-container">
      <h2 className="quizCard-h2">{question}</h2>
      {answers.map((answer) => (
        <button
          key={`${questionId}-${answer.id}`}
          onClick={() => onSelect(answer)}
          className={`quizCard-btn ${selectedAnswer?.id === answer.id ? "selected" : ""}`}
          disabled={submitted}
          aria-pressed={selectedAnswer?.id === answer.id}
        >
          {answer.answer}
        </button>
      ))}
      {showResult && selectedAnswer && (
        <p className={`quizCard-p ${selectedAnswer.correct ? "green" : "red"}`}>
          {selectedAnswer.correct ? "Correct" : "Not correct"}
        </p>
      )}
    </article>
  );
};

export default QuizCardLocal;

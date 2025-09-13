import "./quizCard.css";

const QuizCard = ({
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

export default QuizCard;

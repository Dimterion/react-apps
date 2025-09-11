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
      <h2>{question}</h2>
      {answers.map((answer) => (
        <button
          key={`${questionId}-${answer.id}`}
          onClick={() => onSelect(answer)}
          className={selectedAnswer?.id === answer.id ? "selected" : ""}
          disabled={submitted}
          aria-pressed={selectedAnswer?.id === answer.id}
        >
          {answer.answer}
        </button>
      ))}
      {showResult && selectedAnswer && (
        <p
          className={
            selectedAnswer.correct
              ? "quizCardResult-green"
              : "quizCardResult-red"
          }
        >
          {selectedAnswer.correct ? "Correct" : "Not correct"}
        </p>
      )}
    </article>
  );
};

export default QuizCard;

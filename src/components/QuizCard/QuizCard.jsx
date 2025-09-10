import "./quizCard.css";

const QuizCard = ({
  question,
  answers,
  selectedAnswer,
  onSelect,
  showResult,
}) => {
  return (
    <article className="quizCard-container">
      <h2>{question}</h2>
      {answers.map((answer) => (
        <button
          key={answer.id}
          onClick={() => onSelect(answer)}
          className={selectedAnswer?.id === answer.id ? "selected" : ""}
        >
          {answer.answer}
        </button>
      ))}
      {showResult && selectedAnswer && (
        <p>{selectedAnswer.correct ? "Correct" : "Not correct"}</p>
      )}
    </article>
  );
};

export default QuizCard;

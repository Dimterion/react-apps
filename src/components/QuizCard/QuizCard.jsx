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
  const decodeHTML = (html) => {
    const text = document.createElement("textarea");
    text.innerHTML = html;

    return text.value;
  };

  return (
    <article className="quizCard-container">
      <h2 className="quizCard-h2">{decodeHTML(question)}</h2>
      {answers.map((answer, index) => (
        <button
          key={`${questionId}-${index}`}
          onClick={() => onSelect(answer)}
          className={`quizCard-btn ${selectedAnswer?.text === answer.text ? "selected" : ""}`}
          disabled={submitted}
          aria-pressed={selectedAnswer?.text === answer.text}
        >
          {decodeHTML(answer.text)}
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

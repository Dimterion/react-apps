const TimerDisplay = ({ isRunning, time }) => {
  return (
    <div className="my-4 flex flex-col gap-4 text-2xl font-semibold sm:text-4xl">
      <span
        className={`${isRunning ? "spin-360" : "stop-spin"} inline-block py-2`}
      >
        ⏳
      </span>
      <p>Timer:</p>
      <span>{time}</span>
    </div>
  );
};

export default TimerDisplay;

const TimerDisplay = ({ isRunning, time }) => {
  return (
    <h2 className="my-4 text-2xl font-semibold sm:text-4xl">
      <span className={`${isRunning && "spin-360"} mx-2`}>⏳</span> Timer:{" "}
      {time}
    </h2>
  );
};

export default TimerDisplay;

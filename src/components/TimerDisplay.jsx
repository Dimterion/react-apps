const TimerDisplay = ({ time }) => {
  return (
    <h2 className="my-4 text-2xl font-semibold sm:text-4xl">
      ⏳ Timer: {time}
    </h2>
  );
};

export default TimerDisplay;

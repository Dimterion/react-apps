import { useEffect, useRef } from "react";

const TimerControls = ({ isRunning, onToggle, onReset }) => {
  const startBtnRef = useRef(null);

  useEffect(() => {
    if (startBtnRef.current) {
      startBtnRef.current.focus();
    }
  }, []);

  return (
    <>
      <button
        ref={startBtnRef}
        onClick={onToggle}
        className="mt-3 mr-3 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={onReset}
        className="mt-3 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
      >
        Reset
      </button>
    </>
  );
};

export default TimerControls;

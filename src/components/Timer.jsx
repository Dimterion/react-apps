import { useEffect, useRef, useState } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";

const Timer = () => {
  const timerRef = useRef(null);

  const [time, setTime] = useState(() => {
    return Number(localStorage.getItem("time") || 0);
  });
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    localStorage.setItem("time", time);
  }, [time]);

  const toggleTimer = () => {
    if (isRunning) {
      // Clear interval to stop the timer
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      // Start the timer
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    timerRef.current = null;
    localStorage.removeItem("time");
  };

  return (
    <section>
      <TimerDisplay time={time} isRunning={isRunning} />
      <TimerControls
        isRunning={isRunning}
        onToggle={toggleTimer}
        onReset={resetTimer}
      />
    </section>
  );
};

export default Timer;

import { useEffect, useRef, useState } from "react";

const Timer = () => {
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);

  const startTimer = () => {
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  useEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      <h2>Timer: {count} seconds</h2>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={startTimer}>Start</button>
    </div>
  );
};

export default Timer;

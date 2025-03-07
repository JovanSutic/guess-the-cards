import React, { useEffect, useState } from "react";

interface TimerProps {
  startTime: number;
  onTimeUp: () => void;
}

export default function Timer({ startTime, onTimeUp }: TimerProps) {
  const [timeLeft, setTimeLeft] = useState(startTime);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  return <div className="w-full text-md text-right font-semibold">Time Left: {timeLeft} seconds</div>;
}

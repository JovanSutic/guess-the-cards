import React, { useEffect } from "react";
import { dispatch, useCustomStore } from "../utils/store";
import { StoreStateType } from "../types/app.types";

interface TimerProps {
  startTime: number;
  onTimeUp: () => void;
}

export default function Timer({ onTimeUp }: TimerProps) {
  const { currentTime } = useCustomStore<StoreStateType>("currentTime");

  useEffect(() => {
    if (currentTime <= 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      dispatch({
        type: "SET_TIME",
        part: "currentTime",
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentTime, onTimeUp]);

  return (
    <div className="w-full text-md text-right font-semibold">
      Time Left: {currentTime} seconds
    </div>
  );
}

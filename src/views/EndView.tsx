import React from "react";
import Typography from "../components/Typography";
import Button from "../components/Button";
import { dispatch, useCustomStore } from "../utils/store";
import { StoreStateType } from "../types/app.types";

export default function EndView() {
  const { correctCount, gameCount } = useCustomStore<StoreStateType>([
    "correctCount",
    "gameCount",
  ]);
  return (
    <div className="w-full flex flex-col align-center">
      <div className="mb-6">
        <div className="text-center">
          <Typography variant="h2" text="Your game has ended" />
        </div>
      </div>

      <div>
        <div className="text-center mb-2">
          <Typography text={`Games played: ${gameCount}`} />
        </div>
        <div className="text-center">
          <Typography text={`Total correct answers: ${correctCount}`} />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Button
          text="Play new game"
          onClick={() =>
            dispatch({
              type: "NEW_GAME",
              payload: { view: "round" },
              part: [
                "activeView",
                "time",
                "currentTime",
                "userAnswer",
                "roundCount",
                "usedCards",
                "correctCount",
              ],
            })
          }
        />
      </div>
    </div>
  );
}

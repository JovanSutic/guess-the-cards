import React from "react";
import Typography from "../components/Typography";
import Button from "../components/Button";
import { store, useCustomStore } from "../utils/store";
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
          <Typography
            text={`Total correct answers: ${correctCount}`}
          />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Button
          text="Play new game"
          onClick={() =>
            store.setState(
              [
                "activeView",
                "time",
                "currentTime",
                "userAnswer",
                "roundCount",
                "usedCards",
                "correctCount",
              ],
              (state: StoreStateType) => ({
                ...state,
                activeView: "round",
                currentTime: 100,
                time: 100,
                correctAnswer: "",
                userAnswer: "",
                roundCount: 1,
                gameCount: state.gameCount + 1,
                usedCards: [],
              })
            )
          }
        />
      </div>
    </div>
  );
}

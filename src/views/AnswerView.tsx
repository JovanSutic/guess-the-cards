import React from "react";
import Typography from "../components/Typography";
import Button from "../components/Button";
import { store, useCustomStore } from "../utils/store";
import { StoreStateType } from "../types/app.types";

export default function AnswerView() {
  const { correctAnswer, userAnswer } = useCustomStore<StoreStateType>([
    "correctAnswer",
    "userAnswer",
  ]);

  return (
    <div className="w-full flex flex-col align-center">
      <div>
        {userAnswer === correctAnswer ? (
          <>
            <div className="text-center mb-4">
              <Typography variant="h3" text="Your answer is: Correct" />
            </div>
            <div className="text-center">
              <Typography variant="p" text="You gain additional 5 seconds!!!" />
            </div>
          </>
        ) : (
          <div className="text-center mb-4">
            <Typography variant="h3" text="Your answer is: Incorrect" />
          </div>
        )}
      </div>
      <div className="flex justify-center mt-10">
        <Button
          text="Play next round"
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
                currentTime:
                  userAnswer === correctAnswer
                    ? state.currentTime + 5
                    : state.currentTime,
                time:
                  userAnswer === correctAnswer
                    ? state.currentTime + 5
                    : state.currentTime,
                userAnswer: "",
                roundCount: state.roundCount + 1,
                correctCount: state.correctCount + 1,
                usedCards: state.usedCards.length > 49 ? [] : state.usedCards,
              })
            )
          }
        />
      </div>
    </div>
  );
}

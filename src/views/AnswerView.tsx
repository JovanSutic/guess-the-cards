import React from "react";
import Typography from "../components/Typography";
import Button from "../components/Button";
import { store, useCustomStore } from "../utils/store";
import { StoreStateType } from "../types/app.types";
import { useFetchWord } from "../utils/useFetchWord";
import { getAnswerSentence } from "../utils/helpers";

export default function AnswerView() {
  const { data, error: fetchError, loading } = useFetchWord();
  const { correctAnswer, userAnswer } = useCustomStore<StoreStateType>([
    "correctAnswer",
    "userAnswer",
  ]);

  return (
    <div className="w-full flex flex-col align-center">
      <div>
        <div className="text-center mb-4 h-[80px]">
          {loading && <Typography text="Loading funny message..." />}
          {fetchError && !loading && (
            <Typography
              text="There has been an error with random word API call."
              style="error"
            />
          )}
          {data && !loading && !fetchError && (
            <Typography text={getAnswerSentence(data)} style="tip" />
          )}
        </div>
        <div className="text-center mb-4">
          <Typography
            variant="h3"
            text={`Your answer is: ${
              userAnswer === correctAnswer ? "Correct" : "Incorrect"
            }`}
          />
        </div>
        {userAnswer === correctAnswer && (
          <div className="text-center">
            <Typography text="You gain additional 5 seconds!!!" />
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

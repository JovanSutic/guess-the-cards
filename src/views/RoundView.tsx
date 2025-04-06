import React, { useEffect, useMemo } from "react";
import Timer from "../components/Timer";
import Card from "../components/Card";
import Answer from "../components/Answer";
import Button from "../components/Button";
import { getAnswers, getCards } from "../utils/helpers";
import { dispatch, useCustomStore } from "../utils/store";
import { StoreStateType } from "../types/app.types";

export default function RoundView() {
  const { usedCards, time, userAnswer } = useCustomStore<StoreStateType>([
    "usedCards",
    "time",
    "userAnswer",
  ]);
  const cards = useMemo(() => {
    return getCards(usedCards);
  }, []);

  const roundAnswer = useMemo(() => {
    if (cards) {
      return getAnswers(cards);
    }
  }, [cards]);

  useEffect(() => {
    if (roundAnswer.correct) {
      dispatch({
        type: "CORRECT_ANSWER",
        payload: roundAnswer.correct,
        part: "correctAnswer",
      });
    }
  }, [roundAnswer]);

  return (
    <div className="w-full flex flex-col align-center">
      <div>
        <Timer
          startTime={time}
          onTimeUp={() =>
            dispatch({
              type: "CHANGE_VIEW",
              payload: { view: "end" },
              part: "activeView",
            })
          }
        />
      </div>

      <div className="flex flex-row gap-1 mt-10 justify-center">
        {cards.map((item) => (
          <Card cardSymbol={item} key={item} />
        ))}
      </div>

      <div className="flex flex-col gap-2 mt-10">
        {(roundAnswer?.answers || []).map((item) => (
          <Answer
            key={item}
            text={item}
            isSelected={item === userAnswer}
            onSelect={() =>
              dispatch({
                type: "ASSIGN_ANSWER",
                payload: item,
                part: "userAnswer",
              })
            }
          />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button
          text="Submit answer"
          disabled={!userAnswer}
          onClick={() =>
            dispatch({
              type: "SUBMIT_ANSWER",
              payload: { view: "answer", cards: cards },
              part: ["activeView", "usedCards"],
            })
          }
        />
      </div>
    </div>
  );
}

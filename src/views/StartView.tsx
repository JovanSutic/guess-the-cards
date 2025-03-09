import React from "react";
import Typography from "../components/Typography";
import Button from "../components/Button";
import { store } from "../utils/store";
import { StoreStateType } from "../types/app.types";

export default function StartView() {
  return (
    <div className="w-full flex flex-col align-center">
      <div className="text-center">
        <Typography variant="h2" text="Guess the cards" />
      </div>
      <div className="flex justify-center mt-10">
        <Button
          text="Play new game"
          onClick={() => store.setState(["activeView", "gameCount", "roundCount"], (state: StoreStateType) => ({
            ...state,
            activeView: "round",
            gameCount: state.gameCount + 1,
            roundCount: 1,
          }))}
        />
      </div>
    </div>
  );
}

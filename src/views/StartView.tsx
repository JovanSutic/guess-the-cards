import React from "react";
import Typography from "../components/Typography";
import Button from "../components/Button";

export default function StartView() {
  return (
    <div className="w-full flex flex-col align-center">
      <div className="text-center">
        <Typography variant="h2" text="Guess the cards" />
      </div>
      <div className="flex justify-center mt-10">
        <Button
          text="Play new game"
          onClick={() => console.log("Play")}
        />
      </div>
    </div>
  );
}

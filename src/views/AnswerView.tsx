import React from "react";
import Typography from "../components/Typography";
import Button from "../components/Button";

export default function AnswerView() {
  return (
    <div className="w-full flex flex-col align-center">
      <div>
        <div className="text-center mb-4">
          <Typography variant="h3" text="Your answer is: Correct" />
        </div>
        <div className="text-center">
          <Typography variant="p" text="You gain additional 5 seconds!!!" />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Button text="Play next round" onClick={() => console.log("Play")} />
      </div>
    </div>
  );
}

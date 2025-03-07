import React from "react";
import Typography from "../components/Typography";
import Button from "../components/Button";

export default function EndView() {
  return (
    <div className="w-full flex flex-col align-center">
      <div className="mb-6">
        <div className="text-center">
          <Typography variant="h2" text="Your game has ended" />
        </div>
      </div>

      <div>
        <div className="text-center mb-2">
          <Typography variant="p" text="Previous games played: 5" />
        </div>
        <div className="text-center">
          <Typography variant="p" text="Total correct answers: 25" />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <Button text="Play new game" onClick={() => console.log("Play")} />
      </div>
    </div>
  );
}

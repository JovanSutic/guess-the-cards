import React, { useState } from "react";
import Timer from "../components/Times";
import Card from "../components/Card";
import Answer from "../components/Answer";
import Button from "../components/Button";

export default function RoundView() {
  const [selected, setSelected] = useState<string>("");
  return (
    <div className="w-full flex flex-col align-center">
      <div>
        <Timer
          startTime={100}
          onTimeUp={() => console.log("Your time is up")}
        />
      </div>

      <div className="flex flex-row gap-1 mt-10 justify-center">
        {["Ad", "As", "Jc", "Th", "2d"].map((item) => (
          <Card cardSymbol={item} key={item} />
        ))}
      </div>

      <div className="flex flex-col gap-2 mt-10">
        {["Two Pair", "Full Hand", "Straight Flush"].map((item) => (
          <Answer key={item} text={item} onSelect={() => setSelected(item)} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Button
          text="Submit answer"
          disabled={!selected}
          onClick={() => console.log("Answer submit")}
        />
      </div>
    </div>
  );
}

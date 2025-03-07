import React from "react";

interface CardProps {
  cardSymbol: string;
}

export default function Card({ cardSymbol }: CardProps) {
  const getSuitColor = (suit: string) => {
    switch (suit) {
      case "d":
        return "bg-blue-200";
      case "h":
        return "bg-red-200";
      case "s":
        return "bg-gray-200";
      case "c":
        return "bg-green-200";
      default:
        return "bg-white";
    }
  };

  const suit = cardSymbol.slice(-1);

  const cardColor = getSuitColor(suit);

  return (
    <div
      className={`w-20 h-28 flex justify-center items-center text-2xl font-bold ${cardColor} border border-gray-400 rounded-md`}
    >
      {cardSymbol}
    </div>
  );
}

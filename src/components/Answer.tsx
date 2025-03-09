import React from "react";

interface AnswerProps {
  text: string;
  isSelected: boolean;
  onSelect: () => void;
}

export default function Answer({ text, isSelected, onSelect }: AnswerProps) {

  return (
    <button
      onClick={onSelect}
      className={`px-4 py-2 rounded-full text-lg font-medium cursor-pointer transition-all duration-300
        ${
          isSelected
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-800 hover:bg-gray-300"
        }`}
    >
      {text}
    </button>
  );
}

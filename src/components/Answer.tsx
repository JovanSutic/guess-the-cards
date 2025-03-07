// src/components/AnswerChip.tsx
import React, { useState } from "react";

interface AnswerProps {
  text: string;
  onSelect: (isSelected: boolean) => void;
}

export default function Answer({ text, onSelect }: AnswerProps) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    const newSelectedState = !isSelected;
    setIsSelected(newSelectedState);
    onSelect(newSelectedState); // Pass the new state back to the parent component
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-full text-lg font-medium transition-all duration-300
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

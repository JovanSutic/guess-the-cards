import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function Button({
  text,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type="button"
      className={`px-4 py-2 rounded-lg text-white font-semibold transition-colors  ${
        disabled
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

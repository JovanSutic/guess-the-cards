import React from "react";

interface TypographyProps {
  text: string;
  variant?: "h1" | "h2" | "h3" | "p";
  style?: "regular" | "error" | "tip";
}

export default function Typography({ text, variant = "p", style = "regular" }: TypographyProps) {
  let typographyClass = `${style === "error" ? "text-red-600" : "text-gray-900"} ${style === "tip" && 'italic'}`;

  switch (variant) {
    case "h1":
      typographyClass += " text-4xl font-bold";
      break;
    case "h2":
      typographyClass += " text-3xl font-semibold";
      break;
    case "h3":
      typographyClass += " text-2xl font-medium";
      break;
    case "p":
      typographyClass += " text-lg";
      break;
    default:
        typographyClass += " text-md";
      break;
  }

  const Component = variant;

  return <Component className={typographyClass}>{text}</Component>;
}

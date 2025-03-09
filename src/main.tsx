import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeStore } from "./utils/store";
import { StoreStateType } from "./types/app.types";

const rootElement = document.getElementById("app") as HTMLElement;

if (!rootElement) {
  throw new Error("Could not find the root element");
}
const root = ReactDOM.createRoot(rootElement);

initializeStore<StoreStateType>({
  activeView: "start",
  gameCount: 0,
  roundCount: 0,
  correctCount: 0,
  usedCards: [],
  correctAnswer: "",
  userAnswer: "",
  time: 100,
  currentTime: 100,
});

root.render(<App />);

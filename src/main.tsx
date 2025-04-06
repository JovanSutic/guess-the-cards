import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { startStore } from "./utils/startStore";

const rootElement = document.getElementById("app") as HTMLElement;

if (!rootElement) {
  throw new Error("Could not find the root element");
}
const root = ReactDOM.createRoot(rootElement);
startStore();

root.render(<App />);

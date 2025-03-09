import React from "react";
import Layout from "./components/Layout";
import StartView from "./views/StartView";
import RoundView from "./views/RoundView";
import AnswerView from "./views/AnswerView";
import EndView from "./views/EndView";
import { useCustomStore } from "./utils/store";
import { StoreStateType } from "./types/app.types";

export default function App() {
  const { activeView } = useCustomStore<StoreStateType>("activeView");
  return (
    <Layout>
      <>
        {activeView === "start" && <StartView />}
        {activeView === "round" && <RoundView />}
        {activeView === "answer" && <AnswerView />}
        {activeView === "end" && <EndView />}
      </>
    </Layout>
  );
}

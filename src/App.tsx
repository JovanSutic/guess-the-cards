import React from "react";
import StartView from "./views/StartView";
import Layout from "./components/Layout";
import EndView from "./views/EndView";
import AnswerView from "./views/AnswerView";
import RoundView from "./views/RoundView";

export default function App() {
  return (
    <Layout>
      <RoundView />
      {/* <AnswerView /> */}
      {/* <EndView /> */}
      {/* <StartView /> */}
    </Layout>
  );
}

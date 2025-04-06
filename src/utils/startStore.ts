import { initializeStore, store } from "./store";
import { StoreStateType } from "../types/app.types";

export const startStore = () => {
  initializeStore<StoreStateType>({
    activeView: "start",
    gameCount: 0,
    roundCount: 0,
    correctCount: 0,
    usedCards: [],
    correctAnswer: "",
    userAnswer: "",
    time: 50,
    currentTime: 50,
  });

  store.addReducer("START_GAME", (state, action) => ({
    ...state,
    activeView: action.payload.view,
    gameCount: state.gameCount + 1,
    roundCount: 1,
  }));

  store.addReducer("NEW_GAME", (state, action) => ({
    ...state,
    activeView: action.payload.view,
    currentTime: 50,
    time: 50,
    correctAnswer: "",
    userAnswer: "",
    roundCount: 1,
    gameCount: state.gameCount + 1,
    usedCards: [],
  }));

  store.addReducer("SET_TIME", (state) => ({
    ...state,
    currentTime: state.currentTime - 1,
  }));

  store.addReducer("ASSIGN_ANSWER", (state, action) => ({
    ...state,
    userAnswer: action.payload,
  }));

  store.addReducer("SUBMIT_ANSWER", (state, action) => ({
    ...state,
    activeView: action.payload.view,
    usedCards: [...state.usedCards, ...action.payload.cards],
  }));

  store.addReducer("CORRECT_ANSWER", (state, action) => ({
    ...state,
    correctAnswer: action.payload,
  }));

  store.addReducer("NEXT_ROUND", (state, action) => ({
    ...state,
    activeView: action.payload.view,
    currentTime: action.payload.isCorrect
      ? state.currentTime + 5
      : state.currentTime,
    time: action.payload.isCorrect ? state.currentTime + 5 : state.currentTime,
    userAnswer: "",
    roundCount: state.roundCount + 1,
    correctCount: state.correctCount + 1,
    usedCards: state.usedCards.length > 49 ? [] : state.usedCards,
  }));

  store.addReducer("CHANGE_VIEW", (state, action) => ({
    ...state,
    activeView: action.payload.view,
  }));
};

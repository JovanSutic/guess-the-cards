/* eslint-disable @typescript-eslint/no-explicit-any */
export const activeViewType = ["start", "end", "round", "answer"] as const;
export type ActiveViewType = (typeof activeViewType)[number];

export const reducerType = [
  "START_GAME",
  "NEW_GAME",
  "SET_TIME",
  "ASSIGN_ANSWER",
  "SUBMIT_ANSWER",
  "CORRECT_ANSWER",
  "NEXT_ROUND",
  "CHANGE_VIEW",
] as const;

export type ReducerType = (typeof reducerType)[number];

export interface StoreStateType {
  activeView: ActiveViewType;
  gameCount: number;
  roundCount: number;
  usedCards: string[];
  correctAnswer: string;
  userAnswer: string;
  time: number;
  currentTime: number;
  correctCount: number;
}

export type StateKey<T extends Record<string, unknown>> = keyof T;
export type StateKeyOrKeys<T extends Record<string, unknown>> =
  | StateKey<T>
  | StateKey<T>[];
export type Action<T = any> = {
  type: string;
  payload?: T;
  part: string | string[];
};
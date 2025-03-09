export const activeViewType = [
    "start",
    "end",
    "round",
    "answer",
  ] as const;
  export type ActiveViewType = (typeof activeViewType)[number];

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
import pokersolver from "pokersolver";

const getRandomItems = (arr: string[], numItems: number) => {
  return arr.sort(() => Math.random() - 0.5).slice(0, numItems);
};

const shuffleArr = (array: string[]) => {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
};

export const getCards = (usedCards: string[]): string[] => {
  const fullDeck = [
    "2d",
    "3d",
    "4d",
    "5d",
    "6d",
    "7d",
    "8d",
    "9d",
    "10d",
    "Jd",
    "Qd",
    "Kd",
    "Ad",
    "2c",
    "3c",
    "4c",
    "5c",
    "6c",
    "7c",
    "8c",
    "9c",
    "10c",
    "Jc",
    "Qc",
    "Kc",
    "Ac",
    "2h",
    "3h",
    "4h",
    "5h",
    "6h",
    "7h",
    "8h",
    "9h",
    "10h",
    "Jh",
    "Qh",
    "Kh",
    "Ah",
    "2s",
    "3s",
    "4s",
    "5s",
    "6s",
    "7s",
    "8s",
    "9s",
    "10s",
    "Js",
    "Qs",
    "Ks",
    "As",
  ];

  if (usedCards.length === 0) {
    return getRandomItems(fullDeck, 5);
  }

  const usedCardsSet = new Set(usedCards);
  const availableCards = fullDeck.filter((card) => !usedCardsSet.has(card));

  return getRandomItems(availableCards, 5);
};

interface AnserOptions {
  answers: string[];
  correct: string;
}

export const getAnswers = (cards: string[]): AnserOptions => {
  const allAnswers = {
    StraightFlush: "Straight Flush",
    FourofaKind: "Four of a Kind",
    FullHouse: "Full House",
    Flush: "Flush",
    Straight: "Straight",
    ThreeofaKind: "Three of a Kind",
    TwoPair: "Two Pair",
    Pair: "One Pair",
    HighCard: "High Card",
  };

  if (cards.length) {
    const bestAnswer = pokersolver.Hand.solve(cards);
    const options = Object.keys(allAnswers).filter(
      (item) => item !== bestAnswer.name.replace(/\s+/g, "")
    );

    const wrongOptions = getRandomItems(options, 2);
    const res = [
      allAnswers[bestAnswer.name.replace(/\s+/g, "")],
      allAnswers[wrongOptions[0]],
      allAnswers[wrongOptions[1]],
    ];

    shuffleArr(res);

    return {
      answers: res,
      correct: allAnswers[bestAnswer.name.replace(/\s+/g, "")],
    };
  }

  return { answers: [], correct: "" };
};

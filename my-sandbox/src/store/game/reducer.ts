import { Constants, GameActions, IGameState } from "./types";

const init: IGameState = {
  playerName: "mozart",
  loading: false,
  cards: [],
};

function shuffle(array: number[]) {
  const result = array.slice();
  let currentIndex = result.length;

  while (currentIndex > 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [result[currentIndex], result[randomIndex]] = [result[randomIndex], result[currentIndex]];
  }

  return result;
}

export function gameReducer(state: IGameState = init, action: GameActions): IGameState {
  switch (action.type) {
    case Constants.SET_PLAYER_NAME:
      console.log(`TRACER game reducer player name`);
      return { ...state, playerName: action.payload.value };
    case Constants.SET_LOADING:
      console.log(`TRACER game reducer loading`);
      return { ...state, loading: action.payload.value };
    case Constants.SET_CARDS:
      console.log(`TRACER game reducer cards`);
      const shuffledCards: number[] = shuffle(action.payload.value);
      return { ...state, cards: shuffledCards };
    default:
      return state;
  }
}

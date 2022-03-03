import { Constants, GameActions, IGameState } from "./types";

const init: IGameState = {
  playerName: "mozart",
};

export function gameReducer(state: IGameState = init, action: GameActions): IGameState {
  switch (action.type) {
    case Constants.SET_PLAYER_NAME:
      return { ...state, playerName: action.payload.value };
    default:
      return state;
  }
}

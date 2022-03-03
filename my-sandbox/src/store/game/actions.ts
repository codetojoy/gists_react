import { action } from "typesafe-actions";
import { Constants } from "./types";

export function setPlayerName(value: string) {
  return action(Constants.SET_PLAYER_NAME, {
    value,
  });
}

export function setLoading(value: boolean) {
  return action(Constants.SET_LOADING, {
    value,
  });
}

export function setCards(value: number[]) {
  return action(Constants.SET_CARDS, {
    value,
  });
}

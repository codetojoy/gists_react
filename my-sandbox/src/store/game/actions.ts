import { action } from "typesafe-actions";
import { Constants } from "./types";

export function setPlayerName(value: string) {
  return action(Constants.SET_PLAYER_NAME, {
    value,
  });
}

import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type GameActions = ActionType<typeof actions>;

export interface IGameState {
  playerName: string;
}

export enum Constants {
  SET_PLAYER_NAME = "PLAYER_NAME",
}

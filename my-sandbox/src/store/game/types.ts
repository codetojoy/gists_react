import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type GameActions = ActionType<typeof actions>;

export interface IGameState {
  playerName: string;
  loading: boolean;
  cards: number[];
}

export enum Constants {
  SET_PLAYER_NAME = "PLAYER_NAME",
  SET_LOADING = "LOADING",
  SET_CARDS = "CARDS",
}

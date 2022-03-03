import { Dispatch } from "redux";
import * as actions from "./actions";
import { GameActions } from "./types";

function sleep(timeout: number) {
  return new Promise((resolve) => setTimeout(() => resolve(1), timeout));
}

export async function setCardsAsync(dispatch: Dispatch<GameActions>, cards: number[]) {
  dispatch(actions.setLoading(true));

  await sleep(3000);

  dispatch(actions.setCards(cards));
  dispatch(actions.setLoading(false));
}

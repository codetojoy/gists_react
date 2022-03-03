import React, { useRef } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { setPlayerName } from "../store/game/actions";
import { setCardsAsync } from "../store/game/async-actions";
import classes from "./Game.module.css";

const Game: React.FC<{}> = (props) => {
  const dispatch = useAppDispatch();
  const nameRef = useRef<HTMLInputElement>(null);
  const game = useAppSelector((state) => state.game);

  const submitHandler = (event: any) => {
    event.preventDefault();
    let value = "N/A";
    if (nameRef.current && nameRef.current.value) {
      value = nameRef.current.value;
    }
    dispatch(setPlayerName(value));
    console.log(`TRACER hello from Game:submitHandler ${value}`);
  };
  const generateCardsHandler = () => {
    console.log(`TRACER generate cards`);
    const cards: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    setCardsAsync(dispatch, cards);
  };
  const cardsContent = game.cards.map((c: number) => {
    return <li key={c}>{c}</li>;
  });
  const status = game.loading ? "loading..." : "ok";
  return (
    <div className={classes.game}>
      <hr />
      <p>TRACER v3 hello from game</p>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Player name:</label>
        <input ref={nameRef} type="text" id="name" defaultValue={game.playerName} />
        <button type="submit">save player name</button>
      </form>
      <p>player name is {game.playerName}</p>
      <hr />
      <p>cards:</p>
      <ul>{cardsContent}</ul>
      <button type="button" onClick={generateCardsHandler}>
        generate cards
      </button>
      <hr />
      <p>status: {status}</p>
    </div>
  );
};

export default Game;

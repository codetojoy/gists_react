import React, { useRef } from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { setPlayerName } from "../store/game/actions";

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
  return (
    <div>
      <hr />
      <p>TRACER v3 hello from game</p>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Player name:</label>
        <input ref={nameRef} type="text" id="name" defaultValue={game.playerName} />
        <button type="submit">save player name</button>
      </form>
      <p>player name is {game.playerName}</p>
      <hr />
    </div>
  );
};

export default Game;

import React from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { setPlayerName  } from "../store/game/actions";

const Game: React.FC<{}> = (props) => {
  const game = useAppSelector((state) => state.game);
/*
  const dispatch = useAppDispatch();
  const rowClickHandler = () => {
    console.log(`TRACER row click`);
    dispatch(setNumRows(config.numRows + 1));
  };
  const colClickHandler = () => {
    console.log(`TRACER col click`);
    dispatch(setNumCols(config.numCols + 1));
  };
*/
  return (
    <div>
      <p>TRACER v3 hello from game</p>
      <p>TRACER player: {game.playerName}</p>
    </div>
  );
};

export default Game;

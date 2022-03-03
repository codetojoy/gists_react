import React from "react";
import { useAppSelector, useAppDispatch } from "../hooks";
import { setNumRows, setNumCols } from "../store/config/actions";

const Foobar: React.FC<{}> = (props) => {
  const config = useAppSelector((state) => state.config);
  const dispatch = useAppDispatch();
  const rowClickHandler = () => {
    console.log(`TRACER row click`);
    dispatch(setNumRows(config.numRows + 1));
  };
  const colClickHandler = () => {
    console.log(`TRACER col click`);
    dispatch(setNumCols(config.numCols + 1));
  };
  return (
    <div>
      <p>TRACER Foobar</p>
      <p>TRACER # rows: {config.numRows}</p>
      <p>TRACER # cols: {config.numCols}</p>
      <button onClick={rowClickHandler}>bump row value</button>
      <button onClick={colClickHandler}>bump col value</button>
    </div>
  );
};

export default Foobar;

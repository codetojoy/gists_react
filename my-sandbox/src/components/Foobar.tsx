// import { useDispatch, useSelector } from "react-redux";
import React from "react";
// import { IRootState } from "../store";
// import { IConfigState } from "../store/config/types";
import { useAppSelector, useAppDispatch } from "../hooks";
import { setNumRows, setNumCols } from "../store/config/actions";

const Foobar: React.FC<{}> = (props) => {
  /*
  const config: IConfigState = useSelector((state: IRootState) => {
    console.log(`TRACER Foobar:`);
    console.table(state);
    console.log(`TRACER Foobar numRows: ${state.config.numRows}`);
    return state.config;
  });
  const dispatch = useDispatch();
  */
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
      <p>TRACER v3 hello from foobar</p>
      <p>TRACER # rows: {config.numRows}</p>
      <p>TRACER # cols: {config.numCols}</p>
      <button onClick={rowClickHandler}>bump row value</button>
      <button onClick={colClickHandler}>bump col value</button>
    </div>
  );
};

export default Foobar;

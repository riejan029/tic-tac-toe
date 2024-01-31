import type { ReactElement, ReactNode } from "react";
import type { BoardProps } from "./type";

const Board = (props: BoardProps): ReactElement => {
  const { squares, onClick } = props;
  const renderSquare = (i: number): ReactNode => (
    <button className="square" onClick={() => onClick(i)}>
      {squares[i] || ""}
    </button>
  );

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;

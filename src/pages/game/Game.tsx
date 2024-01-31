import type { ReactElement } from "react";
import TicTacToe from "./tic-tac-toe";

const Game = (): ReactElement => {
  return (
    <div className="board">
      <TicTacToe />
    </div>
  );
};

export default Game;

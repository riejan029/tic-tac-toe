import type { ReactElement } from "react";
import TicTacToe from "./tic-tac-toe";
import GameRecords from "./game-records";

const Game = (): ReactElement => {
  return (
    <div className="board">
      <GameRecords />
      <TicTacToe />
    </div>
  );
};

export default Game;

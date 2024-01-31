import type { ReactElement } from "react";
import type { SquareValue } from "./board/type";

import { useState, useEffect } from "react";

import Board from "./board/Board";
import { useSelector } from "react-redux";
import { getPlayers } from "~/redux/slice/playerSlice";

const Game = (): ReactElement => {
  const [board, setBoard] = useState<Array<SquareValue>>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const players = useSelector(getPlayers);
  const player1 = players[0].name;
  const player2 = players[1].name;
  const calculateWinner = (squares: SquareValue[]): SquareValue => {
    const lines: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  };

  const isBoardFull = (squares: SquareValue[]): boolean => {
    return squares.every((square) => square !== null);
  };

  const handleClick = (i: number) => {
    const newBoard = board.slice();

    if (calculateWinner(newBoard) || newBoard[i]) {
      return;
    }

    newBoard[i] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const determineStatus = (): string => {
    const winner = calculateWinner(board);
    const isDraw = isBoardFull(board) && !winner;

    if (winner) {
      return `Winner: ${winner === "X" ? player1 : player2}`;
    } else if (isDraw) {
      return "It's a draw!";
    } else {
      return `${xIsNext ? player1 : player2}'s turn`;
    }
  };

  useEffect(() => {
    determineStatus();
  }, [board, xIsNext, player1, player2]);

  return (
    <div className="board">
      <div className="status">{determineStatus()}</div>
      <Board squares={board} onClick={handleClick} />
    </div>
  );
};

export default Game;

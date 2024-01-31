import type { ReactElement } from "react";
import type { SquareValue } from "./board/type";

import { useState, useEffect } from "react";

import Board from "./board/Board";
import { useSelector } from "react-redux";
import { getPlayers } from "~/redux/slice/playerSlice";
import Button from "~/components/button";
import { useDispatch } from "react-redux";
import { setStart } from "~/redux/slice/sessionSlice";

const Game = (): ReactElement => {
  const [board, setBoard] = useState<Array<SquareValue>>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [win, setWin] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const players = useSelector(getPlayers);
  const dispatch = useDispatch();
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

  const determineStatus = (): { status: boolean; label: string } => {
    const winner = calculateWinner(board);
    const isDraw = isBoardFull(board) && !winner;

    if (winner) {
      return {
        label: `Winner: ${winner === "X" ? player1 : player2}`,
        status: true,
      };
    } else if (isDraw) {
      return {
        label: "It's a draw!",
        status: true,
      };
    } else {
      return {
        label: `${xIsNext ? player1 : player2}'s turn`,
        status: false,
      };
    }
  };

  useEffect(() => {
    determineStatus();
    if (determineStatus().status) {
      setWin(true);
    }
  }, [board, xIsNext, player1, player2]);

  const handleReset = (): void => {
    // Reset the board
    setBoard(Array(9).fill(null));
    // Reset the turn to player1
    setXIsNext(true);
    setWin(false);
    if (win) {
      setCount(count + 1);
    }
  };

  const handleExit = (): void => {
    dispatch(setStart(false));
  };

  return (
    <div className="board">
      <div className="header-game">
        <h2 className="status">{determineStatus().label}</h2>
        <h2 className="status">{`Round: ${count}`}</h2>
      </div>
      <Board squares={board} onClick={handleClick} />
      <div className="footer">
        <Button type="button" onClick={handleReset}>
          Continue
        </Button>
        <Button type="button" onClick={handleExit}>
          Exit
        </Button>
      </div>
    </div>
  );
};

export default Game;

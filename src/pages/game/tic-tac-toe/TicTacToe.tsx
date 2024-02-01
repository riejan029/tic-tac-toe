import type { ReactElement } from "react";
import type { SquareValue } from "../board/type";

import { useState, useEffect } from "react";

import { useSelector } from "react-redux";
import {
  getSession,
  initialValue,
  setSession,
} from "~/redux/slice/playerSlice";
import Button from "~/components/button";
import { useDispatch } from "react-redux";
import { setStart } from "~/redux/slice/sessionSlice";
import Board from "../board/Board";
import { AddRecordParams, AddRecordResponse } from "~/api/types";
import { addRecord } from "~/api/api";
import GameRecords from "../game-records";
import Loading from "~/components/loading";

const TicTacToe = (): ReactElement => {
  const [triggerRerender, setTriggerRerender] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [board, setBoard] = useState<Array<SquareValue>>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [win, setWin] = useState<boolean>(false);
  const [nameOfWinner, setNameOfWinner] = useState<string>("");
  const [count, setCount] = useState<number>(1);
  const session = useSelector(getSession);

  const dispatch = useDispatch();
  const player1 = {
    name: session.players[0].name,
    position: session.players[0].position,
  };
  const player2 = {
    name: session.players[1].name,
    position: session.players[1].position,
  };

  const [players, setPlayers] = useState(session.players);

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

  const determineStatus = (): {
    status: boolean;
    label: string;
    winner?: { name: string; position: string };
  } => {
    const winner = calculateWinner(board);
    const isDraw = isBoardFull(board) && !winner;

    if (winner) {
      const winnerValue = winner === "X" ? player1 : player2;
      return {
        label: `Winner: ${winnerValue.name}`,
        status: true,
        winner: {
          name: winnerValue.name,
          position: winnerValue.position,
        },
      };
    } else if (isDraw) {
      return {
        label: "It's a draw!",
        status: true,
        winner: {
          name: "Draw",
          position: "draw",
        },
      };
    } else {
      return {
        label: `${xIsNext ? player1.name : player2.name}'s turn`,
        status: false,
      };
    }
  };

  useEffect(() => {
    determineStatus();
    if (determineStatus().status) {
      setWin(true);
      setNameOfWinner(determineStatus().winner?.position as string);
    }
  }, [board, xIsNext, player1, player2]);

  const handleReset = (): void => {
    setIsLoading(true);
    const params: AddRecordParams = {
      winner: nameOfWinner,
      rounds: count,
      players: session.players,
      sessionId: session.sessionId,
    };

    addRecord(params).then((res: AddRecordResponse) => {
      setBoard(Array(9).fill(null));
      // Reset the turn to player1
      setXIsNext(true);
      setWin(false);

      if (win) {
        setCount(count + 1);
      }
      setTriggerRerender(!triggerRerender);
      setPlayers(res.gameRecord.players);
      setIsLoading(false);
    });
  };

  const handleExit = (): void => {
    dispatch(setStart(false));
    dispatch(setSession(initialValue));
  };

  return (
    <div className="board">
      <GameRecords triggerRerender={triggerRerender} />
      <div className="game-wrapper">
        <div className="header-game">
          <h2 className="status">{determineStatus().label || ""}</h2>
          <h2 className="status">{`Round: ${count}`}</h2>
        </div>
        <Board squares={board} onClick={handleClick} />
        <div className="footer">
          {win && (
            <Button type="button" onClick={handleReset} disabled={isLoading}>
              {isLoading ? <Loading /> : "Continue"}
            </Button>
          )}
          <Button type="button" onClick={handleExit} disabled={isLoading}>
            Stop
          </Button>
        </div>
      </div>
      <div>
        {players.map((player, index) => (
          <div key={index}>
            <h4 style={{ fontWeight: "bolder", fontSize: 20 }}>
              Player {index + 1}: {player.name}
            </h4>
            <h4>No of Wins: {player.numberOfWins}</h4>
            <h4>No of Loss: {player.numberOfLoss}</h4>
            <h4>No of Draws: {player.numberOfDraws}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;

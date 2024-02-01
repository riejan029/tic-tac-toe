import type { ChangeEvent, ReactElement } from "react";

import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "~/components/button";

import Modal from "~/components/modal/Modal";
import TextField from "~/components/text-field";
import { PlayerObject, setPlayers } from "~/redux/slice/playerSlice";
import { setStart } from "~/redux/slice/sessionSlice";
import { PLAYER_CODE } from "~/utils/contants";

const Start = (): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const { player1, player2 } = PLAYER_CODE;

  const dispatch = useDispatch();
  const handleOpenModal = (): void => {
    setOpen(true);
  };

  const handleCloseModal = (): void => {
    setOpen(false);
  };

  const handleCancel = (): void => {
    setOpen(false);
    setError(false);
  };

  const [p1, setP1] = useState<string>("");
  const [p2, setP2] = useState<string>("");

  const handlePlayer1 = (e: ChangeEvent<HTMLInputElement>): void => {
    setP1(e.target.value);
  };
  const handlePlayer2 = (e: ChangeEvent<HTMLInputElement>): void => {
    setP2(e.target.value);
  };

  const handleSubmit = (): void => {
    if (p1 === "" || p2 === "") {
      setError(true);
      return;
    }

    const constantData = {
      numberOfWins: 0,
      numberOfLoss: 0,
      numberOfDraws: 0,
    };

    const players: PlayerObject[] = [
      { name: p1, position: player1, ...constantData },
      { name: p2, position: player2, ...constantData },
    ];
    dispatch(setPlayers(players));
    dispatch(setStart(true));
    setOpen(false);
  };

  return (
    <>
      <button className="start-wrapper" onClick={handleOpenModal}>
        Start
      </button>
      <Modal open={open} onClose={handleCloseModal}>
        <div className="player-modal">
          <TextField
            id="player 1"
            placeholder="Enter player 1"
            onChange={handlePlayer1}
            value={p1}
          />
          <TextField
            id="player 2"
            placeholder="Enter player 2"
            onChange={handlePlayer2}
            value={p2}
          />
        </div>
        {error && (
          <div className="error-message">Please input players name... </div>
        )}
        <div className="action-button">
          <Button type="button" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="button" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Start;

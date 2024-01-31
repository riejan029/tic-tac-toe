import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types";

type PlayerPosition = "p1" | "p2";
export interface PlayerObject {
  name: string;
  numberOfWins: number;
  numberOfLoss: number;
  numberOfDraws: number;
  position: PlayerPosition;
}

const initialValue: PlayerObject[] = [];

const playerSlice = createSlice({
  name: "playerSlice",
  initialState: initialValue,
  reducers: {
    setPlayers: (state, action): void => {
      state.splice(0, state.length, ...action.payload);
    },
  },
});

export const getPlayers = (state: RootState): PlayerObject[] => state.players;

export const { setPlayers } = playerSlice.actions;
export default playerSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types";

interface RoundData {
  roundId: string;
  data: RoundObject[];
}

interface RoundObject {
  winner: string;
  isDraw: boolean;
  roundNo: number;
}

const initialValue: RoundData = {
  roundId: "",
  data: [],
};

const roundSlice = createSlice({
  name: "roundSlice",
  initialState: initialValue,
  reducers: {
    setRoundData: (state, action): void => {
      state.data.splice(0, state.data.length, ...action.payload);
    },
    setRoundId: (state, action): void => {
      state.roundId = action.payload;
    },
  },
});

export const getRoundId = (state: RootState): string => state.rounds.roundId;
export const getRoundData = (state: RootState): RoundObject[] =>
  state.rounds.data;
export const getRound = (state: RootState): RoundData => state.rounds;

export const { setRoundData, setRoundId } = roundSlice.actions;
export default roundSlice.reducer;

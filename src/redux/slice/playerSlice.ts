import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types";
import type { PlayerResponse } from "~/api/types";

export const initialValue: PlayerResponse = {
  sessionId: "",
  players: [],
};

const playerSlice = createSlice({
  name: "playerSlice",
  initialState: initialValue,
  reducers: {
    setSession: (state, action: PayloadAction<PlayerResponse>): void => {
      state.players = action.payload.players;
      state.sessionId = action.payload.sessionId;
    },
  },
});

export const getSession = (state: RootState): PlayerResponse => state.players;

export const { setSession } = playerSlice.actions;
export default playerSlice.reducer;

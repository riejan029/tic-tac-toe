import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../types";

interface SessionType {
  start: boolean;
  continue: boolean;
  exit: boolean;
}

const initialValue: SessionType = {
  continue: false,
  start: false,
  exit: false,
};
const sessionSlice = createSlice({
  name: "session",
  initialState: initialValue,
  reducers: {
    setStart: (state, action): void => {
      state.start = action.payload;
    },
    setContinue: (state, action): void => {
      state.continue = action.payload;
    },
    setExit: (state, action): void => {
      state.exit = action.payload;
    },
  },
});

export const getSession = (state: RootState): SessionType => state.session;

export const { setContinue, setExit, setStart } = sessionSlice.actions;
export default sessionSlice.reducer;

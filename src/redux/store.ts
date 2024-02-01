import { configureStore } from "@reduxjs/toolkit";
import sessionSlice from "./slice/sessionSlice";
import playerSlice from "./slice/playerSlice";
import roundSlice from "./slice/roundSlice";

export const store = configureStore({
  reducer: { session: sessionSlice, players: playerSlice, rounds: roundSlice },
});

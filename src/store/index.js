import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterSlice from './counterSlice.js';
import authSlice from "./authSlice.js";

const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice },
});

export const counterActions = counterSlice.actions;

export default store;

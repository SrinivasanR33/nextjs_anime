import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../actions/userSlice";
import masterReducer from "../actions/masterSlice";

export const store = configureStore({
  reducer: { userReducer, masterReducer },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

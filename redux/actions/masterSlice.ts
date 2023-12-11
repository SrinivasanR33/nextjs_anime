import { Load, UserL } from "@/app/commen/CommenTypeDefination";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  Loading: Boolean;
  theme: string;
  emploeeLoading: Boolean;
};

const initialState: UserState = {
  Loading: false,
  theme: "dark",
  emploeeLoading: false,
};

export const Master = createSlice({
  name: "master",
  initialState,
  reducers: {
    reset: () => initialState,
    loading: (state, action: PayloadAction<Boolean>) => {
      state.Loading = action.payload;
    },
    setLoadingState: (state, action: PayloadAction<Boolean>) => {
      state.emploeeLoading = action.payload;
    },
    theme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { setLoadingState, theme, reset } = Master.actions;
export default Master.reducer;

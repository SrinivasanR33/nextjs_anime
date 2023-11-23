import { Load, UserL } from "@/app/commen/CommenTypeDefination";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  Loading: Boolean;
  emploeeLoading: Boolean;
};

const initialState: UserState = {
  Loading: false,
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
  },
});

export const { setLoadingState, reset } = Master.actions;
export default Master.reducer;

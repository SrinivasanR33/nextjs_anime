import { Load, UserL } from "@/app/commen/CommenTypeDefination";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  Loading: Boolean;
  theme: string;
  emploeeLoading: Boolean;
  fullScreen:Boolean
};

const initialState: UserState = {
  Loading: false,
  theme: "dark",
  fullScreen:false,
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
    setFullScreenState: (state, action: PayloadAction<Boolean>) => {
      state.fullScreen = action.payload;
    },
    theme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

export const { setLoadingState, theme,setFullScreenState, reset } = Master.actions;
export default Master.reducer;

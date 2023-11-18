import { UserL } from "@/app/commen/CommenTypeDefination";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  userList: UserL[];
  userData: UserL;
};

const initialState: UserState = {
  userList: [],
  userData: {
    id: "", // Provide default values or handle them as needed
    name: "",
    email: "",
    number: "",
  },
};

export const User = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,

    getUserList: (state, action: PayloadAction<UserL[]>) => {
      state.userList = action.payload;
    },
    editUser: (state, action: PayloadAction<UserL>) => {
      state.userData = action.payload;
    },
  },
});

export const { getUserList, editUser, reset } = User.actions;
export default User.reducer;

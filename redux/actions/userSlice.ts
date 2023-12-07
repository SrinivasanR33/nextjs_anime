import { UserL } from "@/app/commen/CommenTypeDefination";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { boolean } from "zod";

type UserState = {
  userList: UserL[];
  userData: UserL;
  isAdmin: boolean;
};
const initialState: UserState = {
  userList: [],
  userData: {
    id: "", // Provide default values or handle them as needed
    name: "",
    email: "",
    number: "",
    isAdmin: false,
    password: "",
  },
  isAdmin: false,
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
    AdminState: (state, action: PayloadAction<boolean>) => {
      // console.log(action, state, action.payload);
      // localStorage.setItem("isAdmin", action.payload.toString());
      state.isAdmin = action.payload;
    },
  },
});

export const { getUserList, editUser, reset, AdminState } = User.actions;
export default User.reducer;

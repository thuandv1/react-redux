import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  isLogged: false,
  isLoading: false,
  error: null,
  theme: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      // call api
      state.isLoading = true;
      console.info("Dang login...");
    },
    loginSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.userInfo = payload.userInfo;
      console.log("Login thành công!");
    },
    loginFailure: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.error;
    },
    changeTheme: (state, { payload }) => {
      console.log("🚀 ~ payload:", payload);
      state.theme = payload.theme;
    }
  }
});

export const { login, loginSuccess, loginFailure, changeTheme } =
  userSlice.actions;

export const userReducer = userSlice.reducer;

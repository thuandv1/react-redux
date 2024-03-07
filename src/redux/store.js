import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { userReducer } from "./module/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer
  }
});

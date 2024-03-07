import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./module/userSlice";

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;

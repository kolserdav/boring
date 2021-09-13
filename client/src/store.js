import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./components/pages/Auth/authSlice";

export default configureStore({
  reducer: {
    user: authReducer
  }
})